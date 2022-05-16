import './App.css';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
