import React from 'react';
import CheckCertificateCard from './checkCertificateCard';
import OwnerInfoCard from './ownerInfoCard';
import AddAdditionalCard from './addAdditionalCard';
import './style/main.scss';
const AddCertificate = () => {
  return (
    <div className="main-dash-board">
      <div className="dash-board-heading">
        <h4 className="main-heading">Add Certificate</h4>
        <p className="sub_heading">Add a new certificate to your Dashboard. As easy as 1-2-3!</p>
      </div>
      <div className="all-cards">
        <CheckCertificateCard />
        <OwnerInfoCard />
        <AddAdditionalCard />
      </div>
    </div>
  );
};

export default AddCertificate;
