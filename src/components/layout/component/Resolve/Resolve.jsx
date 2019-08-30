import React, { Component } from "react";
import {Animation,MDBContainer  } from 'mdbreact';
import Header from '../../Accueil';
import Footer from '../Footer/Footer';
import './Resolve.css';

class Resolve extends Component {
  render() {
    return (
      <div id="fond0">
         <Header />
            <MDBContainer fluid>
              <div className="solution">
                  <Animation type="slideInDown">
                  <h3>Let's protect our environment. </h3><br/>      
                  <p>Environmental protection requires political will, strong involvement of companies, public authorities, all citizens, changing attitudes and changes in behavior of all.</p>
                  <p>Renewable resources are consumed without concern for their reproduction, biodiversity habitats are being destroyed progressively, animal and plant species are mostly threatened, endangered or already extinct, massive releases of greenhouse gases warm the planet very quickly and sustainably ... The state of biodiversity and the level of pollution of the Earth are very disturbing. The environmental challenge of sustainable development aims to implement daily actions to reduce waste, limit pollution, save resources ... to preserve them to maintain life on Earth.</p>
                  </Animation>
                  <Animation type="slideInUp">
                  <h3>Contact us and propose your solution.</h3>
                  </Animation>
              </div>
            </MDBContainer>
        <div id="#foot">
          <Footer /> 
        </div>
      </div>
    );
  }
}

export default Resolve;