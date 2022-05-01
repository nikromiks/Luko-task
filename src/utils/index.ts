export function currencyFormat(num: number, currencySymbol = "€") {
  return (
    currencySymbol + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  );
}
