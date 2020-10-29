import React from "react";
import "./Home.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import BuildIcon from "@material-ui/icons/Build";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ContactsIcon from "@material-ui/icons/Contacts";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import Laptop from "../Data/Assests/1.png";
function Home() {
  return (
    <div>
      <div className="banner">
        <div className="banner__header">
          <div className="first">
            <h1>Build Your Own Store In Minutes</h1>
            <h2>
              At <strong>Ascend</strong> our e-commerce experts and advanced AI
              technology make launching and running a successful webstore
              effortless
            </h2>
          </div>
          <div className="second">
            <h1>Sign Up Now</h1>
            <div className="input">
              <input type="text" placeholder="Full Name" className="email" />
              <input
                type="text"
                placeholder="Email Address"
                className="email"
              />
            </div>
            <div className="buttons">
              <button className="btn_first">Get Started!</button>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="middle">
        <h1>Improving your Services has never been easier</h1>
        <h3>
          At <strong>Ascend</strong>, we analyze suppliers, competitors, and
          social media, to provide you with the tools you need to find products,
          build a stunning website, and create a marketing plan and content that
          drives sales and consumer engagement
        </h3>
      </div>
      <hr />

      <div className="services">
        <div className="services-details">
          <BuildIcon className="svg_icons" />
          <h2>Saves You Time</h2>
          <p className="p">
            Use our expertly crafted templates and prepared product pages to
            quickly build and edit your store on the fly
          </p>
        </div>

        <div className="services-details">
          <AccessTimeIcon className="svg_icons" />
          <h2>24/7 Analysis</h2>
          <p className="p">
            Real time analytics provide you with constantly updating
            information, ensuring your store is always ahead of the trend
          </p>
        </div>

        <div className="services-details">
          <BusinessCenterIcon className="svg_icons" />
          <h2>Saves You Work</h2>
          <p className="p">
            Advanced AI technology provides you with information on succesful
            products, store designs, and marketing tactics
          </p>
        </div>
      </div>
      <button className="btn-demo">Register Now</button>

      <section className="offer">
        <div className="row">
          <div className="col-md-6">
            <div className="subscribe">
              <h4>Ecommerce Has Never Been Easier</h4>
              <p>
                Learn about how <strong>Ascend</strong> can give you
                independence over your webstore
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      <h2 className="testomo">
        Don't take it from us! <strong>Ascend</strong> has been shown to bring
        in clients and drive sales, here are some success stories
      </h2>
      <div className="Reviews">
        <h1 className="review__text">Reviews</h1>
        <div className="persons">
          <div className="person__one">
            <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="" />
            <h2>Melvin Page</h2>
            <p>Owner, Pageless Clothing</p>
            <p className="p">
              <small>
                "Ascend helped me relize the effectiveness in user-generated ad
                content"
              </small>
            </p>
          </div>
          <div className="person__one">
            <img
              src="https://randomuser.me/api/portraits/women/33.jpg"
              alt=""
            />
            <h2>Khloe Cain</h2>
            <p>Manager, Luxe Bath and Spa</p>
            <p className="p">
              <small>
                "Marketing at Ascend helped me target ads at a more receptive
                client base"
              </small>
            </p>
          </div>
          <div className="person__one">
            <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="" />
            <h2>Brandon Mike</h2>
            <p>Owner, Big Mike's Smoke Shop</p>
            <p className="p">
              <small>
                "Ascend product analysis helped me find products that lifted my
                sales to a new high"
              </small>
            </p>
          </div>
        </div>
      </div>
      <hr></hr>

      <section className="best">
        <img src={Laptop} alt="" />
        <div className="best__right">
          <h1>Get It Done</h1>
          <p>
            With a few butten clicks, your store can be ready for launch faster
            than ever before.
          </p>
          <div className="best__bottom">
            <div className="best__first">
              <AccessTimeIcon className="svg_icons" />

              <h2>Save Time</h2>
            </div>
            <div className="best__first">
              <ContactsIcon className="svg_icons" />

              <h2>More Clients</h2>
            </div>
          </div>
          <div className="best__bottom">
            <div className="best__first">
              <MonetizationOnIcon className="svg_icons" />

              <h2>Spend Less</h2>
            </div>
            <div className="best__first">
              <NotificationsNoneIcon className="svg_icons" />

              <h2>Live Updates</h2>
            </div>
          </div>
          <div className="best__bottom">
            <div className="best__first">
              <PhoneAndroidIcon className="svg_icons" />

              <h2>Mobile Friendly </h2>
            </div>

            <div className="best__first">
              <DeveloperModeIcon className="svg_icons" />

              <h2>Stable Code</h2>
            </div>
          </div>
          <button className="btn-demo">Register Now</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
