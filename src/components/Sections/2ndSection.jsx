import React from 'react';
// import './ServiceSection.css'; // Uncomment if you have a CSS file for styling

// Import service icons
// import serviceIcon1 from './images/images/service-icon-1.png'; // Adjusted path for icon 1
// import serviceIcon2 from '../images/service-icon-2.png'; // Ensure this path is correct
// import serviceIcon3 from '../images/service-icon-3.png'; // Ensure this path is correct

const ServiceSection = () => {
  return (
    <section className="section service">
      <div className="container">
        <ul className="service-list">
          <li className="service-item">
            <div className="item-icon">
              <img src='' width="40" height="40" loading="lazy" alt="Truck icon" />
            </div>
            <h3 className="h3 item-title">Free Shipping</h3>
          </li>

          <li className="service-item">
            <div className="item-icon">
              <img src='' width="40" height="40" loading="lazy" alt="Payment card icon" />
            </div>
            <h3 className="h3 item-title">Safe Payment</h3>
          </li>

          <li className="service-item">
            <div className="item-icon">
              <img src='' width="40" height="40" loading="lazy" alt="Helpline icon" />
            </div>
            <h3 className="h3 item-title">24/7 Support</h3>
          </li>
          
        </ul>
      </div>
    </section>
  );
};

export default ServiceSection;
