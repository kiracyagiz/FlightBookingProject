import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BuyPlace from './pages/BuyPlace'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='buy' element={<BuyPlace/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
