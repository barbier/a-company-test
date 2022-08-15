import React, { useState, createContext, useContext } from "react";
import { IArticle } from "../interfaces/Article";
import { IContext } from "../interfaces/ContextProvider";

const useArticle = (): any => {
  const [selectedArticle, setSelectedArticle] = useState({});

  return {
    selectedArticle,
    chooseArticle: (article: IArticle) => setSelectedArticle(article),
  };
};

const ArticleContext = createContext({} as any);

export const ArticleContextProvider: React.FC<{ children: any }> = ({
  children,
}: IContext) => (
  <ArticleContext.Provider value={useArticle()}>
    {children}
  </ArticleContext.Provider>
);

export const useSelectedArticle = (): any =>
  useContext(ArticleContext).selectedArticle;
export const useSetSelectedArticle = (article: IArticle): any =>
  useContext(ArticleContext).chooseArticle(article);
