import "./App.css";

import Navbar from "./components/navbar";
import Stackcard from "./components/Stackcard";
import Welcome from "./components/Welcome";
import Taskcard from "./components/Taskcard";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div>
      <Navbar />
      <Welcome/>
      <Dashboard/>
    </div>
  );
}

export default App;