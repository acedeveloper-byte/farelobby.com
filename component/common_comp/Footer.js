import React from 'react'

const Footer = ({ contactRef }) => {
    return (
        <>
            <footer class="footer-section fix section-bg bg-cover" style={{ backgroundImage: `url('/img/footer/bg-image.jpg')` }}>
                <div class="container" ref={contactRef}>
                    <div class="footer-newsletter-items">
                        <h2>Get Updated the Our Latest Newsletter</h2>
                        <div class="footer-input">
                            <input type="email" id="email2" placeholder="Enter your email" />
                            <button class="newsletter-btn" type="submit">
                                Subscribe <i class="far fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div class="footer-wrapper">
                        <div class="row">
                            <div class="col-xl-5 col-lg-7 col-md-12">
                                <div class="footer-widget-items">
                                    <div class="widget-title">
                                        <a href="#" class="footer-logo">
                                            <img src="/img/logo/colour-logo.png" alt="img" class="img-logo" />
                                        </a>
                                    </div>
                                    <div class="footer-content">
                                        <div class="contact-info-items">
                                            <div class="contact-items">
                                                <div class="icon">
                                                    <img src="/img/call.png" alt="img" />
                                                </div>
                                                <div class="content">
                                                    <span>Call Us</span>
                                                    <h6><a href="tel:++18554973456">+1(855) 497-3456</a></h6>
                                                </div>
                                            </div>
                                            <div class="contact-items">
                                                <div class="icon">
                                                    <img src="/img/mail.png" alt="img" />
                                                </div>
                                                <div class="content">
                                                    <span>Mail Us</span>
                                                    <h6><a href="#"><span class="__cf_email__" data-cfemail="">info@farelobby.com</span></a></h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="social-icon">
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                            <a href="#"><i class="fab fa-instagram"></i></a>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-5 col-md-4 col-sm-6">
                                <div class="footer-widget-items">
                                    <div class="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul class="list-items">
                                        <li>
                                            <a href="#">All Destination</a>
                                        </li>
                                        <li>
                                            <a href="#">24/7 Support</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Team</a>
                                        </li>
                                        <li>
                                            <a href="#">Tour Places</a>
                                        </li>
                                        <li>
                                            <a href="#">Reviews</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                <div class="footer-widget-items">
                                    <div class="widget-title">
                                        <h3>About Travil</h3>
                                    </div>
                                    <ul class="list-items">
                                        <li>
                                            <a href="">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Legal Notice</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms & Condition</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Apple Store</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="footer-bottom-1">
                    <div class="container">
                        <div class="footer-bottom-wrapper">
                            <p class="wow fadeInUp" data-wow-delay=".3s">
                                © 2025 Farelobby A  ll rights reserved.
                            </p>
                            <ul class="footer-menu wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <a href="#">
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Terms
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Site Map
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
