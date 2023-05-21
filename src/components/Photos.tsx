import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { GatsbyImage, ImageDataLike, StaticImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

export default function SimpleGallery(props: { galleryID: string | undefined; images: any[]; }) {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
            name
          }
        }
      }
    }
  `);

  const images = data.allFile.edges.map((edge: {
    node: {
      name: string;
      childImageSharp: { gatsbyImageData: ImageDataLike | null };
    };
  }) => {
    const imageName = edge.node.name; // Get the image name
    const parsedName = imageName.replace(/-/g, ' '); // Remove dashes from the name
    return {
      image: getImage(edge.node.childImageSharp.gatsbyImageData),
      alt: parsedName, // Use the parsed name as the alt text
    };
  });

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);



  console.log(images);
  console.log(images[9].image.images.fallback.src);

  return (
    <div className="pswp-gallery" id={props.galleryID}>
      {images.map((image: any, index: number) => (
        <a
          href={image.image.images.fallback.src}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.image.images.fallback.src} alt="" />
          {/*
          <StaticImage
            src={image.thumbnailURL}
            alt="A dinosaur"
            placeholder="blurred"
            layout="constrained"
            width={200}
            height={200}
          /> */}
        </a>
      ))}
    </div>
  );
}
