import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../components/header'


export default function FullPage() {
    return ( 
        <ReactFullpage

            //full page options
            licenseKey = {process.env.FP_LICENSE}
            scrollingSpeed = {1000}

            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
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
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    )};

