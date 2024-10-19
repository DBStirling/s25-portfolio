import React from 'react'
import { useEffect, useState } from 'react';
import '../styles/style.css'

export default function LoadingPage({ onLoadingComplete }) {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    setTimeout(() => {
                        clearInterval(interval);
                        onLoadingComplete(); // Trigger content load when at 100%
                    }, 250); // Delay of 250 milliseconds
                    return 100; // Ensure it stops at 100%
                }
            });
        }, 10); // Adjust interval for speed of counting

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
