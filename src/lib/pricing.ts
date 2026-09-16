// Computes the discounted price for a service/option, keeping the discount optional
// so it can be tweaked or removed later without touching call sites.

export interface DiscountedPrice {
  normalPrice: number;
  finalPrice: number;
  discountPercent?: number;
}

export function getDiscountedPrice(
  price: number,
  discountPercent?: number,
): DiscountedPrice {
  if (!discountPercent) {
    return { normalPrice: price, finalPrice: price };
  }
  return {
    normalPrice: price,
    finalPrice: Math.round(price * (1 - discountPercent / 100)),
    discountPercent,
  };
}
