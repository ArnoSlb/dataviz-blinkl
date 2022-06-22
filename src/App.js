import './App.css';
import StatsScreen from './Components/StatsScreen/StatsScreen'
import StatsScreenHome from './Components/StatsScreenHome/StatsScreenHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>  
          <Route path="/blinklstudio_stats/:project" element={<StatsScreen/>}/>
          <Route path="/blinklstudio_stats/" element={<StatsScreenHome/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
