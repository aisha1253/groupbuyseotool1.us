import React from 'react';

const cards = [
    {
        title: 'Lower Monthly Costs',
        text: 'Access useful SEO software through shared subscription plans instead of purchasing every tool separately. Our cheap seo tools options help you manage software expenses while keeping essential research capabilities within reach.',
        icon: 'fa-solid fa-coins',
    },
    {
        title: 'Multiple Tools, One Place',
        text: 'Explore keyword research, backlink analysis, technical audits, and content planning tools from one platform. Spend less time comparing subscriptions and more time working on your projects.',
        icon: 'fa-solid fa-layer-group',
    },
    {
        title: 'Built for Everyday SEO',
        text: 'Research competitors, identify content opportunities, and review website performance with relevant data. Whether you manage one website or several client projects, find tools that support your workflow.',
        icon: 'fa-solid fa-chart-line',
    },
    {
        title: 'Simple Access Process',
        text: 'Choose your preferred plan, complete your order, and follow the provided access instructions. Activation and availability depend on the selected tools and plan.',
        icon: 'fa-solid fa-bolt',
    },
    {
        title: 'Plans for Different Needs',
        text: 'Start with a plan that matches your current workload and budget. Compare Lite, Small, and Mega to find the right combination of tools and available features.',
        icon: 'fa-solid fa-sliders',
    },
    {
        title: 'Support When You Need Help',
        text: 'Have a question about your plan or trouble accessing a tool? Contact our support team for setup guidance, access assistance, and troubleshooting.',
        icon: 'fa-solid fa-headset',
    },
];

const BenefitsHome = () => {
    return (
        <section id="benefits" className="gb-section">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Powerful SEO Tools Without the High Subscription Costs</h2>
                    <p>
                        Your SEO toolkit should support your work, not consume your entire budget. Explore affordable shared access to research, analysis, and optimization tools designed for everyday SEO tasks.
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
