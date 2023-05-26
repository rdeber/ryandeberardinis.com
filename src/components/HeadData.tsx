import React from "react";

type HeadProps = {
  title: string
}

export default function Head(props: HeadProps ) {
  const { title, ...rest} = props
  return (
    <>
      <html lang="en" />
      <title>{title}</title>
    </>
  );
}
