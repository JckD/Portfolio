import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../components/header'
import SlideContent from '../components/slideContent'
import anime from 'animejs/lib/anime.es.js';

import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubHeader from "../components/subheader";
import Button from 'react-bootstrap/Button';


class FullPage extends React.Component {

  onLeave(origin, destination, direction) {
    // Reset Header opactiy when leaving slide so animation can play again
    var header = destination.item.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0]
    header.style.opacity = "0";

    var subheader = destination.item.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1]
    subheader.style.opacity = "0";
    
    var svg = document.getElementById('virgo');
   // svg.style.opacity = "0";



    console.log(header)
     
  }
  afterLoad(origin, destination, direction) {
    // Animate Header into page
    var header = destination.item.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0]
    var subheader = destination.item.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1]
    // var header = document.getElementsByClassName('header');
    var virgo = document.getElementById('virgo');

    console.log(destination)
    var textAnimation = anime({
      targets: [header, subheader],
      translateX: [0, 240],
      delay: 0,
      opacity : [0, 1],
      easing: 'easeInOutQuad',
      
    })
    var body = document.body
    console.log(body)
    body.addEventListener('mousemove', (e) => {
      //console.log(e)
      virgo.style.left = - e.clientX * .05 + 'px'
      virgo.style.top = - e.clientY * .05  + 50 + 'px'


    })

    // var subheaderAnimation = anime({
    //   targets: subheader,
    //   translateX: [0, 240],
    //   delay: 100,
    //   opacity : [0, 1],
    //   easing: 'easeInOutQuad',
      
    // })


    // var svgFadeIn = anime({
    //   targets : ,
    //   translateX: [0, 0],
    //   delay: 0,
    //   opacity : [0, 1],
    //   easing : 'easeInOutQuad'
    // })
  }


  
    render() {
      return (
        <ReactFullpage
          anchors={["JackDoyle", "AboutMe", "Projects", "Contact"]}
          licenseKey={process.env.FP_LICENSE}
          scrollOverflow={true}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                
                <div className="section sectionBackground">
 

                  <div className="contentDiv">
                  

                    
                    <Row>
                      <Col>
                        <div className='sectionHeader'>
                            <Header text='Jack Doyle'/>
                            <SubHeader line1='Recent Grad' line2='interested in' line3='Web Technologies'/>
                        </div>
                        {/* width="1110" height="814" viewBox="0 0 1480 1084" */}
                      </Col>
                      <Col>
                        <svg id='virgo' className='virgo'  viewBox="0 0 1480 1084" fill="none" xmlns="http://www.w3.org/2000/svg">
                            
                          <g id="virgo component">
                            <g id="porrima" className="porrima">
                              <path id="Ellipse 11" d="M648 527C648 538.598 638.598 548 627 548C615.402 548 606 538.598 606 527C606 515.402 615.402 506 627 506C638.598 506 648 515.402 648 527ZM610.686 527C610.686 536.01 617.99 543.314 627 543.314C636.01 543.314 643.314 536.01 643.314 527C643.314 517.99 636.01 510.686 627 510.686C617.99 510.686 610.686 517.99 610.686 527Z"/>
                              <ellipse  id="Ellipse 2" cx="627" cy="527" rx="12" ry="11" />
                            </g>
                            <g id="zaniah" className="zaniah">
                              <path id="Ellipse 11_2" d="M880 475C880 486.598 870.598 496 859 496C847.402 496 838 486.598 838 475C838 463.402 847.402 454 859 454C870.598 454 880 463.402 880 475ZM842.686 475C842.686 484.01 849.99 491.314 859 491.314C868.01 491.314 875.314 484.01 875.314 475C875.314 465.99 868.01 458.686 859 458.686C849.99 458.686 842.686 465.99 842.686 475Z"/>
                              <ellipse id="Ellipse 2_2" cx="859" cy="475" rx="12" ry="11" />
                            </g>
                            <g id="heze" className="heze">
                              <path id="Ellipse 11_3" d="M59 464C59 475.598 49.598 485 38 485C26.402 485 17 475.598 17 464C17 452.402 26.402 443 38 443C49.598 443 59 452.402 59 464ZM21.6862 464C21.6862 473.01 28.9901 480.314 38 480.314C47.0099 480.314 54.3138 473.01 54.3138 464C54.3138 454.99 47.0099 447.686 38 447.686C28.9901 447.686 21.6862 454.99 21.6862 464Z" />
                              <ellipse id="Ellipse 2_3" cx="38" cy="464" rx="12" ry="11" />
                            </g>
                            <g id="zavijava" className="zavijava">
                              <path id="Ellipse 11_4" d="M1179 432C1179 443.598 1169.6 453 1158 453C1146.4 453 1137 443.598 1137 432C1137 420.402 1146.4 411 1158 411C1169.6 411 1179 420.402 1179 432ZM1141.69 432C1141.69 441.01 1148.99 448.314 1158 448.314C1167.01 448.314 1174.31 441.01 1174.31 432C1174.31 422.99 1167.01 415.686 1158 415.686C1148.99 415.686 1141.69 422.99 1141.69 432Z" />
                              <ellipse id="Ellipse 2_4" cx="1158" cy="432" rx="12" ry="11" />
                            </g>
                            <g id="spica" className="spica">
                              <path id="Ellipse 11_5" d="M102 931C102 942.598 92.598 952 81 952C69.402 952 60 942.598 60 931C60 919.402 69.402 910 81 910C92.598 910 102 919.402 102 931ZM64.6862 931C64.6862 940.01 71.9901 947.314 81 947.314C90.0099 947.314 97.3138 940.01 97.3138 931C97.3138 921.99 90.0099 914.686 81 914.686C71.9901 914.686 64.6862 921.99 64.6862 931Z" />
                              <ellipse id="Ellipse 2_5" cx="81" cy="931" rx="12" ry="11" />
                            </g>
                            <g id="vindemiatrix" className="vindemiatrix">
                              <path id="Ellipse 11_6" d="M452 23C452 34.598 442.598 44 431 44C419.402 44 410 34.598 410 23C410 11.402 419.402 2 431 2C442.598 2 452 11.402 452 23ZM414.686 23C414.686 32.0099 421.99 39.3138 431 39.3138C440.01 39.3138 447.314 32.0099 447.314 23C447.314 13.9901 440.01 6.68619 431 6.68619C421.99 6.68619 414.686 13.9901 414.686 23Z" />
                              <ellipse id="Ellipse 2_6" cx="431" cy="23" rx="12" ry="11" />
                            </g>
                            <g id="theta" className="theta">
                              <path id="Ellipse 11_7" d="M331 673C331 684.598 321.598 694 310 694C298.402 694 289 684.598 289 673C289 661.402 298.402 652 310 652C321.598 652 331 661.402 331 673ZM293.686 673C293.686 682.01 300.99 689.314 310 689.314C319.01 689.314 326.314 682.01 326.314 673C326.314 663.99 319.01 656.686 310 656.686C300.99 656.686 293.686 663.99 293.686 673Z" />
                              <ellipse id="Ellipse 2_7" cx="310" cy="673" rx="12" ry="11" />
                            </g>
                            <g id="auva" className="auva">
                              <path id="Ellipse 11_8" d="M509 300C509 311.598 499.598 321 488 321C476.402 321 467 311.598 467 300C467 288.402 476.402 279 488 279C499.598 279 509 288.402 509 300ZM471.686 300C471.686 309.01 478.99 316.314 488 316.314C497.01 316.314 504.314 309.01 504.314 300C504.314 290.99 497.01 283.686 488 283.686C478.99 283.686 471.686 290.99 471.686 300Z" />
                              <ellipse id="Ellipse 2_8" cx="488" cy="300" rx="12" ry="11" />
                            </g>
                            <g id="lines">
                              <line id="heze-theta" x1="57.8041" y1="478.63" x2="290.63" y2="657.196" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7"/>
                              <line id="spica-theta" x1="101.784" y1="913.18" x2="292.18" y2="691.216" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7"/>
                              <path id="theta-porrima" d="M331 662C437.613 613.575 497.387 586.425 604 538" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7"/>
                              <path id="porrima-zaniah" d="M651 518C722.466 503.16 762.534 494.84 834 480" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7"/>
                              <path id="zaniah-zavijava" d="M884 471C981.241 457.722 1035.76 450.278 1133 437" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7"/>
                              <line id="porrima-auva" x1="502.754" y1="321.643" x2="615.643" y2="503.246" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7"/>
                              <line id="auva-vindemiatrix" x1="438.339" y1="49.5905" x2="481.59" y2="276.661" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7"/>
                            </g>
                          </g>
                        </svg>


                      </Col>
                    </Row>
                    <Row>  
                      <Col>
                      <div style={{textAlign: 'center'}}>
                       
                      <svg  xmlns="http://www.w3.org/2000/svg" width="64" height="64" class="bi bi-mouse-fill" viewBox="0 0 16 16">
                        <path className="scroller" onClick={() => fullpageApi.moveSectionDown()} d="M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V5zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z"/>
                      </svg>
                      
                        
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div style={{textAlign: 'center'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#29a19c" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                          <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                      
                        </div>
                      </Col>
                    </Row>
                    
                    
                    
                    
                  </div>
                </div>
                <div className="section  sectionBackground">
                  <div className="contentDiv">
                    <Row>
                      <Col>
                      <div className='sectionHeader'>
                        <Header id='header' text='About Me'/>
                        <SubHeader line1='Who am I'/>
                      </div>
                      </Col>
                    </Row>
                    
                  </div>
                  <div><p>Footer</p></div>
                </div>
                <div className="section  sectionBackground" >
                  <div className="contentDiv">
                  <Row>
                      <Col>
                        <div className='sectionHeader'>
                            <Header text='Projects'/>
                            <SubHeader line1="What I've worked on"/>
                        </div>                          
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="section  sectionBackground">
                  <div className="contentDiv">
                  <Row>
                      <Col>
                        <div className='sectionHeader'>
                          <Header text='Contact'/>
                          <SubHeader line1='Get in touch'/>
                        </div>  
                      </Col>
                    </Row>
                    
                  </div>
                </div>
              </div>
            );
          }}
        />
      );
    }
  }

  export default FullPage;



 




