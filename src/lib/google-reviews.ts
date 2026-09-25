export interface GoogleReviewStats {
  rating: number;
  count: number;
}

interface PlaceDetailsResponse {
  rating?: number;
  userRatingCount?: number;
}

interface TextSearchResponse {
  places?: Array<{
    id?: string;
    rating?: number;
    userRatingCount?: number;
  }>;
}

let statsPromise: Promise<GoogleReviewStats | null> | undefined;

function extractPlaceId(value: string) {
  return value.match(/(?:!1s|place_id=)(ChIJ[a-zA-Z0-9_-]+)/)?.[1];
}

async function resolvePlaceId(url: string) {
  const directPlaceId = extractPlaceId(url);
  if (directPlaceId) return { placeId: directPlaceId };

  const response = await fetch(url, { redirect: "follow" });
  const placeId = extractPlaceId(response.url);
  if (placeId) return { placeId };

  const name = decodeURIComponent(
    response.url.match(/\/place\/([^/@]+)/)?.[1] ?? "",
  ).replaceAll("+", " ");
  const coordinates = response.url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
  return { name, coordinates };
}

async function fetchGoogleReviewStats(
  url: string,
): Promise<GoogleReviewStats | null> {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  try {
    const resolved = await resolvePlaceId(url);
    let placeId = resolved.placeId;

    if (!placeId && resolved.name) {
      const locationBias = resolved.coordinates
        ? {
            circle: {
              center: {
                latitude: Number(resolved.coordinates[1]),
                longitude: Number(resolved.coordinates[2]),
              },
              radius: 500,
            },
          }
        : undefined;
      const searchResponse = await fetch(
        "https://places.googleapis.com/v1/places:searchText",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask": "places.id",
          },
          body: JSON.stringify({ textQuery: resolved.name, locationBias }),
        },
      );
      if (!searchResponse.ok) return null;
      const search = (await searchResponse.json()) as TextSearchResponse;
      placeId = search.places?.[0]?.id;
    }

    if (!placeId) return null;

    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount",
        },
      },
    );

    if (!response.ok) return null;

    const place = (await response.json()) as PlaceDetailsResponse;
    if (
      typeof place.rating !== "number" ||
      typeof place.userRatingCount !== "number"
    ) {
      return null;
    }

    return { rating: place.rating, count: place.userRatingCount };
  } catch {
    return null;
  }
}

export function getGoogleReviewStats(url: string, fallback: GoogleReviewStats) {
  if (!import.meta.env.GOOGLE_PLACES_API_KEY) return Promise.resolve(fallback);

  statsPromise ??= fetchGoogleReviewStats(url);
  return statsPromise;
}
