export const formatAmount = amount => {
  if (amount.split(' ').length < 2) return amount;

  return amount.split(' ')[1];
};
