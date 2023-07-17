import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
<<<<<<< HEAD
import PieChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import SalesTable from './components/sales-table';
import { buildSalesByPaymentMethod, buildSalesByStoreChart } from './helpers';
import { FilterData, PieChartConfig, SalesByPaymentMethod, SalesByStore } from './types';
import { buildFilterParams, makeRequest } from './utils/request';
=======
import SalesSummaryByGender from './components/sales-summary-by-gender';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from './utils/resquests';
import { buildPieChartConfig, FilterData, SalesByGender } from './types';
import { buildSalesByGenderChart } from './helpers';
import './App.css';
>>>>>>> 5aa1c83402d14efe2975e369b8ab9d808c2652f6

function App() {
  // "sales/by-gender?storeId=0"
  const [filterData, setFilterData] = useState<FilterData>();
<<<<<<< HEAD
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>();
  const [salesByPaymentMethod, setSalesByPaymentMethod] = useState<PieChartConfig>();
=======
  const [salesByGender, setSalesByGender] = useState<buildPieChartConfig>();
>>>>>>> 5aa1c83402d14efe2975e369b8ab9d808c2652f6

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('sales/by-gender', { params })
      .then((response) => {
<<<<<<< HEAD
        const newSalesByPaymentMethod = buildSalesByPaymentMethod(response.data);
        setSalesByPaymentMethod(newSalesByPaymentMethod);
=======
        //console.log(response.data);
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);
>>>>>>> 5aa1c83402d14efe2975e369b8ab9d808c2652f6
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
<<<<<<< HEAD
        <SalesByDate filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary filterData={filterData} />
          <PieChartCard name="Lojas" labels={salesByStore?.labels} series={salesByStore?.series} />
          <PieChartCard
            name="Pagamento"
            labels={salesByPaymentMethod?.labels}
            series={salesByPaymentMethod?.series}
          />
        </div>
        <SalesTable filterData={filterData} />
=======
        <SalesSummaryByGender
          name=""
          labels={salesByGender?.labels}
          series={salesByGender?.series}
        />
>>>>>>> 5aa1c83402d14efe2975e369b8ab9d808c2652f6
      </div>
    </>
  );
}

export default App;
