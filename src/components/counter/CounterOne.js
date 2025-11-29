import React, { useEffect, useState } from "react";
import { CounterOneData } from '@/data/counter';

const CounterOne = () => {
    const [counters, setCounters] = useState({});

    useEffect(() => {
        // Simple counter animation without jQuery plugin
        const animateCounters = () => {
            CounterOneData.forEach((item) => {
                const targetNumber = parseInt(item.countNumber);
                const duration = 2000;
                const steps = 60;
                const increment = targetNumber / steps;
                let currentNumber = 0;
                let stepCount = 0;

                const timer = setInterval(() => {
                    currentNumber += increment;
                    stepCount++;
                    
                    if (stepCount >= steps) {
                        currentNumber = targetNumber;
                        clearInterval(timer);
                    }

                    setCounters(prev => ({
                        ...prev,
                        [item.id]: Math.floor(currentNumber)
                    }));
                }, duration / steps);
            });
        };

        const timeout = setTimeout(animateCounters, 500);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            {/* fun fact start */}
            <div className="fun-fact pt-140 pb-130">
                <div className="container">
                    <div className="row">
                        {CounterOneData.map((item, i) => (
                            <div key={i} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={item.delay}>
                                <div className="counter-one__single mb-30">
                                    <div className="counter-one__single-inner">
                                        <div className="icon-box">
                                            <img src={item.image} alt={item.alt} />
                                        </div>
                                        <div className="text-box">
                                            <h3 className="counter">{counters[item.id] || 0}</h3>
                                            <span className="counter-one__letter">{item.countNumberLetter}</span>
                                            <p className="counter-one__text">{item.countNumberText}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* fun fact end */}
        </>
    )
}

export default CounterOne;