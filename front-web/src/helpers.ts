import { SalesByGender } from './types';

<<<<<<< HEAD
export const buildSalesByStoreChart = (sales: SalesByStore[]) => {
  const labels = sales.map((sale) => sale.storeName);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};

export const buildSalesByPaymentMethod = (sales: SalesByPaymentMethod[]) => {
  const labels = sales.map((sale) => sale.description);
=======
export const buildSalesByGenderChart = (sales: SalesByGender[]) => {
  const labels = sales.map((sale) => sale.gender);
>>>>>>> 5aa1c83402d14efe2975e369b8ab9d808c2652f6
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
