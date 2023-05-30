import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { GatsbyImage, ImageDataLike, StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

interface PhotoProps {
  alt: string
  largeURL: string
  srcSet: string
  thumbnailURL: string
  datapswpwidth: number
  datapswpheight: number
  gatsbyImage: any
}

const Photo = (
  props: PhotoProps
): React.ReactElement => {
  const {
    alt, largeURL, srcSet, thumbnailURL,
    datapswpwidth, datapswpheight, gatsbyImage, ...rest
  } = props

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#my-test-gallery',
      children: 'a',
      initialZoomLevel: 'fit',
      secondaryZoomLevel: 'fit',
      pswpModule: () => import('photoswipe'),
      imageClickAction: 'close',
      tapAction: 'close',
      doubleTapAction: false,
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <a
      href='../images/photos/big-tree-colors-orange.jpg'
      data-pswp-srcset={srcSet}
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
      {/* <GatsbyImage
        src={thumbnailURL}
        image={gatsbyImage}
        alt=""
      /> */}

    </a>
  );
}

export default Photo;
