import React from 'react';

function OtherFeatures() {
    return (
        <>
            <div className="feature-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="section-main-title">
                                    <h2>Why Choose Us?</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-single-box">
                                <div className="feauture-icon">
                                    <img src="/assets/icons/home.svg" alt/>
                                </div>
                                <div className="feauture-content">
                                    <h4><a href="#">Potential ROI</a></h4>
                                    <p>over 1 million+ homes for sale available on the website, we can match you with a
                                        house you will want to call home.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                            <div className="feature-single-box">
                                <div className="feauture-icon">
                                    <img src="/assets/icons/paintbrush-2.svg" alt/>
                                </div>
                                <div className="feauture-content">
                                    <h4><a href="#">Design</a></h4>
                                    <p>over 1 million+ homes for sale available on the website, we can match you with a
                                        house you will want to call home.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
                            <div className="feature-single-box">
                                <div className="feauture-icon">
                                    <img src="/assets/icons/circle-dollar-sign.svg" alt/>
                                </div>
                                <div className="feauture-content">
                                    <h4><a href="#">Marketing</a></h4>
                                    <p>over 1 million+ homes for sale available on the website, we can match you with a
                                        house you will want to call home.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-area style-two">
                <div className="container">
                    <div className="row">
                        <div className="section-title text-center">
                            <div className="section-main-title">
                                <h2>About Us</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-images">
                                <div className="about-thumb">
                                    <img src="/assets/images/About.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content ml-10">
                                <div className="section-title">
                                    <div className="section-main-title">
                                        <h4>Dream Living Spaces Setting New Build Storage</h4>
                                    </div>
                                </div>
                                <div className="about-discription">
                                    <p>Payment solutions enable businesses to accept payments Payment stions enable
                                        businesses to accept payments from ctly customers ctly securely. stions enable
                                        businesses to accept payments from ctly customers ctly securely. </p>
                                </div>
                                <div className="about-info">
                                    <div className="common-btn">
                                        <a href="#">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default OtherFeatures;