import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../components/header'
import anime from 'animejs/lib/anime.es.js';


class FullPage extends React.Component {
    onLeave(origin, destination, direction) {
      console.log("Leaving section " + origin.index);
    }
    afterLoad(origin, destination, direction) {
      console.log("After load: " + destination.index);
    }
    render() {
      return (
        <ReactFullpage
          anchors={["JackDoyle", "AboutMe", "Projects", "Contact"]}
          
          scrollOverflow={true}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section active">
                    <Header text='Jack Doyle'/>
                             {/* <Button  onClick={() => fullpageApi.moveSectionDown()}>
                               Click me to move down
                            </Button> */}
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



// export default function FullPage() {

    
//     return ( 
//         <ReactFullpage

//             //full page options

//             licenseKey = {process.env.FP_LICENSE}
//             scrollingSpeed = {1000}
//             anchors={["JackDoyle", "AboutMe", "Projects", "Contact"]}
//             onLeave={(console.log('onleave'))}
//             afterLoad={(console.log('cum'))}

//             render={({ state, fullpageApi }) => {
//                 return (
//                     <ReactFullpage.Wrapper>
//                         
//                     </ReactFullpage.Wrapper>
//                 );
//             }}
//         />
//     )
    
// };

// function onLeave(origin, destination, direction) {
//     console.log("Leaving section " + origin.index);
// }
// function afterLoad(origin, destination, direction) {
// console.log("After load: " + destination.index);
// }



 
// var animation = anime({
//     targets: 'h1',
//     translateX: 20,
//     delay: 1000,
//     easing: 'easeInOutCirc',
   
// })



