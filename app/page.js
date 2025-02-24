import Header from "@/component/common_comp/Header";
import Footer from "@/component/common_comp/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    < >
      <Header />


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
                        <p data-animation="fadeInUp" data-delay="1.7s">Velit integer eu tincidunt scelerisque. Sodales volutpat neque fermentum malesuada.</p>
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
                    <select class="single-select w-100">
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
                    <select class="single-select w-100">
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
                    <select class="single-select w-100">
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

      <section class="about-section section-padding sect-bg">
        <div class="shape-1">
          <img src="/img/about/dot-shape.png" alt="img" />
        </div>
        <div class="container">
          <div class="about-wrapper">
            <div class="row g-4 align-items-center">
              <div class="col-lg-5">
                <div class="about-image wow img-custom-anim-left">
                  <img src="/img/about/03.jpg" alt="img" />
                  <div class="about-box float-bob-y">
                    <h2><span class="odometer" data-count="29">00</span>+</h2>
                    <p>YEARS OF EXPERIENCE</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="about-content">
                  <div class="section-title">
                    <span class="wow fadeInUp">About Travil Agency</span>
                    <h2 class="wow fadeInUp" data-wow-delay=".3s">Our Journey Memorable Adventures Worldwide</h2>
                  </div>
                  <p class="wow fadeInUp mt-4 mt-md-0" data-wow-delay=".5s">
                    We offer carefully curated destinations and tours that capture the true essence of location, ensuring you experience. Our attraction pass save you more than buying individual tickets for your tour package system.
                  </p>
                  <div class="about-sideber wow fadeInUp" data-wow-delay=".3s">
                    <h5>
                      “Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis and sed vehicula tortor malesuada gravida”
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
                  <div class="about-btn">
                    <a href="#" class="theme-btn wow fadeInUp" data-wow-delay=".3s">
                      <span>More About Travil</span> <i class="far fa-long-arrow-right"></i>
                    </a>
                    <div class="group-image wow fadeInUp" data-wow-delay=".5s">
                      <img src="/img/about/group.png" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section class="tour-section fix section-padding">
        <div class="container">
          <div class="section-title text-center">
            <span class="wow fadeInUp">Featured Places</span>
            <h2 class="wow fadeInUp" data-wow-delay=".3s">Amazing Tour Places</h2>
            <p class="mt-3 mt-mb-0 wow fadeInUp" data-wow-delay=".5s">
              Our attraction passes save you more than buying individual tickets for your tour <br /> package system. Our attraction passes save you more than.
            </p>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div class="tour-box-items">
                <div class="thumb">
                  <img src="/img/tour/01.jpg" alt="img" />
                </div>
                <div class="content">
                  <span>AUSTRALIA</span>
                  <h4>
                    <a href="#">
                      Island Peak Climbing
                    </a>
                  </h4>
                  <h6>From <span>$376</span> <del>$999</del></h6>
                  <ul class="list">
                    <li>
                      <i class="far fa-calendar"></i>
                      3 Days / 2 Night
                    </li>
                    <li>
                      <i class="far fa-flag"></i>
                      3 Countries
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div class="tour-box-items">
                <div class="thumb">
                  <img src="/img/tour/02.jpg" alt="img" />
                </div>
                <div class="content">
                  <span>LOS ANGLES</span>
                  <h4>
                    <a href="#">
                      Ocean on the Maldive
                    </a>
                  </h4>
                  <h6>From <span>$995</span> <del>$1048</del></h6>
                  <ul class="list">
                    <li>
                      <i class="far fa-calendar"></i>
                      4 Days / 5 Night
                    </li>
                    <li>
                      <i class="far fa-flag"></i>
                      3 Countries
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
              <div class="tour-box-items">
                <div class="thumb">
                  <img src="/img/tour/03.jpg" alt="img" />
                </div>
                <div class="content">
                  <span>LONDON</span>
                  <h4>
                    <a href="#">
                      Short around Pokhara
                    </a>
                  </h4>
                  <h6>From <span>$574</span> <del>$943</del></h6>
                  <ul class="list">
                    <li>
                      <i class="far fa-calendar"></i>
                      2 Days / 3 Night
                    </li>
                    <li>
                      <i class="far fa-flag"></i>
                      3 Countries
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
              <div class="tour-box-items">
                <div class="thumb">
                  <img src="/img/tour/04.jpg" alt="img" />
                </div>
                <div class="content">
                  <span>BANGLADESH</span>
                  <h4>
                    <a href="#">
                      Langtang Valley Trekking
                    </a>
                  </h4>
                  <h6>From <span>$678</span> <del>$899</del></h6>
                  <ul class="list">
                    <li>
                      <i class="far fa-calendar"></i>
                      1 Week
                    </li>
                    <li>
                      <i class="far fa-flag"></i>
                      2 Countries
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div class="tour-box-items">
                <div class="thumb">
                  <img src="/img/tour/05.jpg" alt="img" />
                </div>
                <div class="content">
                  <span>WASINGTON</span>
                  <h4>
                    <a href="#">
                      France Eiffel Tower
                    </a>
                  </h4>
                  <h6>From <span>$473</span> <del>$199</del></h6>
                  <ul class="list">
                    <li>
                      <i class="far fa-calendar"></i>
                      4 Days / 5 Night
                    </li>
                    <li>
                      <i class="far fa-flag"></i>
                      3 Countries
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div class="tour-box-items">
                <div class="thumb">
                  <img src="/img/tour/06.jpg" alt="img" />
                </div>
                <div class="content">
                  <span>AMERICA</span>
                  <h4>
                    <a href="#">
                      Gananoque Islands
                    </a>
                  </h4>
                  <h6>From <span>$345</span> <del>$599</del></h6>
                  <ul class="list">
                    <li>
                      <i class="far fa-calendar"></i>
                      9 Days / 8 Night
                    </li>
                    <li>
                      <i class="far fa-flag"></i>
                      3 Countries
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
              <div class="tour-box-items">
                <div class="thumb">
                  <img src="/img/tour/077.jpg" alt="img" />
                </div>
                <div class="content">
                  <span>FRANCE</span>
                  <h4>
                    <a href="#">
                      Paradise, Places
                    </a>
                  </h4>
                  <h6>From <span>$270</span> <del>$399</del></h6>
                  <ul class="list">
                    <li>
                      <i class="far fa-calendar"></i>
                      2 Weeks
                    </li>
                    <li>
                      <i class="far fa-flag"></i>
                      5 Countries
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
              <div class="tour-box-items">
                <div class="thumb">
                  <img src="/img/tour/088.jpg" alt="img" />
                </div>
                <div class="content">
                  <span>DHAKA</span>
                  <h4>
                    <a href="#">
                      Moscow Red City Land
                    </a>
                  </h4>
                  <h6>From <span>$678</span> <del>$899</del></h6>
                  <ul class="list">
                    <li>
                      <i class="far fa-calendar"></i>
                      4 Days / 5 Night
                    </li>
                    <li>
                      <i class="far fa-flag"></i>
                      3 Countries
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
                Real Feedback from Our Happy <br /> Travelers Worldwide
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
                    "Our family trip was amazing from start to finish! The itinerary was perfect, the guides were knowledgeable, and the service was excellent. I can’t wait to book our next adventure!"
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
                    "Our family trip was amazing from start to finish! The itinerary was perfect, the guides were knowledgeable, and the service was excellent. I can’t wait to book our next adventure!"
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

      <section class="news-section section-padding section-bg-2">
        <div class="container">
          <div class="section-title text-center">
            <span class="wow fadeInUp" data-wow-delay=".3s">Latest Blog & News</span>
            <h2 class="wow fadeInUp" data-wow-delay=".5s">Latest Travel Insights and <br /> Destination Guides</h2>
          </div>
          <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div class="news-box-items-4">
                <div class="news-img">
                  <img src="/img/news/news-11.jpg" alt="img" />
                  <ul class="post-date">
                    <li>
                      22
                    </li>
                    <li>
                      JAN
                    </li>
                  </ul>
                </div>
                <div class="news-content">
                  <ul>
                    <li> <b>By</b> Admin</li>
                    <li><b>23</b> Comments</li>
                  </ul>
                  <h3><a href="news-details.html">The top 10 places to traveling in the world with your family</a></h3>
                  <p>We offer carefully curated destinations and tours that capture the true essence.</p>
                  <a href="news-details.html" class="link-btn">Continue Reading <i class="far fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div class="news-box-items-4">
                <div class="news-img">
                  <img src="/img/news/news-12.jpg" alt="img" />
                  <ul class="post-date">
                    <li>
                      09
                    </li>
                    <li>
                      May
                    </li>
                  </ul>
                </div>
                <div class="news-content">
                  <ul>
                    <li> <b>By</b> Admin</li>
                    <li><b>23</b> Comments</li>
                  </ul>
                  <h3><a href="news-details.html">Enrich Your Mind Envision Your Future Education for Success</a></h3>
                  <p>We offer carefully curated destinations and tours that capture the true essence.</p>
                  <a href="news-details.html" class="link-btn">Continue Reading <i class="far fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div class="news-box-items-4">
                <div class="news-img">
                  <img src="/img/news/news-13.jpg" alt="img" />
                  <ul class="post-date">
                    <li>
                      08
                    </li>
                    <li>
                      APR
                    </li>
                  </ul>
                </div>
                <div class="news-content">
                  <ul>
                    <li> <b>By</b> Admin</li>
                    <li><b>23</b> Comments</li>
                  </ul>
                  <h3><a href="news-details.html">Exploring The Green Spaces Of Realar Residence</a></h3>
                  <p>We offer carefully curated destinations and tours that capture the true essence.</p>
                  <a href="news-details.html" class="link-btn">Continue Reading <i class="far fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
