import './App.css';
import Listing from './components/Listing';
import etsy from './data/etsy.json';

function App() {
  return (
    <div className="App">
      <Listing items={etsy} />
    </div>
  );
}

export default App;