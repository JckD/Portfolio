import React from "react"
import Image from "react-bootstrap/Image"
import github from "../images/github.svg"
import { graphql, useStaticQuery } from 'gatsby';
import { Overlay, OverlayTrigger } from "react-bootstrap";
import Tooltip from 'react-bootstrap/Tooltip'

const ProjectCard = () => {

  const data = useStaticQuery(graphql`
    query ProjectCardQuery {
      projects: allAirtable(
        filter: { table: { eq: "projects" }}
        
      ) {
        nodes {
          data {
            Title
            description
            githublink
            image {
              raw {
                url
              }
            }
            icons {
              raw {
                url
                filename
              }
              localFiles {
                name
              }
            }
          }
          children {
            id
          }
        }
      }
    } 
  `);
    //console.log(data.projects.nodes[1].data.icons)

 

  return (
    <>
    {data.projects.nodes.map((item, i)  =>(
      <div className='projectCard'>
        <Image src={item.data.image.raw[0].url} className='projectCardImage'/>
        <hr/>
        <h5>{item.data.Title}</h5>
        <p>{item.data.description}</p>
        
        <div className="projectCardFooter">
         
            <a href={item.data.githublink} target="_blank">
             <Image  src={github} style={{width : '6%'}} />
          </a>
          {/* {icon.filename}.split(".")[0] */}
           {item.data.icons.raw.map((icon, j) => ( 
             <OverlayTrigger placement="bottom"  overlay={<Tooltip id="iconToolTip">{item.data.icons.localFiles[j].name}</Tooltip>}>
               <Image src={icon.url} className="projectCardIcon"/>
             </OverlayTrigger>   
          ))}
        </div>
      </div> 
    ))}
    </>
  ); 
}

export default ProjectCard;