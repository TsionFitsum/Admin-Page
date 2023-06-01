
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Bus from './pages/Bus';
import Stations from './pages/Stations';
import Routess from './pages/Routess';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import { Busadd } from './components/Busadd';
import Badd from './components/Badd';
import Viewbuss from './components/Viewbuss';
import Updatebuss from './components/Updatebuss';
import Addstations from './components/Addstations'
import Viewstation from './components/Viewstation';
import Updatestation from './components/Updatestation';
import Addroute from './components/Addroute';
import Viewroute from './components/Viewroute';
import Updateroute from './components/Updateroute';

function App() {
  return (
    <>
    <Router>
     <Sidebar />
     
     <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/stations' element={<Stations />}/>
      <Route path='/bus' element={<Bus />}/>
      <Route path='/routess' element={<Routess />}/>
      <Route path='/bus/badd' element={<Badd />}/>
      <Route path='/bus/viewbuss/:busid' element={<Viewbuss />}/>
      <Route path='/bus/updatebuss/:busid' element={<Updatebuss />}/>
      <Route path='/stations/addstations' element={<Addstations />}/>
      <Route path='/stations/viewstations/:busid' element={<Viewstation />}/>
      <Route path='/stations/updatestations/:busid' element={<Updatestation />}/>
      <Route path='/routess/addroute' element={<Addroute />}/>
      <Route path='/routess/viewroute/:busid' element={<Viewroute />}/>
      <Route path='/routess/updateroute/:busid' element={<Updateroute />}/>
     
      
     </Routes>

    </Router>
    </>
  );
}

export default App;
