export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type Store = {
  value: number;
  label: string;
};

export type SalesByGender = {
  gender: string;
  sum: number;
};

export type FilterData = {
  store?: Store;
};

export type buildPieChartConfig = {
  labels: string[];
  series: number[];
};
