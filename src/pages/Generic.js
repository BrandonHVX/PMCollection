import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>About Us</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Our Story & Preperation</h3>
          <p>
            PM Collection has built a reputation for impeccable quality in the
            wild food world, offering foraged mushrooms, wild greens, berries
            and teas to professional chefs and home cooks alike. We sell our
            products to hundreds of the country’s most well respected
            restaurants, at our local Florida markets and, soon online.
          </p>

          <h3 className="major">Fresh Mushrooms</h3>
          <p>
            All fresh mushrooms upon receiving should be kept refrigerated
            preferably in a brown paper bag to keep them from drying out too
            excessively. We suggest washing all wild mushrooms but some
            varieties especially during dry times of year can be simply brushed
            off with a pastry brush. For washing we suggest submerging in a bowl
            of water, sloshing them around to help remove any debris, then
            removing from water and putting in a strainer to remove excessive
            liquid. Thereafter it is good to let them air dry completely before
            preparing. This process should only be done day of cooking to retain
            their freshness. Most wild mushrooms should be used within 3 days
            but some varieties like chanterelle and hedgehogs how longer shelf
            lives.
          </p>
          <h3 className="major">Dried Mushrooms</h3>
          <p>
            Dried Mushrooms To reconstitute dried mushrooms, pour simmering
            water to just cover the mushrooms and let sit for 15-30 minutes.
            This is best done by barely covering the dried mushrooms with the
            water, cover with saran wrap(this helps with steaming) and letting
            it sit and rehydrate for 15 to 30 minutes. You can save the liquid
            once straining out the mushrooms as a stock, but is best used after
            pouring through coffee filter or a fine sieve to remove any grit.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
