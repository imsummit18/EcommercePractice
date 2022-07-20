import './App.css';
import Announcement from './project/Announcement/announcement';
import Navbar from './project/Navbar/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './project/Login/login';
import Register from './project/Register/register';
import Slider from './project/Slider/slider';
import SingleItem from './project/categorySIngleItem/singleItem';
import SlidersingleItem from './project/SliderSingleItem/slidersingleItem';
function App() {
  return (
    <>
   <div className="body">
   <BrowserRouter>
<Announcement/>
<Navbar/>

<Routes>
  <Route path='/' element={<Slider/>}/>
  <Route path='/slider/:id' element={<SlidersingleItem/>}/>
  </Routes>


  <Routes>
  <Route path='/category/:id' element={<SingleItem/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
</Routes>


    </BrowserRouter>  

   </div>
    </>
  );
}

export default App;
