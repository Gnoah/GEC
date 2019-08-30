import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Card from './Card-impact';
import Header from '../../Accueil';
import Footer from '../Footer/Footer';
import './Impact.css';

class Impact extends Component {
  render() {
    return (
      <div id="fond0">
         <Header />
            <MDBContainer fluid>
              <Card />
            </MDBContainer>
        <div id="#foot">
          <Footer /> 
        </div>
      </div>
    );
  }
  };

  export default Impact;