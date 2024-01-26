import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import routes from "./Routes/routes";
import "./App.css";
import Order from "./components/Order";
import Platform from "./components/Platform";
import SummaryCard from "./components/SummaryCard";
import SalesTrendsChart from "./components/SalesTrendChart";

const App = () => {
    return (
        // <Router>
        //     <NavBar />
        //     <div className="container mt-4">
        //         <Routes>
        //             {routes.map((route, index) => (
        //                 <Route
        //                     key={index}
        //                     path={route.path}
        //                     element={route.component}
        //                 />
        //             ))}
        //         </Routes>
        //     </div>
        // </Router>
        <>
            <NavBar></NavBar>
            <Order></Order>
            <Platform></Platform>
            <SummaryCard></SummaryCard>
            <SalesTrendsChart></SalesTrendsChart>
        </>
    );
};

export default App;
