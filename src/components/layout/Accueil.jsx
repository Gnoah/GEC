import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { MDBContainer, MDBNavbar,MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,MDBNavItem } from "mdbreact";


import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    modal5: false, 
  }

  toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
          <div>
            <MDBContainer fluid>
                <header >
                  <div className="slogo">
                   {/* <p className="logo">Gasy Ecocitizen</p> */}
                    <p className="slogan">Take care of our environment</p>                   
                    <img src="img/logo.png" width="120px"/>
                  </div>
                  <MDBNavbar dark expand="md" style={{ marginTop: "1px" }} id="zetina">
                    <MDBNavbarBrand>
                      <img className=""  src="img/fond6trqnspqrent.png"  alt = "" height="60px"/>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                      <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                        <MDBNavbarNav left>
                          <li class="nav-item">
                            <Link to="/"><span id="couleur" >Home</span></Link> <span class="sr-only">(current)</span>
                          </li>
                          <li class="nav-item">
                            <Link to="/news"><span id="couleur" >News</span></Link> <span class="sr-only">(current)</span>
                          </li>
                          <li class="nav-item">
                            <Link to="/Impact"><span id="couleur" >Impact</span></Link> <span class="sr-only">(current)</span>
                          </li>
                          <li class="nav-item">
                            <Link to="/Risk"><span id="couleur" >Risk</span></Link> <span class="sr-only">(current)</span>
                          </li>
                          <li class="nav-item">
                            <Link to="/Resolve"><span id="couleur" >Resolve</span></Link> <span class="sr-only">(current)</span>
                          </li>
                          <li class="nav-item">
                            <Link to="/Deforest"><span id="couleur" >Deforestation</span></Link> <span class="sr-only">(current)</span>
                          </li>
                          <li class="nav-item">
                            <Link to="/sale"><span id="couleur" >Sale</span></Link> <span class="sr-only">(current)</span>
                          </li>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                          <li class="nav-item" left>
                            <Link to="/login"><span id="couleur" >Sign in</span></Link> <span class="sr-only">(current)</span>
                          </li>
                        </MDBNavbarNav>
                      </MDBCollapse>
                  </MDBNavbar>
                </header>
              </MDBContainer> 
            </div>  
    );
  }
}

export default App;