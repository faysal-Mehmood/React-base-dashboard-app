import React from 'react';
import AaaImg from '../assets/images/add-mail.png';
import DeletImg from '../assets/images/delet-img.png';
import './style/cards.scss';
const AddAdditionalCard = () => {
  return (
    <div className="check-card add-addition">
      <div className="card-number">3</div>
      <p className="add-card-heading">
        Add additional notifications <span> (Optional)</span>
      </p>
      <p className="add-abo-para">
        *Owner will automatically receive notification emails. Add additional email addresses to
        notify others.
      </p>
      <div className="email-notify">
        <span className="notify-heading">Additional Emails To Notify :</span>
        <div className="notify-mail">
          <input type="email" placeholder="Email Address" />
          <img className="Add-mage" src={AaaImg} alt="add" />
        </div>
      </div>
      <div className="axtra-mail">
        <div className="emailes">
          <h5 className="main">emailaddress@email.com</h5>
          <img className="Delet-mage" src={DeletImg} alt="delet" />
        </div>
        <div className="emailes">
          <h5 className="main">emailaddress@email.com</h5>
          <img className="Delet-mage" src={DeletImg} alt="delet" />
        </div>
        <div className="emailes">
          <h5 className="main">emailaddress@email.com</h5>
          <img className="Delet-mage" src={DeletImg} alt="delet" />
        </div>
      </div>
    </div>
  );
};

export default AddAdditionalCard;
