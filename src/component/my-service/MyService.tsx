import React from 'react';

const services = [
    {
        title: 'SEO Services',
        description: `Rank on Google with proven on-page, off-page, and technical SEO.`,
        points: [
            '✅ Local SEO, Ecommerce SEO, Keyword Research',
            '✅ SEO Audits & Fixes, High-Quality Backlinks',
        ],
    },
    {
        title: 'Google Ads (PPC)',
        description: `Instant traffic, qualified leads. Full PPC campaign setup and optimization.`,
        points: [
            '✅  Search & Display Ads, Remarketing, Conversion Tracking',
            '✅ Budget Control, ROI-Focused Campaigns',
        ],
    },
    {
        title: 'Social Media Marketing',
        description: `Engage your audience and grow your brand on top platforms.`,
        points: [
            '✅  Facebook, Instagram, LinkedIn & YouTube',
            '✅ Organic Content + Paid Campaigns + Retargeting',
        ],
    },
    {
        title: 'Facebook & Instagram Ads',
        description: `Drive leads and sales using hyper-targeted ad funnels.`,
        points: [
            '✅  Pixel Setup, Custom Audiences, Split Testing',
            '✅  Ad Creatives + Captions + Landing Pages',
        ],
    },
    {
        title: 'Web Design & Development',
        description: `Build fast, mobile-friendly websites that convert.`,
        points: [
            '✅  WordPress, HTML/CSS, Shopify',
            '✅  Landing Pages, Business Websites, Portfolio Sites',
        ],
    },
    {
        title: 'Analytics & Reporting',
        description: `Track your growth and make data-driven decisions.`,
        points: [
            '✅ GA4, Search Console, Tag Manager',
            '✅ Monthly Performance Reports',
        ],
    },
];

const MyService = () => {
    return (
        <section className="py-16 px-6 md:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">Services I Offer</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-blue-400">{service.title}</h3>
                        <p className="text-gray-700 mb-2">{service.description}</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            {service.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyService;
