import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Sections extends Component {
  render() {
    return (
      <div className="sections" id="sections">
        <Grid>
          <Cell col={4} tablet={8} phone={6}>
            <div className="container">
              <img width="100%" src="plants/left.jpg" alt="" className="image-hover" />
              <div className="overlay" style={{ backgroundColor: '#4ABBF3' }}>
                <div className="text">
                  <div className="table">
                    <div className="cell">
                      <h2>Succulent Wall Gardens</h2>
                      <p>Framed wall hanging succulent arragement provides an economic way to not only improve personal environment but also inspire employees in companies.</p>
                      <button className="table-button" type="button">Find More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Cell>
          <Cell col={4} tablet={8} phone={6}>
            <Cell col={12} tablet={8} phone={6}>
              <div className="container">
                <img style={{ width: '100%' }} width="100%" src="plants/above.jpg" alt="" className="image-hover" />
                <div className="overlay" style={{ backgroundColor: '#61BFBE' }}>
                  <div className="table">
                    <div className="cell">
                      <h2>Combo Succulents</h2>
                      <p>Serval kinds of succulent in the same pot draws colorful life. Specially picked succulents comfort your eyes.</p>
                      <button className="table-button" type="button">Explore</button>
                    </div>
                  </div>
                </div>
              </div>
            </Cell>
            <Cell col={12} tablet={8} phone={6}>
              <div className="container">
                <img style={{ marginTop: '15px', width: '100%' }} width="100%" src="plants/below.jpg" alt="" className="image-hover" />
                <div className="overlay" style={{ backgroundColor: '#9881F5' }}>
                  <div className="table">
                    <div className="cell">
                      <h2>Potted Succulents</h2>
                      <p>Precious assortment highlights your taste and wealth. Adorable succulent decorates your compact room.</p>
                      <button className="table-button" type="button">Explore</button>
                    </div>
                  </div>
                </div>
              </div>
            </Cell>
          </Cell>
          <Cell col={4} tablet={8} phone={6}>
            <div className="container">
              <img width="100%" src="plants/right.jpg" alt="" className="image-hover" />
              <div className="overlay" style={{ backgroundColor: '#FFB5BA' }}>
                <div className="text">
                  <div className="table">
                    <div className="cell">
                      <h2>Unique designs</h2>
                      <p>Unique designed massive succulents brings vitality to your sercet gardens.</p>
                      <button className="table-button" type="button">Find More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Sections;
