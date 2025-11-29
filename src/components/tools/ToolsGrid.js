import React, { useState } from 'react';
import Link from 'next/link';
import { ToolsData } from '@/data/tools';

const ToolsGrid = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Tools');

    const categories = ['All Tools', 'Keyword Research', 'On-Page SEO', 'Off-Page SEO', 'Analytics', 'Social Media', 'Content Tools'];

    const filteredTools = ToolsData.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             tool.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All Tools' || tool.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            {/* tools grid start */}
            <div className="tools-grid pt-200 pb-120">
                <div className="container">
                    {/* Header Section */}
                    <div className="row mb-60">
                        <div className="col-xl-12 text-center">
                            <h2 className="section-title__two-title wow fadeInUp" data-wow-delay=".3s">
                                Access Premium SEO Tools at Affordable Prices
                            </h2>
                            <p className="mt-20 wow fadeInUp" data-wow-delay=".5s">
                                Get instant access to 50+ premium SEO and digital marketing tools through our group buy platform
                            </p>
                        </div>
                    </div>

                    {/* Search and Filter */}
                    <div className="row mb-50">
                        <div className="col-xl-12">
                            <div className="tools-search-filter wow fadeInUp" data-wow-delay=".3s">
                                <div className="search-box" style={{marginBottom: '30px'}}>
                                    <input 
                                        type="text" 
                                        placeholder="Search tools..." 
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '15px 20px',
                                            borderRadius: '10px',
                                            border: '1px solid #e0e0e0',
                                            fontSize: '16px'
                                        }}
                                    />
                                </div>
                                <div className="category-filter" style={{display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center'}}>
                                    {categories.map((category, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedCategory(category)}
                                            style={{
                                                padding: '10px 20px',
                                                borderRadius: '25px',
                                                border: 'none',
                                                background: selectedCategory === category ? 'linear-gradient(45deg, #667eea, #764ba2)' : '#f5f5f5',
                                                color: selectedCategory === category ? 'white' : '#333',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                fontSize: '14px',
                                                fontWeight: '500'
                                            }}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tools Grid */}
                    <div className="row">
                        {filteredTools.map((tool, index) => (
                            <div key={index} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${0.3 + (index * 0.1)}s`}>
                                <div className="tool-card mb-30" style={{
                                    background: 'white',
                                    borderRadius: '15px',
                                    padding: '30px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div className="tool-icon" style={{marginBottom: '20px'}}>
                                        <img src={tool.icon} alt={tool.name} style={{width: '60px', height: '60px'}} />
                                    </div>
                                    <h3 style={{fontSize: '22px', fontWeight: 'bold', marginBottom: '15px', color: '#333'}}>
                                        {tool.name}
                                    </h3>
                                    <p style={{color: '#666', marginBottom: '20px', lineHeight: '1.6', flexGrow: 1}}>
                                        {tool.description}
                                    </p>
                                    <div className="tool-tags" style={{marginTop: 'auto'}}>
                                        {tool.tags.map((tag, i) => (
                                            <span key={i} style={{
                                                display: 'inline-block',
                                                padding: '5px 12px',
                                                background: '#f0f0f0',
                                                borderRadius: '15px',
                                                fontSize: '12px',
                                                marginRight: '8px',
                                                marginBottom: '8px',
                                                color: '#667eea'
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="row mt-60">
                        <div className="col-xl-12 text-center">
                            <div className="tools-cta wow fadeInUp" data-wow-delay=".3s" style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                borderRadius: '20px',
                                padding: '50px 30px',
                                color: 'white'
                            }}>
                                <h2 style={{color: 'white', marginBottom: '20px'}}>Ready to Get Started?</h2>
                                <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '30px', fontSize: '18px'}}>
                                    Join thousands of satisfied customers who are saving money while accessing premium SEO tools.
                                </p>
                                <Link href="/pricing" className="thm-btn-2" style={{
                                    background: 'white',
                                    color: '#667eea',
                                    padding: '15px 40px',
                                    borderRadius: '30px',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontWeight: 'bold',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    Choose Your Plan
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tools grid end */}
        </>
    );
};

export default ToolsGrid;

