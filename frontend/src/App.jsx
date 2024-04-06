import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home'
import Sidebar from './componees/Sidebar'
import DeviceAdd from './componees/DeviceAdd'
import DisplayDivces from './componees/DisplayDivces'
import DeviceUpdate from './componees/DeviceUpdate'
function App() {


  return (
    <>
    
     <Router>
        <Routes>
           <Route path ="" element={<Sidebar/>} >
              <Route path="" element={<DisplayDivces />} />
              <Route path="nexts" element={<DeviceUpdate />} />
              <Route path="adddevice" element={<DeviceAdd />} />
              <Route path="home" element={<Home />} />
             
              
           </Route>
        </Routes>
     </Router>
    </>
  )
}

export default App
