import React, { useEffect, useState } from "react";
import ArticleContentWrapper from "../articlecontent/ArticleContent";
import {
  AsideContent,
  Footer,
  FooterText,
  Header,
  HeaderTitle,
  Main,
} from "../../styles/styles";
import ArticlesList from "../articleslist/ArticlesList";
import { ArticleContextProvider } from "../../contexts/context";

const App: React.FC = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await fetch("http://localhost:8000/v1/news?q=");
      const resultJson = await result.json();
      setArticles(resultJson.articles);
    };

    void fetchData();
  }, []);

  return (
    <ArticleContextProvider>
      <Header>
        <HeaderTitle>Newspaper</HeaderTitle>
      </Header>
      <Main>
        <AsideContent>
          <ArticlesList articles={articles} />
        </AsideContent>
        <ArticleContentWrapper />
      </Main>
      <Footer>
        <FooterText>Created by: Barbier</FooterText>
      </Footer>
    </ArticleContextProvider>
  );
};

export default App;
