export const getFormattedAmount = (amount: number) =>
  new Intl.NumberFormat('en-US').format(amount)
