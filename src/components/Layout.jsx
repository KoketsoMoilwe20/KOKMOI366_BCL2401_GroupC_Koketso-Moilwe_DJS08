import React from "react";
import { Outlet } from "react-router-dom"; /* The outlet creates a hole where the matching route can render */
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="site-wrapper">
       <Header />
       <main>
        <Outlet />
       </main>
      
        <Footer />
    </div>
     
    
  );
}
