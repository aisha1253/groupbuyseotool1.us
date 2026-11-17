import React, { useEffect, useState } from "react";
import { CounterOneData } from '@/data/counter';

const CounterOne = () => {
    const [counters, setCounters] = useState({});

    useEffect(() => {
        const animateCounters = () => {
            CounterOneData.forEach((item) => {
                const targetNumber = parseInt(item.countNumber, 10);
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

                    setCounters((prev) => ({
                        ...prev,
                        [item.id]: Math.floor(currentNumber),
                    }));
                }, duration / steps);
            });
        };

        const timeout = setTimeout(animateCounters, 400);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="gb-stats">
            <div className="container">
                <div className="gb-stats__grid">
                    {CounterOneData.map((item) => (
                        <div key={item.id} className="gb-stat">
                            <h3>
                                {counters[item.id] || 0}
                                <span>{item.countNumberLetter}</span>
                            </h3>
                            <p>{item.countNumberText}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CounterOne;
