import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../components/header'
import anime from 'animejs/lib/anime.es.js';


class FullPage extends React.Component {
    onLeave(origin, destination, direction) {
     
        anime({
            targets: 'h1',
            translateX: -240,
            delay: 1000,
            opacity:  0,
            easing: 'easeInOutCirc',
            direction: 'reverse'
    
        })

    }
    afterLoad(origin, destination, direction) {
        console.log(destination);
        anime({
            targets: 'h1',
            translateX: 240,
            delay: 1000,
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
                    <Header text='Jack Doyle'/>
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



 




