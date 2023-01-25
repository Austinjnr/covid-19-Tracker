//import logo from './logo.svg';
import './App.css';
import BarGraph from "./components/Metrics"

function App() {
  return (
    <div className="App">
      <card className="">
      <h2>A Graph of Confirmed Cases Against Countries</h2>
      <BarGraph />
      </card>
    </div>
  );
}

export default App;
