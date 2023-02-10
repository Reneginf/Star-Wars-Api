import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import MVC dependencies
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

// Import Components
import { Navbar } from "./component/navbar";
import { Home } from "./pages/home.jsx";
import { People } from "./pages/people.jsx";
import { Footer } from "./component/footer";


const Layout = () => {

    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<People />} path="/people" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
