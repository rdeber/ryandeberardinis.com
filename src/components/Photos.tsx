import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { GatsbyImage, ImageDataLike, StaticImage, getImage, getSrc } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

export default function PhotoGallery(props: { galleryID: string | undefined; images: any[]; }) {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
  //       edges {
  //         node {
  //           childImageSharp {
  //             gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
  //           }
  //           name
  //         }
  //       }
  //     }
  //   }
  // `);

  // const images = data.allFile.edges.map((edge: {
  //   node: {
  //     name: string;
  //     childImageSharp: { gatsbyImageData: ImageDataLike | null };
  //   };
  // }) => {
  //   const imageName = edge.node.name; // Get the image name
  //   const parsedName = imageName.replace(/-/g, ' '); // Remove dashes from the name
  //   return {
  //     image: getImage(edge.node.childImageSharp.gatsbyImageData),
  //     alt: parsedName, // Use the parsed name as the alt text
  //   };
  // });

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
    <div className="pswp-gallery" id={props.galleryID}>
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.thumbnailURL} alt="" />
        </a>
      ))}
    </div>
  );
}

        // <a
        //   href={image.image.images.fallback.src}
        //   data-pswp-src={image.image.images.fallback.src}
        //   data-pswp-srcset={image.image.images.fallback.srcSet}
        //   data-pswp-width={image.width}
        //   data-pswp-height={image.height}
        //   key={index}
        //   target="_blank"
        //   rel="noreferrer"
        // >

        //   <img src={image.image.images.fallback.src} alt={image.alt} />
        // </a>

