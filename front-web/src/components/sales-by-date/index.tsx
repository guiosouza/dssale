import ReactApexChart from 'react-apexcharts';
import { chartOptions } from './helper';

import './styles.css';

const initialData = [
  {
    x: '2020-05-12',
    y: 540
  },
  {
    x: '2020-05-12',
    y: 106
  },
  {
    x: '2020-06-17',
    y: 543
  },
  {
    x: '2020-07-12',
    y: 190
  },
  {
    x: '2020-09-12',
    y: 777
  }
];

function SalesByDate() {
  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className="sales-by-date-title">Evolução de vendas</h4>
        <span className="sales-by-date-period">01/01/2017 a 31/01/2017</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">464.988,00</h2>
          <span className="sales-by-date-quantity-label">Vendas do período</span>
          <span className="sales-by-date-quantity-description">
            O gráfico mostra as vendas em todas as lojas
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Vendas', data: initialData }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDate;
