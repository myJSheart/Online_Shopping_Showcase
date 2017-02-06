import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Sections extends Component {
  render() {
    return (
      <div className="sections" id="sections">
        <Grid>
          <Cell col={4} tablet={8} phone={6}>
            <div className="container">
              <img width="100%" src="plants/4.jpeg" alt="" className="image" />
              <div className="overlay">
                <div className="text">1</div>
              </div>
            </div>
          </Cell>
          <Cell col={8} tablet={8} phone={6}>
            <Grid>
              <Cell col={6} tablet={8} phone={6}>
                <div className="container">
                  <img style={{ maxWidth: '327px' }} width="100%" src="plants/5.jpg" alt="" />
                  <div style={{ maxWidth: '350px' }} className="overlay">
                    <div className="text">2</div>
                  </div>
                </div>
              </Cell>
              <Cell col={6} tablet={8} phone={6}>
                <div className="container">
                  <img style={{ maxWidth: '490px' }} width="100%" src="plants/1.jpg" alt="" />
                  <div style={{ maxWidth: '490px' }} className="overlay">
                    <div className="text">3</div>
                  </div>
                </div>
              </Cell>
              <Cell col={6} tablet={8} phone={6}>
                <div className="container">
                  <img style={{ maxWidth: '327px' }} width="100%" src="plants/2.jpeg" alt="" />
                  <div style={{ maxWidth: '350px' }} className="overlay">
                    <div className="text">4</div>
                  </div>
                </div>
              </Cell>
              <Cell col={6} tablet={8} phone={6}>
                <div className="container">
                  <img style={{ maxWidth: '490px' }} width="100%" src="plants/3.jpg" alt="" />
                  <div style={{ maxWidth: '490px' }} className="overlay">
                    <div className="text">5</div>
                  </div>
                </div>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Sections;
