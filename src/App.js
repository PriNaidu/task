import logo from './logo.svg';
import './App.css';
import SideNav from './Components/SideNav.jsx';
import DatabotContainer from './Components/DatabotContainer.jsx';
import DataVisualContainer from './Components/DataVisualContainer.jsx';


function App() {
  return (
    <div className="p-[25px] w-screen h-screen bg-[#F5F5F5] flex gap-[15px]">
     <SideNav/>
     <DatabotContainer/>
     <DataVisualContainer/>
    </div>
  );
}

export default App;
