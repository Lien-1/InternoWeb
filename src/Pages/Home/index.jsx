import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import ButtonComponent from "../../Components/Button";
import EastIcon from "@mui/icons-material/East";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import logo1 from "../../Assets/client_logo/01.svg";
import logo2 from "../../Assets/client_logo/02.svg";
import logo3 from "../../Assets/client_logo/03.svg";
import logo4 from "../../Assets/client_logo/04.svg";
import logo5 from "../../Assets/client_logo/05.svg";
import blogImage1 from "../../Assets/blog_images/Photo.jpg";
import blogImage2 from "../../Assets/blog_images/Photo (1).jpg";
import blogImage3 from "../../Assets/blog_images/Photo (2).jpg";
Home.propTypes = {};

function Home(props) {
  return (
    <div className="main">
      <div className="banner">
        <div className="col-3"></div>
        <div className="intro__section col-5">
          <div className="sub__content">
            <h1 className="content__title">Let Your Home Be Unique</h1>
            <p className="content__description">
              There are many variations of the passages of lorem Ipsum
              fromavailable, variations of the passages.
            </p>
          </div>
          <div className="button">
            <ButtonComponent
              isLoading={false}
              variant="contained"
              children={<span>Get Started</span>}
              color="secondary"
              icon={<EastIcon fontSize="small" color="primary" />}
            />
          </div>
        </div>
      </div>
      <div className="work__list">
        <div className="col-3"></div>
        <div className="work__item col-3">
          <div className="work__item-content">
            <h3>Project Plan</h3>
            <p>
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
          </div>
          <ButtonComponent
            isLoading={false}
            variant="text"
            children={<span>Read More</span>}
            color="secondary"
            icon={<EastIcon fontSize="small" color="primary" />}
          />
        </div>
        <div className="work__item col-3">
          <div className="work__item-content">
            <h3>Project Plan</h3>
            <p>
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
          </div>
          <div className="button">
            <ButtonComponent
              isLoading={false}
              variant="text"
              children={<span>Read More</span>}
              color="secondary"
              icon={<EastIcon fontSize="small" color="primary" />}
            />
          </div>
        </div>
        <div className="work__item col-3">
          <div className="work__item-content">
            <h3>Project Plan</h3>
            <p>
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
          </div>
          <ButtonComponent
            isLoading={false}
            variant="text"
            children={<span>Read More</span>}
            color="secondary"
            icon={<EastIcon fontSize="small" color="primary" />}
          />
        </div>
        <div className="col-3"></div>
      </div>
      <div className="about__us">
        <div className="col-3"></div>
        <div className="about__us-content">
          <div className="content__description ">
            <h2>We Create The Art Of Stylish Living Stylishly</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <div className="contact__info">
              <IconButton
                aria-label="phone"
                size="large"
                sx={{
                  width: 72,
                  height: 72,
                  backgroundColor: "#F4F0EC",
                  marginRight: 2,
                }}
              >
                <PhoneIcon color="primary" sx={{ fontSize: 28 }} />
              </IconButton>
              <div className="contact__info-details">
                <h4>012345678</h4>
                <span>Call Us Anytime</span>
              </div>
            </div>
            <div className="button">
              <ButtonComponent
                isLoading={false}
                variant="contained"
                children={<span>Get Free Estimate</span>}
                color="secondary"
                icon={<EastIcon fontSize="small" color="primary" />}
              />
            </div>
          </div>
          <div className="content__img"></div>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="testimonial">
        <div className="col-3"></div>
        <div className="testimonial__container">
          <div className="testimonial__title">
            <h2 className="col-8">What the People Thinks About Us</h2>
          </div>
          <div className="testimonial__list">
            <div className="testimonial__item col-5">
              <div className="info">
                <div className="avt">
                  <img
                    src="https://6.viki.io/image/2b38dc924a4b4a20910675b653b6ec2c/dummy.jpeg?s=900x600&e=t"
                    alt="SeHun"
                  />
                </div>
                <div className="sub-info">
                  <h4>Nattasha Mith</h4>
                  <span>Sydney, USA</span>
                </div>
              </div>
              <div className="description">
                <p>
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </p>
              </div>
            </div>
            <div className="testimonial__item col-5">
              <div className="info">
                <div className="avt">
                  <img
                    src="https://6.viki.io/image/2b38dc924a4b4a20910675b653b6ec2c/dummy.jpeg?s=900x600&e=t"
                    alt="SeHun"
                  />
                </div>
                <div className="sub-info">
                  <h4>Raymond Galario</h4>
                  <span>Sydney, Australia</span>
                </div>
              </div>
              <div className="description">
                <p>
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been scrambled it to make a type book.
                </p>
              </div>
            </div>
            <div className="testimonial__item col-5">
              <div className="info">
                <div className="avt">
                  <img
                    src="https://6.viki.io/image/2b38dc924a4b4a20910675b653b6ec2c/dummy.jpeg?s=900x600&e=t"
                    alt="SeHun"
                  />
                </div>
                <div className="sub-info">
                  <h4>Benny Roll</h4>
                  <span>Sydney, New York</span>
                </div>
              </div>
              <div className="description">
                <p>
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="client__logo">
        <div className="col-3"></div>
        <div className="client__logo-list">
          <div className="client__logo-item col-3">
            <img src={logo1} alt="" />
          </div>
          <div className="client__logo-item col-3">
            <img src={logo2} alt="" />
          </div>
          <div className="client__logo-item col-3">
            <img src={logo3} alt="" />
          </div>
          <div className="client__logo-item col-3">
            <img src={logo4} alt="" />
          </div>
          <div className="client__logo-item col-3">
            <img src={logo5} alt="" />
          </div>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="projects">
        <div className="col-3"></div>
        <div className="project__content">
          <div className="heading col-11">
            <h2>Follow Our Projects</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content of page looking at its layouts points.
            </p>
          </div>
          <div className="project__list"></div>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="blog">
        <div className="col-3"></div>
        <div className="blog__content">
          <div className="heading col-11">
            <h2>Articles & News</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when looking at its layouts the
              points of using.
            </p>
          </div>
          <div className="blog__list">
            <div className="blog__item col-6">
              <div className="blog__item-container">
                <div className="blog__thumb">
                  <img src={blogImage1} alt="Blog 1" />
                  <div className="tag">
                    <span>Kitchan Design</span>
                  </div>
                </div>
                <div className="blog__content">
                  <h4>Let’s Get Solution For Building Construction Work</h4>
                  <div className="sub-content">
                    <span>26 December,2022 </span>
                    <IconButton
                      aria-label="arrow"
                      size="large"
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#F4F0EC",
                        marginRight: 2,
                      }}
                    >
                      <ArrowForwardIosIcon
                        color="primary"
                        sx={{ fontSize: 16 }}
                      />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog__item col-6">
              <div className="blog__item-container">
                <div className="blog__thumb">
                  <img src={blogImage2} alt="Blog 1" />
                  <div className="tag">
                    <span>Living Design</span>
                  </div>
                </div>
                <div className="blog__content">
                  <h4>Low Cost Latest Invented Interior Designing Ideas.</h4>
                  <div className="sub-content">
                    <span>26 December,2022 </span>
                    <IconButton
                      aria-label="arrow"
                      size="large"
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#FFFFFF",
                        marginRight: 2,
                      }}
                    >
                      <ArrowForwardIosIcon
                        color="primary"
                        sx={{ fontSize: 16 }}
                      />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog__item col-6">
              <div className="blog__item-container">
                <div className="blog__thumb">
                  <img src={blogImage3} alt="Blog 1" />
                  <div className="tag">
                    <span>Interior Design</span>
                  </div>
                </div>
                <div className="blog__content">
                  <h4>Best For Any Office & Business Interior Solution</h4>
                  <div className="sub-content">
                    <span>26 December,2022 </span>
                    <IconButton
                      aria-label="arrow"
                      size="large"
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#F4F0EC",
                        marginRight: 2,
                      }}
                    >
                      <ArrowForwardIosIcon
                        color="primary"
                        sx={{ fontSize: 16 }}
                      />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="contact">
        <div className="col-3"></div>
        <div className="contact__container">
          <h2>Wanna join the interno?</h2>
          <p>It is a long established fact will be distracted.</p>
          <div className="button">
            <ButtonComponent
              isLoading={false}
              variant="contained"
              children={<span>Contact With Us</span>}
              color="primary"
              icon={<EastIcon fontSize="small" color="secondary" />}
            />
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default Home;
