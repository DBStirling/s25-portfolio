import React, { useRef, Suspense, lazy, useEffect } from "react";
import { useState } from 'react'
import { Routes, Route, useLocation  } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
// import Home from './pages/home.jsx'
// import About from './pages/about.jsx'
// import Extras from './pages/extras.jsx'
// import MyFitnessPal from './pages/myFitnessPal'
// import DietMe from './pages/dietMe.jsx'
import LoadingPage from './pages/loadingPage.jsx'
import './styles/App.css'


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
                                        {/* Redirect from root to the main GitHub Pages base path */}
                                        <Route path="/" element={<Navigate to="/s25-portfolio/" replace />} />
                                        <Route path="/s25-portfolio/" element={<Home scrollableRef={scrollableRef} />} />
                                        <Route path="/s25-portfolio/about" element={<About />} />
                                        <Route path="/s25-portfolio/extras" element={<Extras />} />
                                        <Route path="/s25-portfolio/myFitnessPal" element={<MyFitnessPal />} />
                                        <Route path="/s25-portfolio/dietMe" element={<DietMe />} />
                                        <Route path="/s25-portfolio/donEfficace" element={<DonEfficace />} />
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