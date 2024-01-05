import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import Revenue from "./components/Revenue";
import Transactions from "./components/Transactions";
import "./index.css";

const App = () => {
  return (
    <div> 
      < Menu />
      <div className="cards">
        < Dashboard />
        < Dashboard />
        < Dashboard />
      </div>
      <div className="revenue-container">
        < Revenue />
      </div>
     
    
      {/* < Transactions /> */}
    </div>
  )
    
}

export default App;
