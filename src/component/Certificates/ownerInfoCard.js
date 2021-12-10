import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './style/cards.scss';

const OwnerInfoCard = () => {
  return (
    <div className="check-card owner-card">
      <div className="card-number">2</div>
      <h3 className="card-heading">Owner info and notes</h3>
      <form>
        <label>Owner Email :</label>
        <div className="inputs">
          <input type="text" />
          <span className="crass">X</span>
        </div>
        <label>Owner Team :</label>
        <div className="inputs">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <label>Notes :</label>
        <textarea></textarea>
      </form>
    </div>
  );
};

export default OwnerInfoCard;
