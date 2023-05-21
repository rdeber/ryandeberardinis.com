import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

interface PhotoProps {
  alt: string
  largeURL: string
  thumbnailURL: string
  datapswpwidth: number
  datapswpheight: number
}

const PhotoGallery = (
  props: PhotoProps
): React.ReactElement => {
  const {
    alt, largeURL, thumbnailURL, datapswpwidth, datapswpheight, ...rest
  } = props

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#my-test-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <a
      href={largeURL}
      data-pswp-width={datapswpwidth}
      data-pswp-height={datapswpheight}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={thumbnailURL}
        alt={alt}
        style={{
          maxWidth: '100%'
        }}
      />
    </a>
  );
}

export default PhotoGallery;
