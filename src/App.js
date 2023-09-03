import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './page/HomePage';
import OrderPage from './page/OrderPage';
import CheckOut from './page/CheckOut';
import { Authenticaton } from './components/Authenticaton';
import PrivetRoute from './components/PrivetRoute';
import { Categoris } from './page/Categoris';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Page404 } from './components/Page404';
import { Profile } from './components/profile';
import { Suspense } from 'react';
import Loading from './components/loading';
import { ProductDetails } from './components/productDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <div className='mb-[90px]'>
        <Header />
        </div>
        <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/orderPage' element={<OrderPage/>} />
          <Route path='/item' element={<Categoris/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/checkout' element={
            <PrivetRoute>
            <CheckOut/>
            </PrivetRoute>
          } />

          <Route  path='/productDetails' element={<ProductDetails/>}/>
          <Route path='/login' element={<Authenticaton/>} />
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/*' element={<Page404/>}/>
        
        </Routes>
      </Suspense>

        {/* <Banner/>
        <Opening/> */}
        <Footer />
      </Router>
      


    </div>
  );
}

export default App;
