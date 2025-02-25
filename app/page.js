'use client'
import CountUp from 'react-countup';
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
