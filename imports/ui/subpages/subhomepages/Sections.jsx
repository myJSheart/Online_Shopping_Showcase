import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import $ from 'jquery';

class Sections extends Component {
  render() {
    return (
      <div className="sections" id="sections">
        <Grid>
          <Cell col={4} tablet={8} phone={6}>
            <div className="container">
              <img width="100%" src="plants/left.jpg" alt="" className="image-hover" />
              <div className="overlay">
                <div className="text">1</div>
              </div>
            </div>
          </Cell>
          <Cell col={4} tablet={8} phone={6}>
            <Cell col={12} tablet={8} phone={6}>
              <div className="container">
                <img style={{ width: '100%' }} width="100%" src="plants/above.jpg" alt="" className="image-hover" />
                <div className="overlay">
                  <div className="text">1</div>
                </div>
              </div>
            </Cell>
            <Cell col={12} tablet={8} phone={6}>
              <div className="container">
                <img style={{ marginTop: '15px', width: '100%' }} width="100%" src="plants/below.jpg" alt="" className="image-hover" />
                <div className="overlay">
                  <div className="text">1</div>
                </div>
              </div>
            </Cell>
          </Cell>
          <Cell col={4} tablet={8} phone={6}>
            <div className="container">
              <img width="100%" src="plants/right.jpg" alt="" className="image-hover" />
              <div className="overlay">
                <div className="text">1</div>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Sections;
