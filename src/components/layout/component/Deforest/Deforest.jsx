import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Chart from '../../Chart';
import Header from '../../Accueil';
import Footer from '../Footer/Footer';

class Impact extends Component {
  render() {
    return (
      <div id="fond0">
         <Header />
            <MDBContainer fluid>
              <Chart />
            </MDBContainer>
        <div id="#foot">
          <Footer /> 
        </div>
      </div>
    );
  }
  };

  export default Impact;