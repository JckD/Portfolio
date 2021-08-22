import React from "react"
import Image from "react-bootstrap/Image"
import github from "../images/github.svg"
import { graphql, StaticQuery, useStaticQuery } from 'gatsby';
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from 'react-bootstrap/Tooltip'
import { render } from "react-dom";

export default function ProductCard() {

    return (
      <StaticQuery
        querr = { graphql`
        {
          allAirtable(filter: {table: {eq: "projects"}}) {
            edges {
              node {
                data {
                  image {
                    raw {
                      url
                    }
                  }
                  Title
                  description
                  githublink
                  icons {
                    raw {
                      url
                    }
                    localFiles {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      ` }
     render= { data => (

        <>
          {data.allAirtable.edges.map(({ node }, i)  =>(
            <div className='projectCard'>
              <Image src={node.data.image.raw[0].url} className='projectCardImage'/>
              <hr/>
              <h5>{node.data.Title}</h5>
              <p>{node.data.description}</p>
    
              <div className="projectCardFooter">
    
                  <a href={node.data.githublink} target="_blank" rel="noreferrer">
                  <Image  src={github} style={{width : '6%'}} />
                </a>
            
                {node.data.icons.raw.map((icon, j) => (
                  <OverlayTrigger placement="bottom"  overlay={<Tooltip id="iconToolTip">{node.data.icons.localFiles[j].name}</Tooltip>}>
                    <Image src={icon.url} className="projectCardIcon"/>
                  </OverlayTrigger>
                ))}
              </div>
            </div>

          ))}
        </>
      )}
      />
    )
}

