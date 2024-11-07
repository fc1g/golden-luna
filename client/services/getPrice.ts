export const getPrice = (monthIndex: number) => {
  const prices = [60, 60, 65, 65, 70, 95, 140, 140, 80, 65, 60, 60];
  return prices[monthIndex] || 0;
};
