import React from "react"
import { Hero } from '../components/Hero';
import { OurServices } from '../components/OurServices';
import { TheTeam } from '../components/TheTeam';
import { PhotoGallery } from '../components/Gallery';

const SliceZone = ({ body }) => {
  console.log(body)
  return (
    <div>
      {body.map((bodyContent, i) => {
        if (bodyContent.type === "service") {
          return (
            <OurServices
              key={i}
              cards={bodyContent.fields}
              title={bodyContent.primary.service_section_header}
              ctaImage={bodyContent.primary.service_cta_image}
              ctaTitle={bodyContent.primary.service_cta_phrase}
            />
          )
        } else if(bodyContent.type === 'photo_galllery_'){
          return <PhotoGallery key= {i} images={bodyContent.fields} title={bodyContent.primary.gallery_title}/>
        } else if(bodyContent.type ==='about'){
          return(
            <TheTeam 
              key={i} 
              teamMembers={bodyContent.fields} 
              sectionTitle={bodyContent.primary.section_title}
              sectionSubTitle={bodyContent.primary.meet_the_people}
              companyDescription={bodyContent.primary.description_company_culture}
            />
            )
        }
        else {
          return null
        }
      })}
    </div>
  )
}

export default SliceZone
