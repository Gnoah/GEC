import React, { Component } from "react";
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { MDBNavbarNav} from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Webcam from "react-webcam";
import { logoutUser } from "../../../actions/authActions";
import {
  Label
} from 'reactstrap';

class Profil extends Component {
  constructor(props){
    super(props);
    this.state = {
        photo: '',
        redirect:false,
        redirect1:false,
        redirect2:false,
        redirect3:false,
        redirect4:false,
        redirect5:false
    }
    this.onChange = this.onChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this);
}


onChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}
  handleEdit(ev) {
  ev.preventDefault();

  const data = new FormData();
    data.append('photo', this.uploadInput.files[0]);
console.log(this.props.id);


  fetch('https://gecback.herokuapp.com/atelier/'+ this.props.id, {

    method: 'PUT',
    body: data,
  }).then((response) => {
      
    response.json().then((body) => {
      axios.get('https://gecback.herokuapp.com/atelier/'+ localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.setState({atelier:res.data})
        })
      this.setState({ photo: `https://gecback.herokuapp.com/atelier/${body.photo}` });
      console.log('photo eco :', body.photo);

    });
  });
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
renderRedirect5 = () => {
  if (this.state.redirect5) {
    return <Redirect to='/login' /> 
  }  
}

onLogoutClick = e => {
  e.preventDefault();
  this.props.logoutUser();
};
setRef = webcam => {
  this.webcam = webcam;
};

capture = () => {
  const imageSrc = this.webcam.getScreenshot();
};

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    const { user } = this.props.auth;
    return (
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
                        <button to="" onClick={this.onLogoutClick} onClick={()=>this.setState({redirect5:true})} className="redir">{this.renderRedirect5()}<span class="ni ni-key-25 text-info">  Deconnexion</span></button> <span class="sr-only">(current)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

            </div>

            <div className="col-md-10">
            <div class="main-content">
                {/* <!-- Page content --> */}
                <div>
                <div class="row">
                    <div>
                        <div class="card bg-secondary shadow">
                            <div class="card-header bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">My account</h3>
                                </div>
                                <div class="col-4 text-right">
                                    <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                                </div>
                            </div>
                            </div>

                        </div>
                    <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                        <div class="col-lg-3 order-lg-2">
                            <div class="card-profile-image">
                            <a href="#">
                                <img src="img/default-avatar.png" class="rounded-circle"/>
                            </a>
                            </div>
                        </div>
                        <br/>
                        </div>
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                        <div class="d-flex justify-content-between">
                            <a>
                            <button id="boutton" class="btn btn-sm btn-info mr-4" onClick={()=>{
                                  confirmAlert({
                                      customUI: ({ onClose }) => {
                                        return (
                                          <div id="confirm2" className='custom-ui'>
                                          <center><Label for="item"><h3>Ajouter Photo</h3></Label></center> <br/>
                                          <center><label className="btn btn-default btn-file" id="fichier">
                                            Photo<input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo"   required/>
                                          </label>
                                          <Webcam
                                            audio={false}
                                            height={350}
                                            ref={this.setRef}
                                            screenshotFormat="image/jpeg"
                                            width={350}
                                            videoConstraints={videoConstraints}
                                          />
                                          <button onClick={this.capture}>Capture photo</button></center><br/>
                                            <button  className=" btn btn-danger BOU1"onClick={onClose}>Fermer</button>
                                            <button
                                              onClick={() => {
                                                  
                                                onClose();
                                              }}
                                            className="btn btn-success">
                                            Ajouter</button>
                                            </div>
                                                );
                                              }
                                            });
                          }} className="  btn BOU1" >Ajouter Profi</button>
                            </a>
                            <a href="#" class="btn btn-sm btn-default float-right">Message</a>
                        </div>
                        </div>
                        <div class="card-body pt-0 pt-md-4">
                        <div class="row">
                            <div class="col">
                            <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                                <div>
                                <span class="heading"></span>
                                <span class="description"></span>
                                </div>
                                <div>
                                <span class="heading">Gasy Ecocitizen</span>
                                <span class="description"></span>
                                </div>
                                <div>
                                <span class="heading"></span>
                                <span class="description"></span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <h3>
                            Geoffroy Tolojanahary<span class="font-weight-light">, 24</span>
                            </h3>
                            <div class="h5 font-weight-300">
                                <i class="ni location_pin mr-2"></i>Geoffroy, Malagasy
                            </div>
                            <div class="h5 mt-4">
                                <i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                            </div>
                            <div>
                                <i class="ni education_hat mr-2"></i>Student of Simplon Madagascar
                            </div>
                            <hr class="my-4" />
                            <p>Gasy Ecocitizen — Take care of our environment —
 a protected environment a guarantee of survival — writes, performs and records all of the environment.</p>
                            <a href="#">Show more</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-xl-8 order-xl-1">
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

          
          
    );
  }
}

Profil.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Profil);