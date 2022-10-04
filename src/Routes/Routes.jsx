import React from 'react'
import { Route, Routes} from "react-router-dom";
import GetStarted from '../Components/GetStarted';
import Features from '../Pages/Features';
import LandingPage from '../Pages/LandingPage';
import PricePlan from '../Pages/PricePlan';

function AllRoutes() {
  return (
    <>
     <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/#getStartedSection' element= {<GetStarted/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<PricePlan/>}/>
    </Routes> 
    </>
  )
}

export default AllRoutes
