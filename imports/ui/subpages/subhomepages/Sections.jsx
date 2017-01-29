import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Sections extends Component {
  render() {
    return (
      <div className="sections" id="sections">
        <Grid>
          <Cell col={4} tablet={8} phone={6}>
            <img width="100%" src="plants/4.jpeg" alt="" />
          </Cell>
          <Cell col={8} tablet={8} phone={6}>
            <Grid>
              <Cell col={6} tablet={8} phone={6}>
                <img style={{ maxWidth: '327px' }} width="100%" src="plants/5.jpg" alt="" />
              </Cell>
              <Cell col={6} tablet={8} phone={6}>
                <img style={{ maxWidth: '490px' }} width="100%" src="plants/1.jpg" alt="" />
              </Cell>
              <Cell col={6} tablet={8} phone={6}>
                <img style={{ maxWidth: '327px' }} width="100%" src="plants/2.jpeg" alt="" />
              </Cell>
              <Cell col={6} tablet={8} phone={6}>
                <img style={{ maxWidth: '490px' }} width="100%" src="plants/3.jpg" alt="" />
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Sections;
