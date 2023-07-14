import Filter from './components/filter';
import Header from './components/header';
import SalesSummaryByGender from './components/sales-summary-by-gender';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from './utils/resquests';
import { buildPieChartConfig, FilterData, SalesByGender } from './types';
import { buildSalesByGenderChart } from './helpers';
import './App.css';

function App() {
  // "sales/by-gender?storeId=0"
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByGender, setSalesByGender] = useState<buildPieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('sales/by-gender', { params })
      .then((response) => {
        //console.log(response.data);
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);
      })
      .catch(() => {
        console.error('Error to fetch sales by gender');
      });
  }, [params, filterData]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
    console.log('FILTER DATA', filterData);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesSummaryByGender
          name=""
          labels={salesByGender?.labels}
          series={salesByGender?.series}
        />
      </div>
    </>
  );
}

export default App;
