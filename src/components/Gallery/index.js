import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Container } from '../Container';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
const Header = styled.h2`
  margin-top: -17px;
  text-align: center;
`;

const PageWrapper = styled.div`
  padding: var(--spacing) 0;
  position: relative;
  padding-bottom: ${(props) => (props.NoBottomPad ? '0' : null)};
  padding-top: ${(props) => (props.NoTopPad ? '0' : null)};

  @media screen and (max-width: 600px) {
    padding: var(--spacingMobile) 0;
  }
`;
const PhotoGallery = ({ images,title }) => {
  
  const photosPrismic = images.map((photo) => ({
    src: photo.work_photos.url,
    alt: photo.work_photos.alt,
    width: photo.work_photos.dimensions.width,
    height: photo.work_photos.dimensions.height,
  }));

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <PageWrapper>
      <Container wide id="our_work">
        <Header>
          <strong>
            <RichText render={title}/>
          </strong>
        </Header>
        <Gallery photos={photosPrismic} onClick={openLightbox} direction={'column'} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photosPrismic.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Container>
    </PageWrapper>
  );
};

export { PhotoGallery };
