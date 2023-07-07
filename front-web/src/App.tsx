import Filter from './components/filter';
import Header from './components/header';
import SalesByDate from './components/sales-by-date';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
      </div>
    </>
  );
}

export default App;
