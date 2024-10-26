import React, { useRef, Suspense, lazy, useEffect } from "react";
import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoadingPage from './pages/loadingPage.jsx';
import './styles/App.css';

const Home = lazy(() => import('./pages/home.jsx'));
const About = lazy(() => import('./pages/about.jsx'));
const Extras = lazy(() => import('./pages/extras.jsx'));
const MyFitnessPal = lazy(() => import('./pages/myFitnessPal'));
const DietMe = lazy(() => import('./pages/dietMe.jsx'));
const DonEfficace = lazy(() => import('./pages/donEfficace.jsx'));


function App() {
    const scrollableRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation(); // Tracks location changes

    useEffect(() => {
        setIsLoading(true);
    }, [location]);

    const handleLoadingComplete = () => {
        setIsLoading(false);
        // return () => clearTimeout(timer);
    };

    return (
        <div className="app-container">
            <div className="background-image">
                <div className='bg-container' ref={scrollableRef}>                
                    {isLoading ? (
                        <LoadingPage onLoadingComplete={handleLoadingComplete} />
                    ) : (
                        <div>
                            <Suspense>
                                <div className='nav-bar-container'>
                                    <NavBar />
                                </div>
                                <div>
                                    <Routes>
                                        <Route path="/s25-portfolio/" element={<Home scrollableRef={scrollableRef} />} />
                                        <Route path="/" element={<Home scrollableRef={scrollableRef} />} />
                                        <Route path="/about" element={<About />} />
                                        <Route path="/extras" element={<Extras />} />
                                        <Route path="/myFitnessPal" element={<MyFitnessPal />} />
                                        <Route path="/dietMe" element={<DietMe />} />
                                        <Route path="/donEfficace" element={<DonEfficace />} />
                                    </Routes>
                                </div>
                                <Footer />
                            </Suspense>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;