import React from 'react';

const rows = [
    {
        feature: 'Cost',
        individual: 'Full price for each tool',
        group: 'Shared cost, so a lower monthly spend',
    },
    {
        feature: 'Number of tools',
        individual: 'Usually one or two before the budget runs out',
        group: 'Several tools available under one plan',
    },
    {
        feature: 'Setup',
        individual: 'Separate accounts and billing for each tool',
        group: 'One plan, one place to get your access',
    },
    {
        feature: 'Account type',
        individual: 'Your own private account',
        group: 'Shared access with fair use limits',
    },
    {
        feature: 'Best for',
        individual: 'Large teams with a bigger budget',
        group: 'Freelancers, agencies and solopreneurs watching costs',
    },
];

const ComparisonHome = () => {
    return (
        <section id="comparison" className="gb-section gb-section--dark gb-comparison-dark">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Group Buy Access vs Buying Every Tool Yourself</h2>
                    <p>
                        Individual subscriptions are powerful, but the costs add up quickly when you need more than one tool. Here is how the two options compare in practice.
                    </p>
                </div>
                <div className="gb-table-wrap">
                    <table className="gb-table">
                        <thead>
                            <tr>
                                <th scope="col">Feature</th>
                                <th scope="col">Individual Subscriptions</th>
                                <th scope="col">Group Buy Access</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.feature}>
                                    <th scope="row">{row.feature}</th>
                                    <td>{row.individual}</td>
                                    <td>{row.group}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="gb-note">
                    If you want broad tool access and your budget matters, group buy SEO tools are a practical way to work with premium data.
                </p>
            </div>
        </section>
    );
};

export default ComparisonHome;
