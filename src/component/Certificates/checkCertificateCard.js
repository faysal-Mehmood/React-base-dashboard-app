import React from 'react';
import './style/cards.scss';
const CheckCertificateCard = () => {
  return (
    <div className="check-card">
      <div className="card-number">1</div>
      <h3 className="card-heading">Check Certificate:</h3>
      <form>
        <label>
          <span>*</span>URL :
        </label>
        <div className="inputs">
          <input type="text" placeholder="www.website.com" />
          <span className="crass">X</span>
        </div>
        <label>
          <span>*</span>Name :
        </label>
        <div className="inputs">
          <input type="text" placeholder="Reference Name for Certificate" />
          <span className="crass">X</span>
        </div>
      </form>
      <button className="card-btn">Check now</button>
    </div>
  );
};

export default CheckCertificateCard;
