import './App.css';
import Counter from "./components/Counter"
import CounterCls from './components/CounterCls';
import CustomersList from './components/customers/CustomersList';
import CustomersTable from './components/customers/CustomersTable';
import CustPrimeReactTable from './components/customers/CustPrimeReactTable';

function App() {
  return (
    <div className="container">
     <h3>Hello World</h3>
     <p>Sample text</p>
     <Counter />

      <hr/>
     <h3>Class componet demo</h3>
     <CounterCls />

     <hr/>
     <CustomersList />

     <hr/>
     <CustomersTable />

     <hr />
     <h3>Prime react data table demo</h3>
     <CustPrimeReactTable />

      <br />
      <br />
    </div>
  );
}

export default App;
