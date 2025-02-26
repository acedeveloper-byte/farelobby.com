'use client'
import CountUp from 'react-countup';
import Header from "@/component/common_comp/Header";
import Footer from "@/component/common_comp/Footer";


import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';


export default function Home() {

  const sectionRef = useRef()
  const blogRef = useRef()
  const contactRef = useRef()

  return (
    < >
      <Header sectionRef={sectionRef} contactRef={contactRef} blogRef={blogRef} />
      <section class="hero-section hero-4">
        <div class="swiper hero-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="hero-items">
                <div class="plane-shape">
                  <img src="/img/hero/new/plane-2.png" alt="img" />
                </div>
                <div class="plane-shape-2">
                  <img src="/img/hero/new/plane-3.png" alt="img" />
                </div>
                <div class="hero-bg bg-cover" style={{ backgroundImage: `url('/img/hero/05.jpg')` }}></div>
                <div class="container">
                  <div class="row g-4">
                    <div class="col-lg-12">
                      <div class="hero-content">
                        <h6 data-animation="fadeInUp" data-delay="1.3s">Tour & Travel Agency</h6>
                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                          <span class="shape-text">Explore</span><span>The</span> <br /> Global Worlds

                        </h1>
                        <p data-animation="fadeInUp" data-delay="1.7s">
                          Take the scenic route, where the destination is just as beautiful as the journey.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="booking-list-area-1">
            <div class="booking-list">
              <div class="icon">
                <img src="/img/hero/location.png" alt="img" />
              </div>
              <div class="content">
                <h5>Destination</h5>
                <div class="form-clt">
                  <div class="form">
                    <select class="nice-select single-select w-100 ">
                      <option>Your city or Region</option>
                      <option>Australia</option>
                      <option>India</option>
                      <option>Italy</option>
                      <option>Japan</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="booking-list">
              <div class="icon">
                <img src="/img/hero/location.png" alt="img" />
              </div>
              <div class="content">
                <h5>All Activity</h5>
                <div class="form-clt">
                  <div class="form">
                    <select class="nice-select single-select w-100 ">7
                      <option>Choose Activity</option>
                      <option> Activity 01</option>
                      <option> Activity 02</option>
                      <option> Activity 03</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="booking-list">
              <div class="icon">
                <img src="/img/hero/location.png" alt="img" />
              </div>
              <div class="content">
                <h5>Departure Date</h5>
                <div class="form-clt">
                  <div id="datepicker" class="input-group date" data-date-format="dd-mm-yyyy">
                    <input class="form-control" type="text" placeholder="Date Form" readonly="" />
                    <span class="input-group-addon"><i class="far fa-calendar"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="booking-list">
              <div class="icon">
                <img src="/img/hero/location.png" alt="img" />
              </div>
              <div class="content">
                <h5>Guest</h5>
                <div class="form-clt">
                  <div class="form">
                    <select class="nice-select single-select w-100">
                      <option> Your Guest</option>
                      <option>  Guest 01</option>
                      <option> Guest 02</option>
                      <option> Guest 03</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" class="theme-btn">
              <span>Search <i class="far fa-search"></i></span>
            </button>
          </div>
        </div>
      </section>

      <section class="about-section section-padding sect-bg">
        <div class="shape-1">
          <img src="/img/about/dot-shape.png" alt="img" />
        </div>
        <div class="container" ref={sectionRef}>
          <div class="about-wrapper">
            <div class="row g-4 align-items-center">
              <div class="col-lg-5">
                <div class="about-image wow img-custom-anim-left">
                  <img src="/img/about/03.jpg" alt="img" />
                  <div class="about-box float-bob-y">
                    <h2><span class="odometer" data-count="29"><CountUp end={15} /></span>+</h2>
                    <p>YEARS OF EXPERIENCE</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="about-content">
                  <div class="section-title">
                    <span class="wow fadeInUp">About Our Company</span>
                    <h2 class="wow fadeInUp" data-wow-delay=".3s">The best view comes after the hardest climbs. </h2>
                  </div>
                  <p class="wow fadeInUp mt-4 mt-md-0" data-wow-delay=".5s">
                    We are confident that with the proper guidance and resources, all dreams can turn into reality. Our purpose is to equip you with the resources, information, and expertise required to transform your aspirations into real success.
                  </p>
                  <div class="about-sideber wow fadeInUp" data-wow-delay=".3s">
                    <h5>
                      Create unforgettable moments of adventure, where the itinerary is tailored to your dreams and every destination brings new horizons of discovery.”
                    </h5>
                  </div>
                  <div class="about-icon-items">
                    <ul class="wow fadeInUp" data-wow-delay=".3s">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M23.1017 4.53411L13.8817 13.7541C13.3324 14.3034 12.5865 14.6108 11.8089 14.6108C11.766 14.6108 11.7231 14.6108 11.6778 14.6085C10.8573 14.5701 10.0888 14.1904 9.56215 13.5575L7.0102 10.3003C6.68923 9.8776 6.76156 9.2786 7.1752 8.94633C7.59337 8.60954 8.20818 8.67507 8.54499 9.09552L11.0811 12.3323C11.2529 12.5313 11.5015 12.6511 11.766 12.6601C12.0418 12.6737 12.3085 12.5697 12.5006 12.3753L21.7229 3.15529C21.7297 3.14624 21.7387 3.13946 21.7477 3.13043C22.1343 2.7552 22.7513 2.76652 23.1266 3.15529C23.4995 3.54181 23.4905 4.15888 23.1017 4.53411Z" fill="#4D40CA" />
                          <path d="M20.0776 12.8161C19.8538 15.3364 18.6898 17.5651 16.947 19.1677C15.2065 20.7703 12.8874 21.7422 10.3558 21.7558C4.96711 21.7558 0.600098 17.3888 0.600098 12.0001C0.600098 6.61139 4.96711 2.24438 10.3558 2.24438C12.6478 2.24438 14.8652 3.05132 16.6215 4.52282C17.0374 4.86187 17.0985 5.47671 16.7594 5.89487C16.4181 6.31077 15.8033 6.37406 15.3851 6.03275C15.3783 6.02822 15.3738 6.02146 15.367 6.01694C12.0624 3.25026 7.13931 3.68649 4.3749 6.99114C1.60822 10.298 2.04447 15.2189 5.34911 17.9855C8.65376 20.7522 13.5768 20.3137 16.3435 17.009C17.3742 15.7772 18.0003 14.2559 18.1337 12.6556C18.1721 12.1222 18.6332 11.7221 19.1644 11.7605C19.1735 11.7605 19.1802 11.7628 19.187 11.7628C19.7227 11.8079 20.1228 12.2781 20.0776 12.8161Z" fill="#4D40CA" />
                        </svg>
                        Trusted, Local Travel Experts
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M23.1017 4.53411L13.8817 13.7541C13.3324 14.3034 12.5865 14.6108 11.8089 14.6108C11.766 14.6108 11.7231 14.6108 11.6778 14.6085C10.8573 14.5701 10.0888 14.1904 9.56215 13.5575L7.0102 10.3003C6.68923 9.8776 6.76156 9.2786 7.1752 8.94633C7.59337 8.60954 8.20818 8.67507 8.54499 9.09552L11.0811 12.3323C11.2529 12.5313 11.5015 12.6511 11.766 12.6601C12.0418 12.6737 12.3085 12.5697 12.5006 12.3753L21.7229 3.15529C21.7297 3.14624 21.7387 3.13946 21.7477 3.13043C22.1343 2.7552 22.7513 2.76652 23.1266 3.15529C23.4995 3.54181 23.4905 4.15888 23.1017 4.53411Z" fill="#4D40CA" />
                          <path d="M20.0776 12.8161C19.8538 15.3364 18.6898 17.5651 16.947 19.1677C15.2065 20.7703 12.8874 21.7422 10.3558 21.7558C4.96711 21.7558 0.600098 17.3888 0.600098 12.0001C0.600098 6.61139 4.96711 2.24438 10.3558 2.24438C12.6478 2.24438 14.8652 3.05132 16.6215 4.52282C17.0374 4.86187 17.0985 5.47671 16.7594 5.89487C16.4181 6.31077 15.8033 6.37406 15.3851 6.03275C15.3783 6.02822 15.3738 6.02146 15.367 6.01694C12.0624 3.25026 7.13931 3.68649 4.3749 6.99114C1.60822 10.298 2.04447 15.2189 5.34911 17.9855C8.65376 20.7522 13.5768 20.3137 16.3435 17.009C17.3742 15.7772 18.0003 14.2559 18.1337 12.6556C18.1721 12.1222 18.6332 11.7221 19.1644 11.7605C19.1735 11.7605 19.1802 11.7628 19.187 11.7628C19.7227 11.8079 20.1228 12.2781 20.0776 12.8161Z" fill="#4D40CA" />
                        </svg>
                        Flexible, Hassle-Free Bookings
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M23.1017 4.53411L13.8817 13.7541C13.3324 14.3034 12.5865 14.6108 11.8089 14.6108C11.766 14.6108 11.7231 14.6108 11.6778 14.6085C10.8573 14.5701 10.0888 14.1904 9.56215 13.5575L7.0102 10.3003C6.68923 9.8776 6.76156 9.2786 7.1752 8.94633C7.59337 8.60954 8.20818 8.67507 8.54499 9.09552L11.0811 12.3323C11.2529 12.5313 11.5015 12.6511 11.766 12.6601C12.0418 12.6737 12.3085 12.5697 12.5006 12.3753L21.7229 3.15529C21.7297 3.14624 21.7387 3.13946 21.7477 3.13043C22.1343 2.7552 22.7513 2.76652 23.1266 3.15529C23.4995 3.54181 23.4905 4.15888 23.1017 4.53411Z" fill="#4D40CA" />
                          <path d="M20.0776 12.8161C19.8538 15.3364 18.6898 17.5651 16.947 19.1677C15.2065 20.7703 12.8874 21.7422 10.3558 21.7558C4.96711 21.7558 0.600098 17.3888 0.600098 12.0001C0.600098 6.61139 4.96711 2.24438 10.3558 2.24438C12.6478 2.24438 14.8652 3.05132 16.6215 4.52282C17.0374 4.86187 17.0985 5.47671 16.7594 5.89487C16.4181 6.31077 15.8033 6.37406 15.3851 6.03275C15.3783 6.02822 15.3738 6.02146 15.367 6.01694C12.0624 3.25026 7.13931 3.68649 4.3749 6.99114C1.60822 10.298 2.04447 15.2189 5.34911 17.9855C8.65376 20.7522 13.5768 20.3137 16.3435 17.009C17.3742 15.7772 18.0003 14.2559 18.1337 12.6556C18.1721 12.1222 18.6332 11.7221 19.1644 11.7605C19.1735 11.7605 19.1802 11.7628 19.187 11.7628C19.7227 11.8079 20.1228 12.2781 20.0776 12.8161Z" fill="#4D40CA" />
                        </svg>
                        Real-Time Itinerary Updates
                      </li>
                    </ul>
                    <ul class="wow fadeInUp" data-wow-delay=".5s">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M23.1017 4.53411L13.8817 13.7541C13.3324 14.3034 12.5865 14.6108 11.8089 14.6108C11.766 14.6108 11.7231 14.6108 11.6778 14.6085C10.8573 14.5701 10.0888 14.1904 9.56215 13.5575L7.0102 10.3003C6.68923 9.8776 6.76156 9.2786 7.1752 8.94633C7.59337 8.60954 8.20818 8.67507 8.54499 9.09552L11.0811 12.3323C11.2529 12.5313 11.5015 12.6511 11.766 12.6601C12.0418 12.6737 12.3085 12.5697 12.5006 12.3753L21.7229 3.15529C21.7297 3.14624 21.7387 3.13946 21.7477 3.13043C22.1343 2.7552 22.7513 2.76652 23.1266 3.15529C23.4995 3.54181 23.4905 4.15888 23.1017 4.53411Z" fill="#4D40CA" />
                          <path d="M20.0776 12.8161C19.8538 15.3364 18.6898 17.5651 16.947 19.1677C15.2065 20.7703 12.8874 21.7422 10.3558 21.7558C4.96711 21.7558 0.600098 17.3888 0.600098 12.0001C0.600098 6.61139 4.96711 2.24438 10.3558 2.24438C12.6478 2.24438 14.8652 3.05132 16.6215 4.52282C17.0374 4.86187 17.0985 5.47671 16.7594 5.89487C16.4181 6.31077 15.8033 6.37406 15.3851 6.03275C15.3783 6.02822 15.3738 6.02146 15.367 6.01694C12.0624 3.25026 7.13931 3.68649 4.3749 6.99114C1.60822 10.298 2.04447 15.2189 5.34911 17.9855C8.65376 20.7522 13.5768 20.3137 16.3435 17.009C17.3742 15.7772 18.0003 14.2559 18.1337 12.6556C18.1721 12.1222 18.6332 11.7221 19.1644 11.7605C19.1735 11.7605 19.1802 11.7628 19.187 11.7628C19.7227 11.8079 20.1228 12.2781 20.0776 12.8161Z" fill="#4D40CA" />
                        </svg>
                        Trusted, Local Travel Experts
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M23.1017 4.53411L13.8817 13.7541C13.3324 14.3034 12.5865 14.6108 11.8089 14.6108C11.766 14.6108 11.7231 14.6108 11.6778 14.6085C10.8573 14.5701 10.0888 14.1904 9.56215 13.5575L7.0102 10.3003C6.68923 9.8776 6.76156 9.2786 7.1752 8.94633C7.59337 8.60954 8.20818 8.67507 8.54499 9.09552L11.0811 12.3323C11.2529 12.5313 11.5015 12.6511 11.766 12.6601C12.0418 12.6737 12.3085 12.5697 12.5006 12.3753L21.7229 3.15529C21.7297 3.14624 21.7387 3.13946 21.7477 3.13043C22.1343 2.7552 22.7513 2.76652 23.1266 3.15529C23.4995 3.54181 23.4905 4.15888 23.1017 4.53411Z" fill="#4D40CA" />
                          <path d="M20.0776 12.8161C19.8538 15.3364 18.6898 17.5651 16.947 19.1677C15.2065 20.7703 12.8874 21.7422 10.3558 21.7558C4.96711 21.7558 0.600098 17.3888 0.600098 12.0001C0.600098 6.61139 4.96711 2.24438 10.3558 2.24438C12.6478 2.24438 14.8652 3.05132 16.6215 4.52282C17.0374 4.86187 17.0985 5.47671 16.7594 5.89487C16.4181 6.31077 15.8033 6.37406 15.3851 6.03275C15.3783 6.02822 15.3738 6.02146 15.367 6.01694C12.0624 3.25026 7.13931 3.68649 4.3749 6.99114C1.60822 10.298 2.04447 15.2189 5.34911 17.9855C8.65376 20.7522 13.5768 20.3137 16.3435 17.009C17.3742 15.7772 18.0003 14.2559 18.1337 12.6556C18.1721 12.1222 18.6332 11.7221 19.1644 11.7605C19.1735 11.7605 19.1802 11.7628 19.187 11.7628C19.7227 11.8079 20.1228 12.2781 20.0776 12.8161Z" fill="#4D40CA" />
                        </svg>
                        Flexible, Hassle-Free Bookings
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M23.1017 4.53411L13.8817 13.7541C13.3324 14.3034 12.5865 14.6108 11.8089 14.6108C11.766 14.6108 11.7231 14.6108 11.6778 14.6085C10.8573 14.5701 10.0888 14.1904 9.56215 13.5575L7.0102 10.3003C6.68923 9.8776 6.76156 9.2786 7.1752 8.94633C7.59337 8.60954 8.20818 8.67507 8.54499 9.09552L11.0811 12.3323C11.2529 12.5313 11.5015 12.6511 11.766 12.6601C12.0418 12.6737 12.3085 12.5697 12.5006 12.3753L21.7229 3.15529C21.7297 3.14624 21.7387 3.13946 21.7477 3.13043C22.1343 2.7552 22.7513 2.76652 23.1266 3.15529C23.4995 3.54181 23.4905 4.15888 23.1017 4.53411Z" fill="#4D40CA" />
                          <path d="M20.0776 12.8161C19.8538 15.3364 18.6898 17.5651 16.947 19.1677C15.2065 20.7703 12.8874 21.7422 10.3558 21.7558C4.96711 21.7558 0.600098 17.3888 0.600098 12.0001C0.600098 6.61139 4.96711 2.24438 10.3558 2.24438C12.6478 2.24438 14.8652 3.05132 16.6215 4.52282C17.0374 4.86187 17.0985 5.47671 16.7594 5.89487C16.4181 6.31077 15.8033 6.37406 15.3851 6.03275C15.3783 6.02822 15.3738 6.02146 15.367 6.01694C12.0624 3.25026 7.13931 3.68649 4.3749 6.99114C1.60822 10.298 2.04447 15.2189 5.34911 17.9855C8.65376 20.7522 13.5768 20.3137 16.3435 17.009C17.3742 15.7772 18.0003 14.2559 18.1337 12.6556C18.1721 12.1222 18.6332 11.7221 19.1644 11.7605C19.1735 11.7605 19.1802 11.7628 19.187 11.7628C19.7227 11.8079 20.1228 12.2781 20.0776 12.8161Z" fill="#4D40CA" />
                        </svg>
                        Real-Time Itinerary Updates
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="trending-destinations section-padding fix">
        <div class="container">
          <div class="section-title-area lg-center">
            <div class="section-title">
              <span class="wow fadeInUp">Trending Destinations</span>
              <h2 class="wow fadeInUp" data-wow-delay=".3s">Trendy Travel Locations</h2>
            </div>
            <a href="#" class="theme-btn theme-btn-2 wow fadeInUp" data-wow-delay=".5s">
              <span>Explore More</span> <i class="far fa-long-arrow-right"></i>
            </a>
          </div>
          <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div class="trending-destinations-card-items">
                <div class="destinations-img">
                  <img src="/img/destinations/01.jpg" alt="img" />
                  <div class="icon">
                    <a href="#">
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <ul class="destinations-content">
                    <li class="title">
                      <a href="#">Istanbul, Turkey</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div class="trending-destinations-card-items">
                <div class="destinations-img">
                  <img src="/img/destinations/02.jpg" alt="img" />
                  <div class="icon">
                    <a href="#">
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <ul class="destinations-content">
                    <li class="title">
                      <a href="#">Kyoto, Japan</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div class="trending-destinations-card-items">
                <div class="destinations-img">
                  <img src="/img/destinations/03.jpg" alt="img" />
                  <div class="icon">
                    <a href="#">
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <ul class="destinations-content">
                    <li class="title">
                      <a href="#">Cusco, Peru</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div class="trending-destinations-card-items">
                <div class="destinations-img">
                  <img src="/img/destinations/04.jpg" alt="img" />
                  <div class="icon">
                    <a href="#">
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <ul class="destinations-content">
                    <li class="title">
                      <a href="#">Vienna, Australia</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div class="trending-destinations-card-items">
                <div class="destinations-img">
                  <img src="/img/destinations/05.jpg" alt="img" />
                  <div class="icon">
                    <a href="#">
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <ul class="destinations-content">
                    <li class="title">
                      <a href="#">Lisbon, Portugal</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div class="trending-destinations-card-items">
                <div class="destinations-img">
                  <img src="/img/destinations/06.jpg" alt="img" />
                  <div class="icon">
                    <a href="#">
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <ul class="destinations-content">
                    <li class="title">
                      <a href="#">Zagreb, Croatia</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonial-section-4 section-padding">
        <div class="container">
          <div class="section-title-area">
            <div class="section-title">
              <span class="wow fadeInUp">Our Testimonial</span>
              <h2 class="wow fadeInUp" data-wow-delay=".3s">
                Feedback From Our Happy Travelers <br /> from around the world

              </h2>
            </div>
            <p class="wow fadeInUp" data-wow-delay=".5">Our attraction passes save you more than buying<br /> individual tickets for your tour package system. Our<br /> attraction passes save you.</p>
          </div>
          <div class="swiper testimonial-slider-4">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonial-box-items-4">
                  <div class="testi-img">
                    <img src="/img/testimonial/client-03.png" alt="img" />
                  </div>
                  <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="icon">
                    <img src="/img/testimonial/quote-01.png" alt="icon" />
                  </div>
                  <h3>
                    "A truly stunning experience! They optimized our processes, and the results speak for themselves. Highly recommended!"
                  </h3>
                  <div class="client-info">
                    <h4>William Smith</h4>
                    <span>from New York, USA</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testimonial-box-items-4">
                  <div class="testi-img">
                    <img src="/img/testimonial/client-04.png" alt="img" />
                  </div>
                  <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="icon">
                    <img src="/img/testimonial/quote-01.png" alt="icon" />
                  </div>
                  <h3>
                    "The staff was very professional, courteous, and genuinely committed to providing a great customized vacation. We couldn't have expected more."
                  </h3>
                  <div class="client-info">
                    <h4>Michel John</h4>
                    <span>from New York, USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="faq-section section-padding fix">
        <div class="plane-shape">
          <img src="/img/faq/plane-shape.png" alt="img" />
        </div>
        <div class="frame-shape">
          <img src="/img/faq/frame-shape.png" alt="img" />
        </div>
        <div class="light-shape">
          <img src="/img/faq/light-shape.png" alt="img" />
        </div>
        <div class="container">
          <div class="section-title style-2 text-center">
            <span class="wow fadeInUp">Frequently Asked Questions</span>
            <h2 class="wow fadeInUp" data-wow-delay=".3s">Transforming Vision into <br /> Reality Together</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="faq-items style-2">
                <div className="faq-accordion">
                  <div className="accordion" id="accordionExample">

                    {/* FAQ Item 1 */}
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How do I book a trip?
                        </button>
                      </h5>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Our attraction pass saves you more than buying individual tickets for your tour package system. We offer a wide range of digital services, including website design and development, e-commerce solutions.
                        </div>
                      </div>
                    </div>

                    {/* FAQ Item 2 */}
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Can I customize my itinerary?
                        </button>
                      </h5>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Yes, you can customize your itinerary based on your preferences. Contact our support team for personalized trip planning.
                        </div>
                      </div>
                    </div>

                    {/* FAQ Item 3 */}
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Is travel insurance included in the package?
                        </button>
                      </h5>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Travel insurance is optional and can be added at checkout. We recommend getting travel insurance for peace of mind.
                        </div>
                      </div>
                    </div>

                    {/* FAQ Item 4 */}
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          How do I make changes to my booking?
                        </button>
                      </h5>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          You can modify your booking through your account dashboard or contact our support team for assistance.
                        </div>
                      </div>
                    </div>

                    {/* FAQ Item 5 */}
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          What’s included in my travel package?
                        </button>
                      </h5>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Your travel package includes accommodation, transportation, guided tours, and exclusive deals on attractions.
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="news-section section-padding section-bg-2">
        <div class="container" ref={blogRef}>
          <div class="section-title text-center">
            <span class="wow fadeInUp" data-wow-delay=".3s">Latest Blog & News</span>
            <h2 class="wow fadeInUp" data-wow-delay=".5s">Latest Travel Insights</h2>
          </div>
          <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div class="news-box-items-4">
                <div class="news-img">
                  <img src="/img/airlines/american.png" alt="img" />

                </div>
                <div class="news-content">
                  <ul>
                    <li> <b>By</b> Farelobby</li>
                    <li> <b>Date</b>{" "}08th Jan 25</li>
                  </ul>
                  <h3><a href="#" class="link-btn">Complete Guide to American Airlines Baggage Fares and Policies
                  </a></h3>

                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div class="news-box-items-4">
                <div class="news-img">
                  <img src="/img/airlines/southwest.png" alt="img" />

                </div>
                <div class="news-content">
                  <ul>
                    <li> <b>By</b> Farelobby</li>
                    <li> <b>Date</b>{" "}26th Jan 25</li>
                  </ul>
                  <h3>
                    <a href="#" class="link-btn">How to find best deals with Southwest Airlines Low Fare Calendar?
                    </a>
                  </h3>

                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div class="news-box-items-4">
                <div class="news-img">
                  <img src="/img/airlines/spirit.png" alt="img" />

                </div>
                <div class="news-content">
                  <ul>
                    <li> <b>By</b> Farelobby</li>
                    <li> <b>Date</b>{" "}28th Jan 25</li>
                  </ul>
                  <h3><a href="#" class="link-btn">How to find low fare flight with spirit airlines?</a></h3>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer contactRef={contactRef} />
    </>
  );
}
