import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon  } from "mdbreact";
import { BrowserRouter as Link,Redirect } from "react-router-dom";
import { MDBNavbarNav} from "mdbreact";


export default class Tableau extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            profil: [],
            nom:"",
            prenom:"",
            email:"",
            telephone:"",
            redirect:false,
            redirect1:false,
            redirect2:false,
            redirect3:false,
            redirect4:false 
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {    
      axios.get('https://gecback.herokuapp.com/atelier').then(res => {
         
          this.setState({ profil: res.data })
          console.log("state" +this.state.profil)
  
      })
      .catch(function (error) {
        console.log(error);
    })
  }
  
  handleChange(e){
      this.setState({
          [e.target.name]: e.target.value
      })
  }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/profil' /> 
        }  
      }
      renderRedirect1 = () => {
        if (this.state.redirect1) {
          return <Redirect to='/Dashboard' /> 
        }  
      }
      renderRedirect2 = () => {
        if (this.state.redirect2) {
          return <Redirect to='/actualite' /> 
        }  
      }
      renderRedirect3 = () => {
        if (this.state.redirect3) {
          return <Redirect to='/Ajout' /> 
        }  
      }
      renderRedirect4 = () => {
        if (this.state.redirect4) {
          return <Redirect to='/List' /> 
        }  
      }

    liste() {
        return <div>
            <div className="row">
                <div className="col-md-2">
                  <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
                    <div class="container-fluid">+
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <ul class="nav align-items-center d-md-none">
                        <li class="nav-item dropdown">
                          <a class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="ni ni-bell-55"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                          </div>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="media align-items-center">
                              <span class="avatar avatar-sm rounded-circle">
                                <img alt="Image placeholder" src="img/noah.jpg"/>
                              </span>
                            </div>
                          </a>
                          <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                            <div class=" dropdown-header noti-title">
                              <h6 class="text-overflow m-0">Welcome!</h6>
                            </div>
                            <a href="../examples/profile.html" class="dropdown-item">
                              <i class="ni ni-single-02"></i>
                              <span>My profile</span>
                            </a>
                            <a href="../examples/profile.html" class="dropdown-item">
                              <i class="ni ni-settings-gear-65"></i>
                              <span>Settings</span>
                            </a>
                            <a href="../examples/profile.html" class="dropdown-item">
                              <i class="ni ni-calendar-grid-58"></i>
                              <span>Activity</span>
                            </a>
                            <a href="../examples/profile.html" class="dropdown-item">
                              <i class="ni ni-support-16"></i>
                              <span>Support</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#!" class="dropdown-item">
                              <i class="ni ni-user-run"></i>
                              <span>Logout</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div class="collapse navbar-collapse" id="sidenav-collapse-main">

                      <div class="navbar-collapse-header d-md-none">
                      <div class="row">
                        <div class="col-6 collapse-brand">
                          <a>
                            <img src=""/>
                          </a>
                        </div>
                        <div class="col-6 collapse-close">
                          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                            <span></span>
                            <span></span>
                          </button>
                        </div>
                      </div>
                    </div>
                   
                    <form class="mt-4 mb-3 d-md-none">
                      <div class="input-group input-group-rounded input-group-merge">
                        <input type="search" class="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search" />
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <span class="fa fa-search"></span>
                          </div>
                        </div>
                      </div>
                    </form>
                    
                    <MDBNavbarNav>
                      <li class="nav-item">
                          <img className=""  src="img/logo2.jpg"  alt = "logo" height="60px"/>
                          <span id="good"> G E C</span>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">
                          <button onClick={()=>this.setState({redirect:true})} className="redir">{this.renderRedirect()}
                          <span class="ni ni-single-02 text-yellow">User profile</span> <span class="sr-only">(current)</span>
                          </button>
                        </a>
                      </li>
                      
                      <li class="nav-item">
                        <a class="nav-link">
                          <button onClick={()=>this.setState({redirect1:true})} className="redir">{this.renderRedirect1()}
                            <span class="ni ni-tv-2 text-primary">  Dashboard</span><span class="sr-only">(current)</span>
                          </button>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">
                          <button onClick={()=>this.setState({redirect2:true})} className="redir">{this.renderRedirect2()}
                            <Link to="/actualite"><span class="ni ni-bullet-list-67 text-blue">  Actualité</span></Link> <span class="sr-only">(current)</span>
                          </button>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">
                          <button onClick={()=>this.setState({redirect3:true})} className="redir">{this.renderRedirect3()}
                            <Link to="/Ajout"><span class="ni ni-album-2 text-blue">  Ajouter</span></Link> <span class="sr-only">(current)</span>
                          </button>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">
                          <button onClick={()=>this.setState({redirect4:true})} className="redir">{this.renderRedirect4()}
                            <Link to="/List"><span class="ni ni-collection text-blue">  List</span></Link> <span class="sr-only">(current)</span>
                          </button>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">
                          <Link to="/Table"><span  class="ni ni-bullet-list-67 text-red">  Tables</span></Link> <span class="sr-only">(current)</span>
                        </a>
                      </li>

                    </MDBNavbarNav>
                    
                    <hr class="my-3"/>
                   
                    <h6 class="navbar-heading text-muted">Gasy Ecocitizen</h6>
                    
                    <ul class="navbar-nav mb-md-3">
                      <li class="nav-item">
                        <a class="nav-link">
                          <Link to="" onClick={this.onLogoutClick} className="nav-header"><span class="ni ni-key-25 text-info">  Deconnexion</span></Link> <span class="sr-only">(current)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
                </div>
                <div className="col-md-10">
                <MDBContainer fluid>
            
            {this.state.profil.length>0 ?(this.state.profil.filter(us=>us.valid==true).map(menu=>{
            return(
                <div className="row">
                <div className="col-md-8">
                <MDBRow>
                <MDBCol md="12">
                        <MDBCard wide ecommerce>
                            <MDBCardBody cascade  placement="top"
                                    tag="a"
                                    component="i"
                                    componentClass="fa fa-eye grey-text ml-3"
                                    tooltipContent="Quick look"
                                    className="text-center">
                            <MDBCardTitle>
                                <strong id="color">
                                    <h2 id="tex">{menu.titre}</h2>
                                </strong>
                                    <p>Date: { menu.date }</p>
                            </MDBCardTitle>
                            <MDBCardText>
                            <div  class="more">
                            <p className="card-text">
                                <strong><span id="description">Description</span></strong>&nbsp;&nbsp; 
                            <div id="point1">{menu.description}</div> 
                            <a className="more-text" href="#!" id="plusmoins"> 
                                <span className="plus">voir plus déscription</span> 
                                <span className="moins" id="moinsmoins"></span> 
                            </a> 
                            <p className="hidetext"> {menu.description} </p> 
                            </p> 
                            </div>
                                {/* <h6>{menu.description}</h6> */}
                            </MDBCardText>
                            {/* <MDBCardFooter className="px-1">
                                <span className="float-left font-weight-bold">
                                <strong></strong>
                                </span>
                                <span className="float-right">
                                </span>
                            <div className="">
                            </div>
                            </MDBCardFooter> */}
                                
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCardImage
                            cascade
                            src={'https://gecback.herokuapp.com/atelier/'+ menu.photo}
                            top
                            alt="sample photo"
                            />
                                
                    </MDBCol>
                    </MDBRow>

                </div>
                <div className="col-md-4">
                        <MDBCard className="card-image" style={{
                    backgroundImage: "url('/img/impact02.jpg')"
                    }}>
                <div className="text-white text-center d-flex align-items-center rgba-grey-strong py-5 px-4">
                    <div>
                    <h5 className="yellow-text">
                        <MDBIcon icon="" />
                    </h5>
                    <MDBCardTitle tag="h3" className="pt-2">
                        <strong>{menu.titre1}</strong>
                    </MDBCardTitle>
                    <p>{menu.description1}
                    </p>
                    <p><span id="dat">{menu.createdAt}</span></p>
                    </div>
                    
                </div>
                </MDBCard>
                </div>
                </div>
                )})):""} 
            
            </MDBContainer>
                </div>
            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}