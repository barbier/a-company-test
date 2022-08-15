/* eslint-disable */
import React from "react";
import { convertToDate } from "../../utils/util";

import { useSelectedArticle } from "../../contexts/context";

const {
  Content,
  ContentAuthor,
  ContentHeader,
  ContentTitle,
  ContentPublishedDate,
  ContentImage,
  ContentText,
  ContentFooter,
  ContentSource,
} = require("../../styles/styles");
/* eslint-enable */

const ArticleContent: React.FC = () => {
  const selectedArticle = useSelectedArticle();
  const { title, author, publishedAt, urlToImage, content, url, source } =
    selectedArticle;

  return (
    <Content>
      <ContentHeader>
        <ContentTitle>{title}</ContentTitle>
        <ContentAuthor> Author: {author ?? "Unknown"} </ContentAuthor>
        <ContentPublishedDate>
          Published at: {convertToDate(publishedAt)}
        </ContentPublishedDate>
      </ContentHeader>
      <ContentImage src={urlToImage} />
      <ContentText>{content}</ContentText>
      <ContentFooter>
        Source:
        <ContentSource href={url} target="_blank">
          {source?.name}
        </ContentSource>
      </ContentFooter>
    </Content>
  );
};

export default ArticleContent;
