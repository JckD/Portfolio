import React from "react"
import ReactFullpage from '@fullpage/react-fullpage';
export default function Menu(props) {


  return (
    <div
        className="menu"
        style={{
          position: 'fixed',
          top: 0,
          
          zIndex: 100,
        }}
      >
        <ul className="actions">
          <li>
            <button onClick={() => this.handleAddSection()}>Start</button>
            <button onClick={() => this.handleRemoveSection()}>
              About
            </button>
            <button onClick={() => this.handleChangeColors()}>
              Projects
            </button>
            <button onClick={() => this.moveSectionDown()}>
              Contact
            </button>
          </li>
        </ul>
      </div>
  ) 

}