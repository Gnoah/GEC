import React from 'react';
import { MDBIcon, MDBInput, MDBNavbarNav} from "mdbreact";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { BrowserRouter as Link,Redirect } from "react-router-dom";


class Atelier extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titre: '',
      titre1: '',
      description:'',
      description1:'',
      photo:'',
      redirect:false,
      redirect1:false,
      redirect2:false,
      redirect3:false,
      redirect4:false 
    };

    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }
  onChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('photo', this.uploadInput.files[0]);
    data.append('titre',this.state.titre);
    data.append('titre1',this.state.titre1);
    data.append('id_user', localStorage.getItem('id_user'))
    data.append('description',this.state.description);
    data.append('description1',this.state.description1);
  
    fetch('https://gecback.herokuapp.com/atelier', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ photo_produit: `https://gecback.herokuapp.com/atelier/${body.photo_produit}` });
        console.log('ity ilay body.fil',body.photo_produit);
        
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

  render() {
    return (
        <div>
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
              <form  onSubmit={this.handleUploadImage}>
                  <p className="h4 text-center py-4" id="pdash">Nouvelle publication </p>
                  <div className="grey-text">
                    <div className="row">
                        <div className="col-md-6">
                          <MDBInput
                            label="Titre"
                            group
                            type="text"
                            validate
                            success="right" value={this.state.value}  onChange={this.onChange} name="titre"
                            required
                          />
                          <MDBInput
                            label="Déscription"
                            group
                            type="text"
                            validate
                            success="right" value={this.state.value} onChange={this.onChange} name="description"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <MDBInput
                              label="Title right"
                              group
                              type="text"
                              validate
                              success="right" value={this.state.value} onChange={this.onChange} name="titre1"
                              
                            />
                          <MDBInput
                            label="Description right"
                            group
                            type="text"
                            validate
                            success="right" value={this.state.value} onChange={this.onChange}  name="description1"
                            
                          />
                        </div>
                      </div>
                    </div>
                    
                     
                    <label className="btn btn-default btn-file" id="fichier">
                     Photo<input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo"   required/>
                  </label>
                  <div className="text-center">
                  <div className="text-center mt-4">
                <button className="btn btn-outline-warning" onClick={()=>{
                  confirmAlert({
                    customUI: () => {
                      return (
                        <div className='custom-ui'>
                          <h1>Valider l'ajout</h1>
                          <center></center><a href="/Admin" id="okajout" className="btn btn-primary">OK</a>
                        </div>
                      );
                    }
                  });
                }} type="submit" id="ajouter_boutton">
                  Ajouter
                  <MDBIcon icon="paper-plane" className="ml-2" />
                </button>
              </div>
              </div>
                </form>
              </div>
          </div>
      </div>
    );
  }
}

export default Atelier;
