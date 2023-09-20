import React, { type FC } from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: FC<PageProps> = () => {
  return <main>Home page...</main>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
