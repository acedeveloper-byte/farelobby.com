'use client'
import { FaAnglesRight } from "react-icons/fa6";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CountUp from 'react-countup';
import Header from "@/component/common_comp/Header";
import Footer from "@/component/common_comp/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Container, Row, Col } from "react-bootstrap";
import { useRef } from 'react';
import ScrollToTop from "@/component/common_comp/ScrollToTop";
import FloatingCallButton from "@/component/Call";
import Engine from "@/component/common_comp/Engine";


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


                <div class="hero-bg bg-cover" style={{ backgroundImage: `url('/img/background.jpg')` }}></div>

              </div>
            </div>
          </div>
        </div>

        <div class="container search-engine">
          <div class="container">
            <div class="row g-4">
              <div class="col-lg-12">
                <div class="hero-content">
                  <h1 data-animation="fadeInUp" data-delay="1.5s" className="text-white">
                    <span class="shape-text text-white">Explore</span><span className="text-white">The</span> <br /> Global Worlds
                  </h1>
                  <p data-animation="fadeInUp" data-delay="1.7s" className="text-white">Take the scenic route, where the destination is just as beautiful as the journey.</p>
                </div>
              </div>
            </div>
          </div>
          <Engine />
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

      <section class="flight-deals section-padding fix">
        <div class="container">
          <div class="section-title-area">
            <div class="section-title">
              <span>Best</span>
              <h2>Flight Deals</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="flight-card">
                <img src="/img/LAX.jpg" alt="Las Vegas" className="img-fluid w-100 best-flight-deals-image" />
                <div class="flight-info">
                  <p><strong>LAX → LAS</strong></p>
                  <p>May 17 - May 24</p>
                  <> <a href="tel:+1(855) 497-3456" className="btn btn-primary">Book Now</a></>

                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="flight-card">
                <img src="/img/MCO.webp" alt="Orlando" className="img-fluid w-100 best-flight-deals-image" />
                <div class="flight-info">
                  <p><strong>MCO → ORD</strong></p>
                  <p>May 20 - May 28</p>
                  <> <a href="tel:+1(855) 497-3456" className="btn btn-primary">Book Now</a></>

                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="flight-card">
                <img src="/img/NYC.jpg" alt="New York" className="img-fluid w-100 best-flight-deals-image" />
                <div class="flight-info">
                  <p><strong>NYC → MCO</strong></p>
                  <p>May 17 - May 24</p>
                  <> <a href="tel:+1(855) 497-3456" className="btn btn-primary">Book Now</a></>

                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="flight-card">
                <img src="/img/MSY.jpg" alt="Houston" className="img-fluid w-100 best-flight-deals-image" />
                <div class="flight-info">

                  <p><strong>MSY → IAH</strong></p>
                  <p>May 10 - May 24</p>
                  <> <a href="tel:+1(855) 497-3456" className="btn btn-primary">Book Now</a></>

                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="flight-card">
                <img src="/img/NYC.jpg" alt="San Juan" className="img-fluid w-100 best-flight-deals-image" />
                <div class="flight-info">
                  <p><strong>NYC → SJU</strong></p>
                  <p>May 13 - May 26</p>
                  <> <a href="tel:+1(855) 497-3456" className="btn btn-primary">Book Now</a></>

                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="flight-card">
                <img src="/img/NYC.jpg" alt="London" className="img-fluid w-100 best-flight-deals-image" />
                <div class="flight-info">
                  <p><strong>NYC → LON</strong></p>
                  <p>May 10 - May 24</p>
                  <> <a href="tel:+1(855) 497-3456" className="btn btn-primary">Book Now</a></>
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
                    <h4>Milley Jose</h4>
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
          </div>

          <Row>
            <Col lg={12}>
              <div className="faq-items style-2">
                <div className="faq-accordion">
                  <Accordion defaultActiveKey="0" id="accordion2">

                    <Accordion.Item eventKey="0" className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                      <Accordion.Header>What are the different fare types offered by American Airlines?</Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        American Airlines offers different fare types like Basic Economy and the Main Cabin. Basic Economy is the lowest of all fares available. It has some specific limitations regarding seats, refunds, and more. Whereas Main Cabin offers those privileges.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item wow fadeInUp" data-wow-delay=".4s">
                      <Accordion.Header>Why does Spirit Airlines Charge Such Low Fares?</Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        The Ultra-low-cost fares from Spirit Airlines are at the extremely low end. But Spirit charges for every other facility such as seat selection, carry-on bags, drinks, and more. The very low fare leaves it to the passengers to pay for whatever services they want to incur. This keeps their ticket prices a little low.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                      <Accordion.Header>Are United Airlines Flight Tickets refundable? </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        United Airlines Refunds depend on the fare type purchased during booking. Non-refundable fares are usually not refunded unless a cancellation is due to something on the part of the airline. Otherwise, travelers may get a travel credit or reschedule without any fee in some cases, especially with flexible fares or if they cancel within a given time window.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                      <Accordion.Header>Is there any fare charge for checked bags?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        Southwest Airlines features initial two checked bags for free which is an advantage to passengers. It also offers many customer-friendly policies, although one may still have to pay extra charges for overweight or oversized luggage.


                      </Accordion.Body>
                    </Accordion.Item>

                    {/* FAQ Item 5 */}
                    <Accordion.Item eventKey="4" className="accordion-item mb-0 wow fadeInUp" data-wow-delay=".8s">
                      <Accordion.Header>Does Frontier Airlines offer Refundable Fares?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        Tickets are non-refundable generally on Frontier Airlines. Additionally, at the booking time, an option called "Cancellation Protection" is introduced that allows flexibility in traveling. If you cancel or change your itinerary, this option can provide a refund or credit based on certain conditions that apply to it.

                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </div>
              </div>
            </Col>
          </Row>
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
      <ScrollToTop />
      <FloatingCallButton />
      <Footer contactRef={contactRef} />
    </>
  );
}



