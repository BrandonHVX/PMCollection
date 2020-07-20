import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/7.jpg';
import pic2 from '../assets/images/6.jpg';
import pic3 from '../assets/images/5.jpg';
import pic4 from '../assets/images/1.jpg';
import pic5 from '../assets/images/2.jpg';
import pic6 from '../assets/images/3.jpg';
import pic7 from '../assets/images/4.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">MISSION STATEMENT</h2>
            <p>
              Our Mission is to produce the highest quality, substainably grown
              mushroons in Florida.Our goal is not to be first with our products
              each season, but to wait for the right time to harvest for peak
              flavor, freshness and sustainability.
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">ABOUT US</h2>
            <p>
              We’re a florida based mushroom farm serving local markets, CSAs
              and farm-to-table restaurants. PM Collection has built a
              reputation for impeccable quality in the wild food world, offering
              foraged mushrooms, wild greens, berries and teas to professional
              chefs and home cooks alike.
            </p>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Our Process</h2>
            <p>
              Our wild edibles are harvested solely in North America, keeping a
              main focus in the Southeast. We take a direct, hands-on approach
              that cuts out the middlemen and ensures better quality by reducing
              the time it takes to get our goods to our customers.
            </p>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">CULTIVATED MUSHROOMS</h2>
          <p></p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">BLUE OYSTERS </h3>
              <p>PLEUROTUS OSTREATUS VAR. COLUMBINUS $12/LB</p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">WHITE & BROWN BEECH </h3>
              <p>HYPSIZYGUS TESSELLATUS $16/LB</p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">MAITAKE </h3>
              <p>GRIFOLA FRONDOSA $18/LB</p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">SHIITAKE </h3>
              <p>LENTINULA EDODES $15/LB</p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              {/* <a href="/#" className="button">
                Browse All
              </a> */}
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
