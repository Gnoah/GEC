import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Header from '../../Accueil';
import Footer from '../Footer/Footer';

class Impact extends Component {
  render() {
    return (
      <div id="fond0">
         <Header />
            <MDBContainer fluid>
              <div id="ethan">
                <br/>
                  <center><h1 className="sal">We Produce Ethanol</h1></center>
                  <center><h3 className="sal">You can buy ethanol at gasy ecocitizen</h3></center>
              </div>
            </MDBContainer>
        <div id="#foot">
          <Footer /> 
        </div>
      </div>
    );
  }
  };

  export default Impact;