import React from 'react';

const rows = [
    {
        feature: 'Monthly Cost',
        individual: 'Separate subscription costs for each platform',
        group: 'Shared access through a lower-cost plan',
    },
    {
        feature: 'Tool Selection',
        individual: 'Tools purchased individually',
        group: 'Multiple included tools depending on the plan',
    },
    {
        feature: 'Setup',
        individual: 'Separate registration and billing for each provider',
        group: 'Centralized plan selection and access instructions',
    },
    {
        feature: 'Account Access',
        individual: 'Individual account with provider-defined permissions',
        group: 'Shared access with tool-specific conditions',
    },
    {
        feature: 'Usage Limits',
        individual: "Based on the provider's subscription tier",
        group: 'Shared usage limits and available features',
    },
    {
        feature: 'Best For',
        individual: 'Users needing private accounts and full individual subscription capabilities',
        group: 'Budget-conscious freelancers, agencies, and website owners',
    },
];

const ComparisonHome = () => {
    return (
        <section id="comparison" className="gb-section gb-section--dark gb-comparison-dark">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Group Buy SEO Tools vs Individual Subscriptions</h2>
                    <p>
                        Buying separate subscriptions can become expensive when your work requires multiple SEO platforms. Shared access offers another option for people who need useful tools at a more manageable monthly cost.
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
                    If you want access to multiple SEO research platforms without maintaining separate subscriptions, a group buy plan may be a practical option. Compare features, account types, and usage limits to decide which approach works best for you.
                </p>
            </div>
        </section>
    );
};

export default ComparisonHome;
