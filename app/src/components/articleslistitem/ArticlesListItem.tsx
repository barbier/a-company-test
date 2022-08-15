import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  ListItemTitle,
  ListItemButton,
} from "../../styles/styles";
import { IArticle } from "../../interfaces/Article";

import { useSetSelectedArticle } from "../../contexts/context";

const ArticlesListItem: React.FC<{ article: IArticle }> = ({
  article,
}: any) => {
  const [read, setRead] = useState(false);
  const handleSetSelectedArticle = useSetSelectedArticle;

  const handleReadMoreClick = (article: any): void => {
    setRead(true);
    handleSetSelectedArticle(article);
  };

  return (
    <ListItem className={read ? "read" : ""}>
      <ListItemTitle>{article.title}</ListItemTitle>
      <ListItemText>{article.description}</ListItemText>
      <ListItemButton onClick={() => handleReadMoreClick(article)}>
        Read more
      </ListItemButton>
    </ListItem>
  );
};

export default ArticlesListItem;
