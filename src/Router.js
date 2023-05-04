import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './App'
import Listing from './ListingPage/Listing'
import {FilterContextProvider} from './FilterContext'
function RouterSwitch(){
    return (
        <FilterContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/listing/:id" element={<Listing />} />
                </Routes>
            </BrowserRouter>
        </FilterContextProvider>
    )
}
export default RouterSwitch