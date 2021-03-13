import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../components/header'
import anime from 'animejs/lib/anime.es.js';



class FullPage extends React.Component {

  onLeave(origin, destination, direction) {
    
    //textAnimation.restart()

  }
  afterLoad(origin, destination, direction) {
      console.log(destination.item.childNodes[0]);
    var header = destination.item.childNodes[0].childNodes[0]
    //console.log(line)
        
    var textAnimation = anime({
      targets: header,
      translateX: 240,
      delay: 500,
      opacity : [0, 1],
      easing: 'easeInOutQuad',
      
    })


      //textAnimation.restart()
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
                    <Header id='1' text='Jack Doyle'/>
                </div>
                <div className="section">
                    <Header text='About Me'/>
                </div>
                <div className="section" >
                        <Header text='Projects'/>
                </div>
                <div className="section">
                        <Header text='Contact'/>
                </div>
              </div>
            );
          }}
        />
      );
    }
  }

  export default FullPage;



 




