import React from 'react'

const Header = ({ sectionRef, contactRef, blogRef }) => {


    const scrollToSection = () => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToBlog = () => {
        blogRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    // const scrollToSection = () => {
    //     sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    // };

    return (
        <header class="header-section header-inner">
            <div id="header-sticky" class="header-1 header-4">
                <div class="container-fluid">
                    <div class="mega-menu-wrapper">
                        <div class="header-main">
                            <div class="header-left">
                                <div class="logo">
                                    <a href="#" class="header-logo">
                                        <img src="/img/logo/colour-logo.png" alt="logo-img" class="img-logo" />
                                    </a>
                                </div>
                            </div>
                            <div class="header-right d-flex justify-content-end align-items-center">
                                <div class="mean__menu-wrapper">
                                    <div class="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li class="has-dropdown menu-thumb">
                                                    <a href="#" class="text-decoration-none">
                                                        Home
                                                        <i class="fas fa-chevron-down"></i>
                                                    </a>
                                                </li>
                                                <li class="has-dropdown menu-thumb">
                                                    <a href="#" class="text-decoration-none" onClick={() => scrollToSection()}>
                                                        About Us
                                                        <i class="fas fa-chevron-down"></i>
                                                    </a>
                                                </li>
                                                <li class="has-dropdown menu-thumb">
                                                    <a href="#" class="text-decoration-none" onClick={() => scrollToContact()}>
                                                        Contact Us
                                                        <i class="fas fa-chevron-down"></i>
                                                    </a>
                                                </li>
                                                <li class="has-dropdown menu-thumb">
                                                    <a href="#" class="text-decoration-none" onClick={() => scrollToBlog()}>
                                                        Blogs
                                                        <i class="fas fa-chevron-down"></i>
                                                    </a>
                                                </li>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="contact-items">
                                    <div class="icon">
                                        <img src="/img/call.png" alt="img" />
                                    </div>
                                    <div class="content">
                                        <span>Call Us</span>
                                        <h6><a href="tel:++18554973456">+1(855) 497-3456</a></h6>
                                    </div>
                                </div>
                                <div class="header-search">
                                    <button class="d-flex align-items-center search-toggle"><i class="far fa-search"></i></button>
                                </div>
                                <a class="alert-button" href="tel:+1(855) 497-3456">Call @ (855) 497-3456</a>
                                <div class="header__hamburger d-xl-none my-auto">
                                    <div class="sidebar__toggle">
                                        <div class="header-bar">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
