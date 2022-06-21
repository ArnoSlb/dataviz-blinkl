import './App.css';
import StatsScreen from './Components/StatsScreen/StatsScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>  
          <Route path="/:project" element={<StatsScreen/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
