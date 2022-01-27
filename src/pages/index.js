import React from "react"
import FullPage from "../components/fullpage"
import anime from "animejs/lib/anime.es.js"
import { Helmet } from "react-helmet"


export default function Home() {


 
    //let curve = document.getElementById('curve')
    //document.title = 'Jack Doyle | Portfolio'
    //curve.style.backgroundImage = "url('data:image/svg+xml,%3Csvg%20id%3D%22visual%22%20viewBox%3D%220%200%20960%20540%22%20width%3D%22960%22%20height%3D%22540%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%3E%0A%3Crect%20width%3D%22960%22%20height%3D%22540%22%20fill%3D%22%23393E46%22%2F%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%20%20%20%20%20%20%20%20%23a%20%7B%20animation%3A%20x%20.5s%20ease%20alternate%2014%3B%20%7D%0A%0A%20%20%20%20%20%20%20%20%40keyframes%20x%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20from%20%7B%20fill%3A%20%23000%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20to%20%7B%20fill%3A%20%23fff%3B%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%0A%3Cg%3E%0A%3Cpath%20id%3D%22a%22%20class%3D%22.morph%22%0A%20d%3D%22M390%200L398.2%2022.5C406.3%2045%20422.7%2090%20413.2%20135C403.7%20180%20368.3%20225%20370.7%20270C373%20315%20413%20360%20417.2%20405C421.3%20450%20389.7%20495%20373.8%20517.5L358%20540L0%20540L0%20517.5C0%20495%200%20450%200%20405C0%20360%200%20315%200%20270C0%20225%200%20180%200%20135C0%2090%200%2045%200%2022.5L0%200Z%22%20fill%3D%22%23222831%22%3E%3C%2Fpath%3E%0A%3C%2Fg%3E%0A%0A%3Cpath%0A%20d%20%3D%20%22M390%200L398.2%2022.5C406.3%2045%20422.7%2090%20413.2%20135C403.7%20180%20368.3%20225%20370.7%20270C373%20315%20413%20360%20417.2%20405C421.3%20450%20389.7%20495%20373.8%20517.5L358%20540L0%20540L0%20517.5C0%20495%200%20450%200%20405C0%20360%200%20315%200%20270C0%20225%200%20180%200%20135C0%2090%200%2045%200%2022.5L0%200Z%22%20fill%20%3D%20%22%23222831%22%3E%0A%3C%2Fpath%3E%0A%0A%0A%3C%2Fsvg%3E"
    let shapes = [
      {
        d: "M452.844 540L442.18 517.5C431.647 495 410.321 450 422.674 405C435.028 360 481.062 315 477.941 270C474.95 225 422.934 180 417.473 135C412.141 90 453.234 45 473.91 22.5L494.456 0L-0.5 0V22.5C-0.5 45 -0.5 5.5 -0.5 50.5C-0.5 95.5 -0.5 111.5 -0.5 156.5C-0.5 201.5 -0.5 211 -0.5 256C-0.5 301 -0.5 332 -0.5 354.5V540L452.844 540Z",
        fill : "#222831"
      },
      {
        d: "M390 0L398.2 22.5C406.3 45 422.7 90 413.2 135C403.7 180 368.3 225 370.7 270C373 315 413 360 417.2 405C421.3 450 389.7 495 373.8 517.5L358 540L0 540L0 517.5C0 495 0 450 0 405C0 360 0 315 0 270C0 225 0 180 0 135C0 90 0 45 0 22.5L0 0Z",
        fill : "#222831"
      }
    ]

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
  

  return (

    <div className="bg" id ="curve">
      <Helmet>
          <meta charSet="utf-8"/>
          <title>Jack Doyle | Portfolio</title>
          <meta name="description" content="About me and what I'm working on"/>
      </Helmet>
      <FullPage />
    </div>
      
   
  )}

