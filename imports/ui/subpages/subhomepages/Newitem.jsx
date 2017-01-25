import React, { Component } from 'react';
import { TAPi18n } from 'meteor/tap:i18n';
import { Row, Col } from 'reactstrap';

class Newitem extends Component {
  render() {
    return (
      <div className="newitem" id="newitem">
        <Row>
          <Col sm="6" md="6" xs="12">
            <div className="container-image">
              <a href=""><img alt="" src="plants/newitem.jpg" /></a>
              <div className="image-lefttop"><p>{TAPi18n.__('newitem.itemname')}</p><p>{TAPi18n.__('newitem.price')}</p></div>
            </div>
          </Col>
          <Col sm="6" md="6" xs="12">
            <div className="table" style={{ backgroundColor: '#948B8E' }}>
              <div className="cell">
                <h6>{TAPi18n.__('newitem.trend')}</h6>
                <h2>{TAPi18n.__('newitem.design')}</h2>
                <button className="table-button" type="button">{TAPi18n.__('newitem.button')}</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Newitem;
