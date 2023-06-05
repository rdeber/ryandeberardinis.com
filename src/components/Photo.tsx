import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { GatsbyImage, ImageDataLike, StaticImage } from 'gatsby-plugin-image';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface PhotoProps {
  alt: string
  largeURL: string
  srcSet: string
  thumbnailURL: string
  datapswpwidth: number
  datapswpheight: number
  heightThumbnail: number
  widthThumbnail: number
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
    // <LazyLoadImage height={200}>
    <a
      href={largeURL}
      data-pswp-srcset={srcSet}
      data-pswp-width={datapswpwidth}
      data-pswp-height={datapswpheight}
      target="_blank"
      rel="noreferrer"
      role='button'
      aria-label='Click to view larger image'
    >
      <LazyLoadImage
        src={thumbnailURL}
        // srcSet={srcSet}
        alt={alt}
        effect="opacity"
        threshold={0}
        // width={datapswpwidth}
        // height={datapswpheight}
        style={{
          maxWidth: '100%',
          minHeight: '100px'
        }}
      />
      {/* <GatsbyImage
        src={thumbnailURL}
        image={gatsbyImage}
        alt=""
      /> */}

    </a>
    // </LazyLoad>
  );
}

export default Photo;
