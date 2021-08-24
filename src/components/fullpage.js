import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../components/header'
import Particles from 'react-particles-js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubHeader from "../components/subheader";
import ProjectCard from "../components/projectCard";
import anime from "animejs/lib/anime.es.js"

class FullPage extends React.Component {

 


  onLeave(origin, destination, direction) {
    // Reset Header opactiy when leaving slide so animation can play again
    var header = destination.item.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0]
    console.log(header)
    //var header = document.getElementById('header')
    header.style.opacity = "0";
    

    var subheader = destination.item.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1]
    console.log(subheader)
    subheader.style.opacity = "0";

    // var svg = document.getElementById('virgo');
    // svg.style.opacity = "0";

    var aboutMe = document.getElementById('aboutMeDiv')
    aboutMe.style.opacity = "0";


    var cardDeck = document.getElementById('cardDeck')
    cardDeck.style.opacity = "0";

    var contactDiv = document.getElementById('contactCard')
    contactDiv.style.opacity = "0";


  }

  afterLoad(origin, destination, direction) {
    // Animate Header into page
    var header = destination.item.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0]

    var subheader = destination.item.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1]

    // var header = document.getElementsByClassName('header');
    var cardDeck = document.getElementById('cardDeck')
    var virgo = document.getElementById('virgo');
    var aboutMe = document.getElementById('aboutMeDiv')
    var contactDiv = document.getElementById('contactCard')

   // console.log(destination.item.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1])

    //document.body.style.backgroundImage = "url('data:image/svg+xml,%3Csvg%20id%3D%22visual%22%20viewBox%3D%220%200%20960%20540%22%20width%3D%22960%22%20height%3D%22540%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%3E%0A%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%23393E46%22%2F%3E%0A%3Cg%3E%0A%3Cpath%20class%3D%22.morph%22%0A%20d%3D%22M390%200L398.2%2022.5C406.3%2045%20422.7%2090%20413.2%20135C403.7%20180%20368.3%20225%20370.7%20270C373%20315%20413%20360%20417.2%20405C421.3%20450%20389.7%20495%20373.8%20517.5L358%20540L0%20540L0%20517.5C0%20495%200%20450%200%20405C0%20360%200%20315%200%20270C0%20225%200%20180%200%20135C0%2090%200%2045%200%2022.5L0%200Z%22%20fill%3D%22%23222831%22%3E%3C%2Fpath%3E%0A%3C%2Fg%3E%0A%0A%0A%0A%3C%2Fsvg%3E')"
    //background.style.backgroundImage = 
    //background animation
    let curve = document.getElementById('curve')
  
    //curve.style.backgroundImage = "url('data:image/svg+xml,%3Csvg%20id%3D%22visual%22%20viewBox%3D%220%200%20960%20540%22%20width%3D%22960%22%20height%3D%22540%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%3E%0A%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%23393E46%22%2F%3E%0A%3Cg%3E%0A%3Cpath%20class%3D%22.morph%22%0A%20d%3D%22M390%200L398.2%2022.5C406.3%2045%20422.7%2090%20413.2%20135C403.7%20180%20368.3%20225%20370.7%20270C373%20315%20413%20360%20417.2%20405C421.3%20450%20389.7%20495%20373.8%20517.5L358%20540L0%20540L0%20517.5C0%20495%200%20450%200%20405C0%20360%200%20315%200%20270C0%20225%200%20180%200%20135C0%2090%200%2045%200%2022.5L0%200Z%22%20fill%3D%22%23222831%22%3E%3C%2Fpath%3E%0A%3C%2Fg%3E%0A%0A%0A%0A%3C%2Fsvg%3E')"
    // let shapes = [
    //   {
    //     d: "M452.844 540L442.18 517.5C431.647 495 410.321 450 422.674 405C435.028 360 481.062 315 477.941 270C474.95 225 422.934 180 417.473 135C412.141 90 453.234 45 473.91 22.5L494.456 0L-0.5 0V22.5C-0.5 45 -0.5 5.5 -0.5 50.5C-0.5 95.5 -0.5 111.5 -0.5 156.5C-0.5 201.5 -0.5 211 -0.5 256C-0.5 301 -0.5 332 -0.5 354.5V540L452.844 540Z",
    //     fill : "#222831"
    //   },
    //   {
    //     d: "M390 0L398.2 22.5C406.3 45 422.7 90 413.2 135C403.7 180 368.3 225 370.7 270C373 315 413 360 417.2 405C421.3 450 389.7 495 373.8 517.5L358 540L0 540L0 517.5C0 495 0 450 0 405C0 360 0 315 0 270C0 225 0 180 0 135C0 90 0 45 0 22.5L0 0Z",
    //     fill : "#222831"
    //   }
    // ]

    // var morph = anime({
    //   targets: '.morph',
    //   d: [
    //     {value: shapes[0].d},
    //     {value: shapes[1].d}
    //   ],
    //   duration :5000,
    //   direction : 'alternate',
    //   autoplay: true,
    //   easing: 'linear',
    //   elasticity : 100,
    //   loop: true
    // })

    var textAnimation = anime({
      targets: [header, subheader],
      //translateX: [0, '8%'],
      delay: 0,
      opacity: [0, 1],
      easing: 'easeInOutQuad',

    })

    var divAnimation = anime({
      targets: [aboutMe, cardDeck, contactDiv],
      //translateX: ['10%', 0],
      delay: 0.2,
      opacity: [0, 1],
      easing: 'easeInOutQuad'
    })

    // var cardDeckAnimation = anime({
    //   targets: cardDeck,
    //   translateX: [0, 0],
    //   delay: 0,
    //   opacity: [0, 1],
    //   easing: 'easInOutQuad',
    // })


    var body = document.body
    //console.log(body)
    body.addEventListener('mousemove', (e) => {
      //console.log(e)
      virgo.style.left = - e.clientX * .02 + 'px'
      virgo.style.top = - e.clientY * .02 + 50 + 'px'


    })



    // var subheaderAnimation = anime({
    //   targets: subheader,
    //   translateX: [0, 240],
    //   delay: 100,
    //   opacity : [0, 1],
    //   easing: 'easeInOutQuad',

    // })


    var svgFadeIn = anime({
      targets: virgo,
      translateX: [0, 0],
      delay: 0,
      opacity: [0, 1],
      easing: 'easeInOutQuad'
    })
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
                    <Col sm={true} >
                      <div className="sectionHeader">
                        <div>
                          <Header id="header" text='Jack Doyle' />
                          <SubHeader line1='Recent Grad' line2='interested in' line3='Web technologies' />
                        </div>
                      </div>

                      {/* width="1110" height="814" viewBox="0 0 1480 1084" */}
                    </Col>
                    <Col sm={true} >
                      <div className="starsDiv">
                        <Particles className="particles"
                          params={{
                            "particles": {
                              "number": {
                                "value": 60,
                                "density": {
                                  "enable": true,
                                  "value_area": 100
                                }
                              },
                              "line_linked": {
                                "enable": false,
                                "opacity": 0.02
                              },
                              "move": {
                                "direction": "random",
                                "speed": 0.30
                              },
                              "size": {
                                "value": 2
                              },
                              "opacity": {
                                "anim": {
                                  "enable": true,
                                  "speed": 1,
                                  "opacity_min": 0.05
                                }
                              }
                            },
                            "interactivity": {
                              "events": {
                                "onclick": {
                                  "enable": true,
                                  "mode": "push"
                                }
                              },
                              "modes": {
                                "push": {
                                  "particles_nb": 1
                                }
                              }
                            },
                            "retina_detect": true
                          }}
                        />

                        {/* <svg id='virgo' className='virgo' viewBox="0 0 1480 1084" fill="none" xmlns="http://www.w3.org/2000/svg">

                          <g id="virgo component">
                            <g id="porrima" className="porrima">
                              <path id="Ellipse 11" d="M648 527C648 538.598 638.598 548 627 548C615.402 548 606 538.598 606 527C606 515.402 615.402 506 627 506C638.598 506 648 515.402 648 527ZM610.686 527C610.686 536.01 617.99 543.314 627 543.314C636.01 543.314 643.314 536.01 643.314 527C643.314 517.99 636.01 510.686 627 510.686C617.99 510.686 610.686 517.99 610.686 527Z" />
                              <ellipse id="Ellipse 2" cx="627" cy="527" rx="12" ry="11" />
                            </g>
                            <g id="zaniah" className="zaniah">
                              <path id="Ellipse 11_2" d="M880 475C880 486.598 870.598 496 859 496C847.402 496 838 486.598 838 475C838 463.402 847.402 454 859 454C870.598 454 880 463.402 880 475ZM842.686 475C842.686 484.01 849.99 491.314 859 491.314C868.01 491.314 875.314 484.01 875.314 475C875.314 465.99 868.01 458.686 859 458.686C849.99 458.686 842.686 465.99 842.686 475Z" />
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
                              <line id="heze-theta" x1="57.8041" y1="478.63" x2="290.63" y2="657.196" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7" />
                              <line id="spica-theta" x1="101.784" y1="913.18" x2="292.18" y2="691.216" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7" />
                              <path id="theta-porrima" d="M331 662C437.613 613.575 497.387 586.425 604 538" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7" />
                              <path id="porrima-zaniah" d="M651 518C722.466 503.16 762.534 494.84 834 480" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7" />
                              <path id="zaniah-zavijava" d="M884 471C981.241 457.722 1035.76 450.278 1133 437" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7" />
                              <line id="porrima-auva" x1="502.754" y1="321.643" x2="615.643" y2="503.246" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7" />
                              <line id="auva-vindemiatrix" x1="438.339" y1="49.5905" x2="481.59" y2="276.661" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7" />
                            </g>
                          </g>
                        </svg> */}
                        <svg  id='virgo' className='virgo' viewBox="0 0 1480 1084"  fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M720.6 570.868C720.6 583.48 709.863 593.703 696.618 593.703C683.373 593.703 672.636 583.48 672.636 570.868C672.636 558.257 683.373 548.034 696.618 548.034C709.863 548.034 720.6 558.257 720.6 570.868ZM677.988 570.868C677.988 580.665 686.329 588.608 696.618 588.608C706.907 588.608 715.248 580.665 715.248 570.868C715.248 561.071 706.907 553.129 696.618 553.129C686.329 553.129 677.988 561.071 677.988 570.868Z" fill="white"/>
                          <ellipse cx="696.618" cy="570.868" rx="13.704" ry="11.9611" fill="white"/>
                          <path d="M985.543 514.325C985.543 526.937 974.806 537.16 961.561 537.16C948.316 537.16 937.579 526.937 937.579 514.325C937.579 501.714 948.316 491.491 961.561 491.491C974.806 491.491 985.543 501.714 985.543 514.325ZM942.931 514.325C942.931 524.122 951.272 532.064 961.561 532.064C971.85 532.064 980.191 524.122 980.191 514.325C980.191 504.528 971.85 496.586 961.561 496.586C951.272 496.586 942.931 504.528 942.931 514.325Z" fill="white"/>
                          <ellipse cx="961.561" cy="514.325" rx="13.704" ry="11.9611" fill="white"/>
                          <path d="M47.9639 502.364C47.9639 514.975 37.2268 525.199 23.9819 525.199C10.7371 525.199 0 514.975 0 502.364C0 489.753 10.7371 479.529 23.9819 479.529C37.2268 479.529 47.9639 489.753 47.9639 502.364ZM5.35161 502.364C5.35161 512.161 13.6927 520.103 23.9819 520.103C34.2712 520.103 42.6122 512.161 42.6122 502.364C42.6122 492.567 34.2712 484.625 23.9819 484.625C13.6927 484.625 5.35161 492.567 5.35161 502.364Z" fill="white"/>
                          <ellipse cx="23.9819" cy="502.364" rx="13.704" ry="11.9611" fill="white"/>
                          <path d="M1327 467.568C1327 480.18 1316.26 490.403 1303.02 490.403C1289.77 490.403 1279.04 480.18 1279.04 467.568C1279.04 454.957 1289.77 444.734 1303.02 444.734C1316.26 444.734 1327 454.957 1327 467.568ZM1284.39 467.568C1284.39 477.365 1292.73 485.308 1303.02 485.308C1313.31 485.308 1321.65 477.365 1321.65 467.568C1321.65 457.771 1313.31 449.829 1303.02 449.829C1292.73 449.829 1284.39 457.771 1284.39 467.568Z" fill="white"/>
                          <ellipse cx="1303.02" cy="467.568" rx="13.704" ry="11.9611" fill="white"/>
                          <path d="M97.0697 1010.17C97.0697 1022.78 86.3326 1033 73.0878 1033C59.8429 1033 49.1058 1022.78 49.1058 1010.17C49.1058 997.554 59.8429 987.331 73.0878 987.331C86.3326 987.331 97.0697 997.554 97.0697 1010.17ZM54.4574 1010.17C54.4574 1019.96 62.7985 1027.9 73.0878 1027.9C83.377 1027.9 91.7181 1019.96 91.7181 1010.17C91.7181 1000.37 83.377 992.426 73.0878 992.426C62.7985 992.426 54.4574 1000.37 54.4574 1010.17Z" fill="white"/>
                          <ellipse cx="73.0877" cy="1010.17" rx="13.704" ry="11.9611" fill="white"/>
                          <path d="M496.769 22.8347C496.769 35.446 486.031 45.6695 472.787 45.6695C459.542 45.6695 448.805 35.446 448.805 22.8347C448.805 10.2235 459.542 0 472.787 0C486.031 0 496.769 10.2235 496.769 22.8347ZM454.156 22.8347C454.156 32.6318 462.497 40.5739 472.787 40.5739C483.076 40.5739 491.417 32.6318 491.417 22.8347C491.417 13.0377 483.076 5.09561 472.787 5.09561C462.497 5.09561 454.156 13.0377 454.156 22.8347Z" fill="white"/>
                          <ellipse cx="472.787" cy="22.8347" rx="13.704" ry="11.9611" fill="white"/>
                          <path d="M358.587 729.624C358.587 742.236 347.85 752.459 334.605 752.459C321.36 752.459 310.623 742.236 310.623 729.624C310.623 717.013 321.36 706.789 334.605 706.789C347.85 706.789 358.587 717.013 358.587 729.624ZM315.975 729.624C315.975 739.421 324.316 747.363 334.605 747.363C344.894 747.363 353.235 739.421 353.235 729.624C353.235 719.827 344.894 711.885 334.605 711.885C324.316 711.885 315.975 719.827 315.975 729.624Z" fill="white"/>
                          <ellipse cx="334.605" cy="729.624" rx="13.704" ry="11.9611" fill="white"/>
                          <path d="M561.862 324.036C561.862 336.647 551.125 346.871 537.88 346.871C524.636 346.871 513.898 336.647 513.898 324.036C513.898 311.425 524.636 301.201 537.88 301.201C551.125 301.201 561.862 311.425 561.862 324.036ZM519.25 324.036C519.25 333.833 527.591 341.775 537.88 341.775C548.17 341.775 556.511 333.833 556.511 324.036C556.511 314.239 548.17 306.297 537.88 306.297C527.591 306.297 519.25 314.239 519.25 324.036Z" fill="white"/>
                          <ellipse cx="537.88" cy="324.036" rx="13.704" ry="11.9611" fill="white"/>
                          <line x1="2" y1="-2" x2="331.724" y2="-2" transform="matrix(0.807586 0.589749 -0.627294 0.778783 43.3959 518.675)" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7"/>
                          <line x1="2" y1="-2" x2="327.296" y2="-2" transform="matrix(0.669322 -0.742972 0.774502 0.632571 97.0697 993.855)" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7"/>
                          <path d="M358.587 717.663C480.339 665.007 548.6 635.485 670.352 582.83" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7"/>
                          <path d="M724.026 561.082C805.64 544.946 851.397 535.899 933.011 519.762" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7"/>
                          <path d="M990.111 509.976C1101.16 495.538 1163.42 487.443 1274.47 473.005" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7"/>
                          <line x1="2" y1="-2" x2="238.238" y2="-2" transform="matrix(0.546666 0.837351 -0.860558 0.509352 551.584 346.871)" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7"/>
                          <line x1="2" y1="-2" x2="254.159" y2="-2" transform="matrix(0.196159 0.980572 -0.983948 0.178453 478.497 50.019)" stroke="white" stroke-width="4" stroke-linecap="square" stroke-dasharray="5 7"/>
                          </svg>

                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div className="heroFooter">

                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" class="bi bi-mouse-fill" viewBox="0 0 16 16">
                          <path className="scroller" onClick={() => fullpageApi.moveSectionDown()} d="M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V5zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z" />
                        </svg>


                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div style={{ textAlign: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#29a19c" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                          <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>

                      </div>
                    </Col>
                  </Row>

                </div>
              </div>
              <div className="section sectionBackground">
                <div className="contentDiv">
                  <Row>
                    <Col sm={true}>
                      <div className="sectionHeader">
                        <div>
                          <Header id='header' text='About Me' />
                          <SubHeader line1='Who am I' />
                        </div>
                        
                      </div>


                    </Col>
                    <Col sm={true}>
                      <div id="aboutMeDiv" className="contentCard" >
                        <h3>Education</h3>
                        <p>
                          I am a recent graduate from BSc Computre Science (Infrastucture)
                          in the <a className="link" href='https://www.tudublin.ie/study/undergraduate/courses/computer-science-infrastructure-tu857/'>Technological University of Dublin</a> achieving a 2.1 award.
                          I really enjoyed opportunity to get an outlook in different technologies and learn about them in a sctructured way.
                        </p>
                        <p>
                          I attended Christian Brothers College in Monkstown for Secondary level.
                        </p>
                        <hr />
                        <h3>Skills</h3>
                        <p>
                          I like to be a very active participant in team projects in University and in the workplace.
                          Happy to take responsibliity and take lead on group work. Effective written  communication and presentation skills.
                        </p>
                        <p>
                          I am currently most interested by the Web and Web Tecnologies. I explore this by taking
                          on my own personal projects in my free time, check them out in the next <a className="link" onClick={() => fullpageApi.moveSectionDown()}>section</a>.
                        </p>
                        <hr />
                        <h3>Interests</h3>
                        <p>
                          I really enjoyed my time with the Games Society in university.
                          I put a lot of work into orgaising events with the committee there that required commuinication
                          among a large team of people.
                        </p>
                        <p>
                          I am deeply passionate about music listening to a large variety of genres and
                          playing traditional Irish music on the Tenor Banjo and Mandolin.
                        </p>
                      </div>
                    </Col>
                  </Row>

                </div>

              </div>
              <div className="section  sectionBackground" >
                <div className="contentDiv">
                  <Row>
                    <Col sm={true}>
                      <div className="sectionHeader">
                        <div>
                          <Header id='header' text='Projects' />
                          <SubHeader line1="What I've worked on" />
                        </div>
                        
                      </div>

                    </Col>
                    <Col sm={true}>
                      
                        <div className='cardDeck' id='cardDeck'>
                          <ProjectCard />
                        </div>
                      
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="section  sectionBackground">
                <div className="contentDiv">
                  <Row>
                    <Col sm={true}>
                      <div className="sectionHeader">
                         <div>
                           <Header text='Contact' />
                            <SubHeader line1='Get in touch' />
                        </div>
                        
                      </div>
                    </Col>
                    <Col sm={true}>
                      <div id="contactCard" style={{ height: 500 }}>
                        <div className="contactCard">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#29a19c" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                          </svg>
                          <a id="email" className="contact">jackp.doyle1@gmail.com</a>
                          <hr />
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#29a19c" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                          <a id="linkedIn" className="contact" href="https://www.linkedin.com/in/jack-p-doyle/">LinkedIn</a>
                        </div>
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








