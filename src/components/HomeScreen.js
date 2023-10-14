import React, { useEffect, useState } from "react";

//logo
import logo from ".././assets/img/logo.png";

//importing pictures
import morePicture from ".././assets/img/more.png";
import hotdog from ".././assets/img/hotdog.png";
import email from ".././assets/img/email.png";
import man from ".././assets/img/man.png";
import okada from ".././assets/img/okada.png";
import mask from ".././assets/img/mask.png";
import entire from ".././assets/img/entire.png";
import elizabeth from ".././assets/img/elizabeth.png";
import cake from ".././assets/img/cake.png";
import pizza from ".././assets/img/pizza.png";
import burger from ".././assets/img/burger.png";
import second_order from ".././assets/img/second_order.png";
import order from ".././assets/img/order.png";
import indomie from ".././assets/img/indomie.png";
import icecream from ".././assets/img/icecream.png";
import redesign from ".././assets/img/redesign.png";
import hairwoman from ".././assets/img/hairwoman.png";

//importing vendor javascript

//importing vendor css code
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

//importing css files
import ".././assets/css/HomeScreen.css";

function HomeScreen() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    const textElements = document.querySelectorAll(".fade-in-text");
    textElements.forEach((element) => {
      element.classList.add("fade-in");
    });
  }, []);

  const handleButtonClick = () => {};
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo">
            <img src={logo} alt="Logo" className="img-fluid" />
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a
                  className="nav-link scrollto active"
                  style={{ color: "#D21A32" }}
                  href="#hero"
                >
                  Why Chow?
                </a>
              </li>
              <li className="dropdown">
                <a className="nav-link scrollto" href="#services">
                  <span>Services</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul style={{ left: "-190px" }}>
                  <li>
                    <button
                      style={{
                        borderWidth: 0,
                        background: "#fff",
                        marginLeft: 13,
                        color: "black",
                      }}
                      onClick={() => handleButtonClick()}
                    >
                      We offer
                    </button>
                  </li>

                  <li>
                    <button
                      style={{
                        borderWidth: 0,
                        background: "#fff",
                        marginLeft: 13,
                        color: "black",
                      }}
                      onClick={() => handleButtonClick()}
                    >
                      Food Delivery Services
                    </button>
                  </li>

                  <li>
                    <button
                      style={{
                        borderWidth: 0,
                        background: "#fff",
                        marginLeft: 13,
                        color: "black",
                      }}
                      onClick={() => handleButtonClick()}
                    >
                      To ease
                    </button>
                  </li>

                  <li>
                    <button
                      style={{
                        borderWidth: 0,
                        background: "#fff",
                        marginLeft: 13,
                        color: "black",
                      }}
                      onClick={() => handleButtonClick()}
                    >
                      Taste of Students
                    </button>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="nav-link scrollto" href="#menu">
                  <span>Menu</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul style={{ left: "-230px" }}>
                  <li>
                    <button
                      style={{
                        borderWidth: 0,
                        background: "#fff",
                        marginLeft: 13,
                        color: "black",
                      }}
                      onClick={() => handleButtonClick()}
                    >
                      There are alot
                    </button>
                  </li>
                  <li>
                    <button
                      style={{
                        borderWidth: 0,
                        background: "#fff",
                        marginLeft: 13,
                        color: "black",
                      }}
                      onClick={() => handleButtonClick()}
                    >
                      of Food to order
                    </button>
                  </li>
                  <li>
                    <button
                      style={{
                        borderWidth: 0,
                        background: "#fff",
                        marginLeft: 13,
                        color: "black",
                      }}
                      onClick={() => handleButtonClick()}
                    >
                      So why not try us
                    </button>
                  </li>
                  <li>
                    <button
                      style={{
                        borderWidth: 0,
                        background: "#fff",
                        marginLeft: 13,
                        color: "black",
                      }}
                      onClick={() => handleButtonClick()}
                    >
                      Click on "try us" button
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  About
                </a>
              </li>
              <li>
                <a className="scrollto" href="#contact">
                  <i className="bi bi-search"></i>
                </a>
              </li>
              <li>
                <a className="scrollto" href="#contact">
                  <i className="bi bi-bell"></i>
                </a>
              </li>
              <li>
                <a
                  className="getstarted scrollto"
                  href="https://chow-dev.vercel.app/"
                >
                  Try Us
                </a>
              </li>
            </ul>
            <i
              className="bi bi-list mobile-nav-toggle"
              onClick={() => handleMobileNavToggle()}
            ></i>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileNavOpen && (
        <div className="mobile-nav">
          <ul>
            <li>
              <a
                className="nav-link scrollto active"
                style={{ color: "#D21A32" }}
                href="#hero"
                onClick={() => {
                  handleMobileNavToggle();
                }}
              >
                Why Chow?
              </a>
            </li>
            {/* Add other navigation links here */}
          </ul>
        </div>
      )}

      <header
        style={{ background: "#FEF3F3" }}
        id="hero"
        className="d-flex align-items-center"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <img
                src={morePicture}
                id="up"
                style={{
                  position: "relative",
                  top: "-20px",
                  marginTop: "-10px",
                }}
                width="210px"
                height="100px"
                className="img-fluid more"
                alt=""
              />
              <h1 className="fade-in-text">
                Be The Fastest <br />
                In Delivering <br />
                Your <span style={{ color: "#D21A32" }}>Food</span>
              </h1>
              <ul style={{ fontSize: "15px" }}>
                Welcome to CHOWGOO. At CHOWGOO, we bring quick and delicious
                meals right to your doorstep, so you can savor every bite. At
                CHOWGOO, we bring quick and delicious meals right to your
                doorstep.
                <br />
              </ul>
              <div className="mt-3">
                <a
                  href="https://chow-dev.vercel.app/"
                  className="btn-get-started scrollto"
                >
                  Get Started
                </a>
                <a
                  href="https://chow-dev.vercel.app/"
                  className="btn-get-quote"
                >
                  <i
                    style={{ color: "#FDC55E" }}
                    className="bi bi-play-fill"
                  ></i>
                  Watch A Video
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={elizabeth} className="img-fluid" alt="" />
              <img src={hotdog} width="430px" className="img-fluids" alt="" />
            </div>
          </div>
        </div>
      </header>
      <header
        style={{ background: "#FEF3F3" }}
        id="services"
        className="services"
      >
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>What We Serve</h2>
            <h6 style={{ fontSize: "30px", fontWeight: "bold" }}>
              Your Favorite Food Delivery Partner
            </h6>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 dflex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <img src={man} alt="Fastest Delivery" style={{ width: 180 }} />
                <h4>
                  <button
                    style={{
                      borderWidth: 0,
                      background: "#fff",
                      color: "#5a5af3",
                    }}
                    href=""
                  >
                    Easy To Order
                  </button>
                </h4>
                <p>
                  Omo this is the easiest place to order food from and whats
                  better? its in your school.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 dflex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <img
                  src={okada}
                  alt="Fastest Delivery"
                  style={{ width: 180 }}
                />
                <h4>
                  <button
                    style={{
                      borderWidth: 0,
                      background: "#fff",
                      color: "#5a5af3",
                    }}
                    href=""
                  >
                    Best Quality
                  </button>
                </h4>
                <p>
                  MTU Chow offers the best quality experience in food delivery
                  to your place of environment.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 dflex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <img
                  src={mask}
                  alt="Fastest Delivery"
                  style={{ width: 180, height: 180 }}
                />
                <h4>
                  <button
                    style={{
                      borderWidth: 0,
                      background: "#fff",
                      color: "#5a5af3",
                    }}
                    href=""
                  >
                    Fastest Delivery
                  </button>
                </h4>
                <p>
                  We are so fast, we make the Flash (Barry Allen) look like he's
                  at the same speed of that of a turtle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main style={{ background: "#FEF3F3" }} id="main">
        <header id="menu" className="about">
          <div className="container">
            <div className="row content">
              <div className="col-lg-6">
                <h2
                  style={{
                    color: "#D21A32",
                    fontFamily: "Inter",
                    fontSize: "18px",
                  }}
                >
                  OUR MENU
                </h2>
                <h3
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "35px",
                    color: "#313131",
                  }}
                >
                  Menu That Always <br /> Make You Fall In Love
                </h3>
                <div
                  style={{ borderStyle: "solid transparent" }}
                  className="solid"
                >
                  <ul>
                    <li>
                      <a
                        style={{ fontSize: "20px", color: "black" }}
                        href="index.html"
                      >
                        <img src={burger} width="70px" alt="Burger" />
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ fontSize: "20px", color: "black" }}
                        href="index.html"
                      >
                        <img src={pizza} width="150px" alt="Pizza" />
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ fontSize: "20px", color: "black" }}
                        href="index.html"
                      >
                        <img src={cake} width="50px" alt="Cake" />
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ fontSize: "20px", color: "black" }}
                        href="index.html"
                      >
                        <img src={indomie} width="50px" alt="Indomie" />
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ fontSize: "20px", color: "black" }}
                        href="index.html"
                      >
                        <img src={icecream} width="50px" alt="Ice Cream" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0"
                style={{ position: "relative", top: "120px" }}
              >
                <img src={order} width="220px" height="320px" alt="Order" />
                <img src={second_order} height="310px" alt="Second Order" />
              </div>
            </div>
          </div>
        </header>
        <header style={{ marginTop: 150 }} id="menu" className="about">
          <div className="container">
            <div className="row content">
              <div className="col-lg-6">
                <img
                  classame="fade-in-text"
                  src={redesign}
                  className="img-fluid"
                  alt="Redesign"
                />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <h2
                  style={{
                    color: "#D21A32",
                    fontFamily: "Inter",
                    fontSize: "18px",
                  }}
                >
                  OUR MENU
                </h2>
                <h3
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "35px",
                    color: "#313131",
                  }}
                >
                  What Our Customer <br /> Says About Us
                </h3>
                <ul>
                  <p style={{ fontSize: "15px" }} className="fst-italic">
                    MTU CHOW provides cutting edge technology to support and
                    give you the best experience in food delivery as well as
                    food you can order at cheap rates. We are always here when
                    you need us.
                  </p>
                </ul>
                <p className="fst-italic">
                  <img className="img-fluid" src={hairwoman} alt="hairwoman" />
                  <div style={{ top: "-350px", marginLeft: "150px" }}>
                    <p
                      style={{
                        position: "relative",
                        top: "-70px",
                        left: "-50px",
                      }}
                    >
                      Theresa Jordan <br />
                      <span style={{ color: "#555555" }}>Food Enthusiast</span>
                    </p>
                  </div>
                  <div style={{ position: "relative", top: "-30px" }}>
                    <i
                      style={{ color: "#FDC55E" }}
                      className="bi bi-star-fill"
                    ></i>
                    <i
                      style={{ color: "#FDC55E" }}
                      className="bi bi-star-fill"
                    ></i>
                    <i
                      style={{ color: "#FDC55E" }}
                      className="bi bi-star-fill"
                    ></i>
                    <i
                      style={{ color: "#FDC55E" }}
                      className="bi bi-star-fill"
                    ></i>
                    <i style={{ color: "#FDC55E" }} className="bi bi-star"></i>{" "}
                    4.8
                  </div>
                </p>
              </div>
            </div>
          </div>
        </header>
        <header id="contact" className="contact">
          <div className="container">
            <div className="row">
              <div className="solid">
                <a href="index.html">
                  <img src={entire} className="img-fluid" alt="Entire" />
                </a>
              </div>
            </div>
          </div>
        </header>
      </main>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <a href="index.html" className="logo">
                  <img src={logo} alt="" className="img-fluid" />
                </a>
                <p style={{ color: "#555555", fontSize: "12px" }}>
                  MTU CHOW is very awesome. I hope VC approves it and it becomes
                  part of the school xfgdsg
                </p>
                <br />
                <a
                  href="https://www.instagram.com/chowgoo_/"
                  className="instagram"
                >
                  <i
                    className="bx bxl-instagram"
                    style={{ color: "#D21A32", fontSize: "30px" }}
                  ></i>
                </a>
                <a href="https://twitter.com/ChowGoo_/" className="twitter">
                  <i
                    className="bx bxl-twitter"
                    style={{ color: "#D21A32", fontSize: "30px" }}
                  ></i>
                </a>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>About</h4>
                <ul>
                  <li>
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <a href="https://theconversation.com/africa/topics/school-food-8703">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#menu">Menu</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="index.html">Why Chow?</a>
                  </li>
                  <li>
                    <a href="#services">Support Center</a>
                  </li>
                  <li>
                    <a href="#menu"> Menu </a>
                  </li>
                  <li>
                    <a href="#contact"> About </a>
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-4 col-md-6 footer-links"
                id="footer-links"
                style={{ marginLeft: "-70px" }}
              ></div>
              <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Get In Touch</h4>
                <p style={{ color: "#555555" }}>
                  Question or Query? <br /> We are here!
                </p>
                <a href="https://gmail.com">
                  <img src={email} width="120px" alt="Email" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <button
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </div>
  );
}

export default HomeScreen;
