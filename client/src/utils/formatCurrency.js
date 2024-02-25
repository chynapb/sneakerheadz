// Format prices as USD

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});

export const formatCurrency = (num) => {
  return CURRENCY_FORMATTER.format(num);
};
