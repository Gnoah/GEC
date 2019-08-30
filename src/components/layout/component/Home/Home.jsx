import React, { Component } from "react";
import { Animation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import Footer from '../Footer/Footer';
import Header from '../../Accueil';
import Social from '../Social/Social'

import './Home.css';

class Home extends Component {

  render() {
    let imgUrl = 'img/impact03.jpg';
    let imgUrl1 = 'img/lemur.jpg';
    let imgUrl2 = 'img/burned-forest.jpg';
    let imgUrl3 = 'img/burn-forest.jpg';
    
    return (
      <div id="fond">
        <Header/>
        <MDBContainer fluid>
        <div className="reseau">
          <Social /> 
        </div>
        <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img className="d-block w-100 image" src="img/impact03.png" alt="First slide" />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <Animation type="zoomInUp" duration="3s">
                    <h3 className="h3-responsive"><span className="sld">"Environment is no one's property to destroy; it's everyone's responsibility to protect."</span></h3>
                    <p>Mohith Agadi</p>
                  </Animation>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                
                  <img className="d-block w-100 image" src="img/animals.jpg" alt="Second slide" />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <Animation type="zoomInUp" duration="3s">
                    <h3 className="h3-responsive"><span className="sld">"One touch of nature makes the whole world kin. "</span></h3>
                    <p>William Shakespeare</p>
                  </Animation>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img className="d-block w-100 image" src="img/back_yellowgreen.jpeg"  width="700px" alt="Third slide" />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <Animation type="zoomInUp" duration="3s">
                    <h3 className="h3-responsive"><span className="sld"> "The earth has a skin and that skin has diseases; one of its diseases is called man."</span></h3>
                    <p>Friedrich Nietzsche</p>
                    </Animation>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="4">
                <MDBView>
                  <img className="d-block w-100 image" src="img/burned-forest.jpg" alt="Burnedforest" />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <Animation type="zoomInUp" duration="3s">
                    <h3 className="h3-responsive"><span className="sld"> "Our planet's alarm is going off, and it is time to wake up and take action!"</span></h3>
                    <p>Leonardo DiCaprio</p>
                  </Animation>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        <div>
            <br/><br/>
        </div>
         <div className="fh5co-project">
            <div id="portfolio2">
                <div className="row">
                    <div className="col-md-3">
                        <div className="fh5co-portfolio animate-box">
                            <a>
                                <div className="portfolio-entry" style={{backgroundImage: 'url(' + imgUrl + ')', backgroundSize: 'cover', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',}}>
                                    <div className="desc">
                                        <p>canne a sucre</p>
                                    </div>
                                </div>
                                <div className="portfolio-text text-center">
                                    <h3>Production Ethanol</h3>
                                </div> 
                            </a>
                        </div>
                     </div>

                     <div className="col-md-3">
                        <div className="fh5co-portfolio animate-box">
                            <a>
                                <div className="portfolio-entry" style={{backgroundImage: 'url(' + imgUrl1 + ')', backgroundSize: 'cover', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',}}>
                                    <div className="desc">
                                        <p>lemur</p>
                                    </div>
                                </div>
                                <div className="portfolio-text text-center">
                                    <h3>Lemur</h3>
                                </div> 
                            </a>
                        </div>
                     </div>

                     <div className="col-md-3">
                        <div className="fh5co-portfolio animate-box">
                            <a>
                                <div className="portfolio-entry" style={{backgroundImage: 'url(' + imgUrl2 + ')', backgroundSize: 'cover', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',}}>
                                    <div className="desc">
                                        <p>Feux de forêt: la situation particulièrement alarmante à Madagascar

Si le monde entier s'émeut face aux incendies sans précédent qui ravagent actuellement la forêt amazonienne, de l'autre côté du globe, la situation est tout aussi inquiétante. Les images des systèmes satellitaires de surveillance des feux de forêt indiquent que le nombre de foyers est encore plus important en Afrique subsaharienne</p>
                                    </div>
                                </div>
                                <div className="portfolio-text text-center">
                                    <h3>Deforestation</h3>
                                </div> 
                            </a>
                        </div>
                     </div>

                     <div className="col-md-3">
                        <div className="fh5co-portfolio animate-box">
                            <a href="#">
                                <div className="portfolio-entry" style={{backgroundImage: 'url(' + imgUrl3 + ')', backgroundSize: 'cover', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',}}>
                                    <div className="desc">
                                        <p></p>
                                    </div>
                                </div>
                                <div className="portfolio-text text-center">
                                    <h3>Gasy Ecocitizen</h3>
                                </div> 
                            </a>
                        </div>
                     </div>
                </div>
            </div>


        </div>
        </MDBContainer>
        
        <div id="#foot">
          <Footer /> 
        </div>
      </div>
    );
  }
}

export default Home;
