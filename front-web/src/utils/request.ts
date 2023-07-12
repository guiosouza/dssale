import axios from 'axios';
import { FilterData } from '../types';
import { formatDateToServer } from './formatters';

const baseUrl = 'http://localhost:8080';

export const makeRequest = axios.create({
  baseURL: baseUrl
});

export const buildFilterParams = (
  filterData?: FilterData,
  extraParams?: Record<string, unknown>
) => {
  return {
    minDate: formatDateToServer(filterData?.dates?.[0]),
    maxDate: formatDateToServer(filterData?.dates?.[1]),
    gender: filterData?.gender,
    ...extraParams
  };
};
