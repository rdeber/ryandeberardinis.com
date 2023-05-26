import React from "react";

type HeadProps = {
  title: string
  description?: string
}

export default function HeadData(props: HeadProps ) {
  const { title, description } = props
  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}
