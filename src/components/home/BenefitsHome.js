import React from 'react';

const cards = [
    {
        title: 'Lower Monthly Costs',
        text: 'Cheap SEO tools should not mean cutting corners on your workflow. Shared access lets you use premium platforms for a fraction of what individual subscriptions cost.',
        icon: 'fa-solid fa-coins',
    },
    {
        title: 'Multiple Tools, One Place',
        text: 'Research, audits, rank checks and content planning all sit under one plan. You spend less time juggling logins and more time on client work.',
        icon: 'fa-solid fa-layer-group',
    },
    {
        title: 'Built for Real SEO Work',
        text: 'Whether you are testing ideas as a beginner or running campaigns for several clients, you get the data you need to make decisions. No guessing, no waiting for budget approval.',
        icon: 'fa-solid fa-chart-line',
    },
    {
        title: 'Quick Setup',
        text: 'There is no long onboarding process. Once your order is confirmed, you receive your access details and can start working quickly.',
        icon: 'fa-solid fa-bolt',
    },
    {
        title: 'Room to Grow',
        text: 'Start small and move up when your client list or workload grows. You only pay for the level of access you actually need right now.',
        icon: 'fa-solid fa-arrow-trend-up',
    },
    {
        title: 'Help When You Need It',
        text: 'If you run into a login issue or have a question about a tool, you can reach our team. We would rather fix it fast than leave you stuck on a deadline.',
        icon: 'fa-solid fa-headset',
    },
];

const BenefitsHome = () => {
    return (
        <section id="benefits" className="gb-section">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Everything You Need to Rank, Without the Heavy Subscription Bill</h2>
                    <p>
                        Stop choosing between your budget and your toolkit. Group access makes professional SEO software realistic for one person or a whole team.
                    </p>
                </div>
                <div className="gb-features gb-features--six">
                    {cards.map((card) => (
                        <article key={card.title} className="gb-feature">
                            <div className="gb-feature__icon" aria-hidden="true">
                                <i className={card.icon} />
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsHome;
