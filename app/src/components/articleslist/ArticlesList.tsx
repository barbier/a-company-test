import React from "react";
import { List } from "../../styles/styles";
import ArticlesListItem from "../articleslistitem/ArticlesListItem";
import { IArticle } from "../../interfaces/Article";

const ArticlesList: React.FC<{ articles: IArticle[] }> = ({ articles }) => {
  if (articles.length > 0) {
    return (
      <List>
        {articles.map((article, index) => (
          <ArticlesListItem article={article} key={index} />
        ))}
      </List>
    );
  }
  return <p>Failed to fetch data</p>;
};

export default ArticlesList;
