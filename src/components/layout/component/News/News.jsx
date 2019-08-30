import React from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon  } from "mdbreact";
import Header from '../../Accueil';
import Footer from '../Footer/Footer';

class News extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            profil: [],
            nom:"",
            prenom:"",
            email:"",
            telephone:""
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

  render() {
    return (
        <div>
        <div id="fond0">
            <Header />
            <div id="chart1">
            <MDBContainer fluid>
            
            {this.state.profil.length>0 ?(this.state.profil.filter(us=>us.valid==true).reverse().map(menu=>{
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
                            </MDBCardTitle>
                            <MDBCardText>
                            <div  class="more">
                            <p className="card-text">
                                <strong><span id="description"></span></strong>&nbsp;&nbsp; 
                            <div id="point1">{menu.description}</div> 
                            <a className="more-text" href="#!" id="plusmoins"> 
                                <span className="plus">voir plus</span> 
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
                <hr/>
                <div className="col-md-4">
                        <MDBCard className="card-image" style={{
                    backgroundImage: "url('/img/fondblanc.png')"
                    }}>
                <div className="text-white text-center d-flex align-items-center rgba-strong py-5 px-4">
                    <div>
                    <h5 className="yellow-text">
                        <MDBIcon icon="" />
                    </h5>
                    <MDBCardTitle tag="h3" className="pt-2">
                        <strong>{menu.titre1}</strong>
                    </MDBCardTitle>
                    <p id="desc">{menu.description1}
                    </p>
                    <p><span id="dat">{menu.createdAt}</span></p>
                    </div>
                    
                </div>
                </MDBCard>
                <br/>
                <hr/>
                </div>
                
                </div>
                )})):""} 
            
            </MDBContainer>
            </div>
        <div id="#foot">
            <Footer/>
        </div>
            
      </div>
        
      </div>
    );
  }
}

export default News;
