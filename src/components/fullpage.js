import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../components/header'
import anime from 'animejs/lib/anime.es.js';



class FullPage extends React.Component {

  onLeave(origin, destination, direction) {
    // Reset Header opactiy when leaving slide so animation can play again
    var header = origin.item.childNodes[0].childNodes[0].childNodes[0]
    header.style.opacity = "0";
  }
  afterLoad(origin, destination, direction) {
    // Animate Header into page
    var header = destination.item.childNodes[0].childNodes[0].childNodes[0]
    
    var textAnimation = anime({
      targets: header,
      translateX: [0, 240],
      delay: 0,
      opacity : [0, 1],
      easing: 'easeInOutQuad',
      
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
                <div className="section">
                  <div className="contentDiv">
                    <Header text='Jack Doyle'/>
                  </div>
                </div>
                <div className="section">
                  <div className="contentDiv">
                    <Header text='About Me'/>
                  </div>
                  <div><p>Footer</p></div>
                </div>
                <div className="section" >
                  <div className="contentDiv">
                    <Header text='Projects'/>
                  </div>
                </div>
                <div className="section">
                  <div className="contentDiv">
                    <Header text='Contact'/>
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



 




