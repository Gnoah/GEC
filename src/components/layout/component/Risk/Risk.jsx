import React from 'react';
import { MDBMedia, Animation,MDBContainer } from 'mdbreact';
import Header from '../../Accueil';
import Footer from '../Footer/Footer';
import './Risk.css'

const Risk = () => {
  return (
    <div id="fond0">
        <Header />
          <MDBContainer fluid>
            <div className="article">
              <h1>What are the risk in the future</h1>
              
              <MDBMedia list className="mt-3">
              <Animation type="fadeInLeft">
                <MDBMedia tag="li">
                  <MDBMedia left href="#">
                    <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder7.jpg" alt="Generic placeholder image" />
                  </MDBMedia>
                  
                  <MDBMedia body>
                    <MDBMedia heading>
                      We are not safe
                    </MDBMedia>
                    Human destruction of nature is rapidly eroding the world’s capacity to provide food, 
                    water and security to billions of people, 
                    according to the most comprehensive biodiversity study in more than a decade.
                    </MDBMedia>
                </MDBMedia></Animation>
                <hr/>
                <Animation type="fadeInRight">
                <MDBMedia tag="li">
                  <MDBMedia left href="#">
                    <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder6.jpg" alt="Generic placeholder image" />
                  </MDBMedia>
                  <MDBMedia body>
                    <MDBMedia heading>
                      Most dry forests have already been destroyed by human action
                    </MDBMedia>
                    Especially near the Central Highlands. The remaining forest is severely fragmented. Burning, grazing, and logging are the major threats, and siltation, overfishing and invasive species impact the wetlands. Some species such as lemurs suffer from hunting.
                  </MDBMedia>
                </MDBMedia></Animation>
                <hr/>
                <Animation type="fadeInLeft">
                <MDBMedia tag="li">
                  <MDBMedia left href="#">
                    <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder5.jpg" alt="Generic placeholder image" />
                  </MDBMedia>
                  <MDBMedia body>
                    <MDBMedia heading>
                      Poor people
                    </MDBMedia>
                    Often, there is also widespread poverty, low education levels, inadequate access to family planning services, corruption at all government levels and a lack of so-called good governance. Effects of global warming (climate change) are expected to impact developing countries more than wealthier countries, as most of them have a high "climate vulnerability".
                  </MDBMedia>
                </MDBMedia></Animation>
              </MDBMedia>
            </div>
          </MDBContainer>
      <div id="#foot">
        <Footer /> 
      </div>
    </div>
    
  );
}

export default Risk;