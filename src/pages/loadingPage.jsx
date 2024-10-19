import React from 'react'
import { useEffect, useState } from 'react';
import '../styles/style.css'

export default function LoadingPage({ onLoadingComplete }) {
    const [percentage, setPercentage] = useState(1);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setPercentage((prev) => {
    //             if (prev < 100) {
    //                 return prev < 99 ? prev + 1 : 100; // Increment until 100, but not past
    //             } else {
    //                 setTimeout(() => {
    //                     onLoadingComplete(); // Trigger content load when at 100%
    //                 }, 250); // Delay of 250 milliseconds
    //                 return 100; // Ensure it stops at 100%
    //             }
    //         });
    //     }, 10); // Adjust interval for speed of counting

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev < 100) {
                    const increment = Math.floor(Math.random() * 6) + 1; // Random increment of 1 to 3
                    setTimeout(() => {}, Math.floor(Math.random() * 3)); // Delay before loading complete
                    const newPercentage = Math.min(prev + increment, 100); // Ensure it does not exceed 100
                    return newPercentage == 1 ? 100 : newPercentage;
                } else {
                    clearInterval(interval); // Stop the interval once we reach 100
                    onLoadingComplete(); // Trigger loading complete
                    return 100; // Ensure it returns 100
                }
            });
        }, 40); // Adjust interval for speed of counting

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <div className="loading-page">
            <h1 className="loading-text">
                {percentage.toString().padStart(3, '0')}%
            </h1>
        </div>
    );
}
