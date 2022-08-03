import { useEffect, useState } from 'react'
import ArticleContentWrapper from '../articlecontent/ArticleContent'
import { AsideContent, Footer, FooterText, Header, HeaderTitle, Main } from '../../styles/styles'
import ArticlesList from '../articleslist/ArticlesList'
import { ArticleContext } from '../../contexts/context'

function App() {
  const [articles, setArticles] = useState([])
  const [selectedArticle, setSelectedArticle] = useState({})
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://localhost:8000/v1/news?q=')
      const resultJson = await result.json()
      setArticles(resultJson.articles)
    }

    fetchData()
  }, [])

  return (
    <ArticleContext.Provider value={[selectedArticle, setSelectedArticle]}>
      <Header>
        <HeaderTitle>
          Newspaper
        </HeaderTitle>
      </Header>
      <Main>
        <AsideContent>
          <ArticlesList articles={articles} />
        </AsideContent>
        <ArticleContentWrapper />
      </Main>
      <Footer>
        <FooterText>
          Created by: Barbier
        </FooterText>
      </Footer>
    </ArticleContext.Provider>
  )
}

export default App
