import React, { type FC } from "react";
import { HeadFC, PageProps } from "gatsby";

const NotFoundPage: FC<PageProps> = () => {
  return <main>Not found...</main>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
