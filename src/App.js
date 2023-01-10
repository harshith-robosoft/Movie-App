import logo from './logo.svg';
import './App.css';
import store from './Store/store';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Navbar/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
   </Routes>
   </Provider>
    </div>
  );
}

export default App;
