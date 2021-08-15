import React from 'react';
import { OurServices } from './OurServices';
import { TheTeam } from './TheTeam';
import { PhotoGallery } from './Gallery';
import { FAQ } from './FAQ';

const SliceZone = ({ body }) => {
  return (
    <div>
      {body.map((bodyContent) => {
        if (bodyContent.type === 'service') {
          return (
            <OurServices
              key={bodyContent.id}
              cards={bodyContent.fields}
              title={bodyContent.primary.service_section_header}
              ctaImage={bodyContent.primary.service_cta_image}
              ctaTitle={bodyContent.primary.service_cta_phrase}
            />
          );
        }
        if (bodyContent.type === 'photo_galllery_') {
          return (
            <PhotoGallery key={bodyContent.id} images={bodyContent.fields} title={bodyContent.primary.gallery_title} />
          );
        }
        if (bodyContent.type === 'faq_section') {
          return <FAQ key={bodyContent.id} title={bodyContent.primary.faq_title} allFAQ={bodyContent.fields} />;
        }
        if (bodyContent.type === 'about') {
          return (
            <TheTeam
              key={bodyContent.id}
              teamMembers={bodyContent.fields}
              sectionTitle={bodyContent.primary.section_title}
              sectionSubTitle={bodyContent.primary.meet_the_people}
              companyDescription={bodyContent.primary.description_company_culture}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default SliceZone;
