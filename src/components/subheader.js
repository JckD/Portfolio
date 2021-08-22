import React from "react"

export default function SubHeader(props) {

  if (props.line3){
    return <><h2>{props.line1}<br/>{props.line2}<br/>{props.line3}</h2></>
  } 

  else if (props.line2){
    return <><h2>{props.line1}<br/>{props.line2}</h2></>
  } 

  return (
    <>
        
      <h2>{props.line1}</h2>
      
    
    </>
  ) 

}