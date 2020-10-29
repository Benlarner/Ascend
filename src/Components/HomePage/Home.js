import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div class="banner">
        <div class="banner__header">
          <div class="first">
            <h1>Build Your Own Store In Minutes</h1>
            <h2>
              At <strong>Ascend</strong> our e-commerce experts and advanced AI
              technology make launching and running a successful webstore
              effortless
            </h2>
          </div>
          <div class="second">
            <h1>Sign Up Now</h1>
            <div class="input">
              <input type="text" placeholder="Full Name" class="email" />
              <input type="text" placeholder="Email Address" class="email" />
            </div>
            <div class="buttons">
              <button class="btn_first">Get Started!</button>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div class="middle">
        <h1>Improving your Services has never been easier</h1>
        <h3>
          At <strong>Ascend</strong>, we analyze suppliers, competitors, and
          social media, to provide you with the tools you need to find products,
          build a stunning website, and create a marketing plan and content that
          drives sales and consumer engagement
        </h3>
      </div>
      <hr />

      <div class="services">
        <div class="services-details">
          <i class="far fa-clock fa-2x"></i>
          <h2>Saves You Time</h2>
          <p class="p">
            Use our expertly crafted templates and prepared product pages to
            quickly build and edit your store on the fly
          </p>
        </div>

        <div class="sservices-details">
          <i class="fas fa-tools fa-2x"></i>
          <h2>24/7 Analysis</h2>
          <p class="p">
            Real time analytics provide you with constantly updating
            information, ensuring your store is always ahead of the trend
          </p>
        </div>

        <div class="services-details">
          <i class="fas fa-briefcase fa-2x"></i>
          <h2>Saves You Work</h2>
          <p class="p">
            Advanced AI technology provides you with information on succesful
            products, store designs, and marketing tactics
          </p>
        </div>
      </div>
      <button class="btn-demo">Register Now</button>

      <section class="offer">
        <div class="row">
          <div class="col-md-6">
            <div class="subscribe">
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
      <h2 class="testomo">
        Don't take it from us! <strong>Ascend</strong> has been shown to bring
        in clients and drive sales, here are some success stories
      </h2>
      <div class="Reviews">
        <h1>Reviews</h1>
        <div class="persons">
          <div class="person__one">
            <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="" />
            <h2>Melvin Page</h2>
            <p>Owner, Pageless Clothing</p>
            <p class="p">
              <small>
                "Ascend helped me relize the effectiveness in user-generated ad
                content"
              </small>
            </p>
          </div>
          <div class="person__one">
            <img
              src="https://randomuser.me/api/portraits/women/33.jpg"
              alt=""
            />
            <h2>Khloe Cain</h2>
            <p>Manager, Luxe Bath and Spa</p>
            <p class="p">
              <small>
                "Marketing at Ascend helped me target ads at a more receptive
                client base"
              </small>
            </p>
          </div>
          <div class="person__one">
            <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="" />
            <h2>Brandon Mike</h2>
            <p>Owner, Big Mike's Smoke Shop</p>
            <p class="p">
              <small>
                "Ascend product analysis helped me find products that lifted my
                sales to a new high"
              </small>
            </p>
          </div>
        </div>
      </div>
      <hr></hr>

      <section class="best">
        <img src="./assests//1.png" alt="" />
        <div class="best__right">
          <h1>Get It Done</h1>
          <p>
            With a few butten clicks, your store can be ready for launch faster
            than ever before.
          </p>
          <div class="best__bottom">
            <div class="best__first">
              <i class="far fa-clock fa-2x"></i>
              <h2>Save Time</h2>
            </div>
            <div class="best__first">
              <i class="far fa-address-book fa-2x"></i>
              <h2>More Clients</h2>
            </div>
          </div>
          <div class="best__bottom">
            <div class="best__first">
              <i class="fas fa-wallet fa-2x"></i>
              <h2>Spend Less</h2>
            </div>
            <div class="best__first">
              <i class="far fa-bell fa-2x"></i>
              <h2>Live Updates</h2>
            </div>
          </div>
          <div class="best__bottom">
            <div class="best__first">
              <i class="fas fa-mobile-alt fa-2x"></i>
              <h2>Mobile Friendly </h2>
            </div>

            <div class="best__first">
              <i class="fas fa-code fa-2x"></i>
              <h2>Stable Code</h2>
            </div>
          </div>
          <button class="btn-demo">Register Now</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
