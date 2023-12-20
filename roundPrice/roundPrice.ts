function roundPrice(price: number, pattern: string): string {
  const roundedPrice: string = price.toFixed(2);
  return pattern.replace('%PRICE%', roundedPrice);
}

export default roundPrice;
