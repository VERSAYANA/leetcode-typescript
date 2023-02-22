export function maxProfit1(prices: number[]): number {
  let profit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    profit = Math.max(prices[i] - minPrice, profit);
  }

  return profit;
}

export function maxProfit2(prices: number[]): number {
  let result = 0;
  let minPrice = Number.MAX_VALUE;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > result) {
      result = price - minPrice;
    }
  }

  return result;
}
