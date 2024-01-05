import Sales from "./components/Sales";
import Menu from "./components/Menu";
import NewClients from "./components/NewClients";
import Traffic from "./components/Traffic";
import Revenue from "./components/Revenue";
import Transactions from "./components/Transactions";
import "./index.css";


const App = () => {
  return (
    <div> 
      < Menu />
      <div className="cards">
        < Sales />
        < NewClients />
        < Traffic />
      </div>
      <div className="revenue-container">
        < Revenue />
        < Transactions />
      </div>
    </div>
  
  )
    
}

export default App;
