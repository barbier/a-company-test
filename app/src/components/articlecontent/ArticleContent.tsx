import { useContext } from 'react'
import { convertToDate } from '../../utils/util'

const { ArticleContext } = require('../../contexts/context')

const {
  Content,
  ContentAuthor,
  ContentHeader,
  ContentTitle,
  ContentPublishedDate,
  ContentImage,
  ContentText,
  ContentFooter,
  ContentSource
} = require('../../styles/styles')

const ArticleContent: React.FC = () => {
  // eslint-disable-next-line
  const [selectedArticle, setSelectedArticle] = useContext(ArticleContext)

  const {
    title,
    author,
    publishedAt,
    urlToImage,
    content,
    url,
    source,
  } = selectedArticle
  
  if (!selectedArticle.title) {
    return null
  }

  return (
    <Content>
      <ContentHeader>
        <ContentTitle>{title}</ContentTitle>
        <ContentAuthor>
          Author: 
          {
            author
            ? author
            : 'Unknown'
          }
        </ContentAuthor>
        <ContentPublishedDate>
          Published at: {convertToDate(publishedAt)}
        </ContentPublishedDate>
      </ContentHeader>
      <ContentImage src={urlToImage} />
      <ContentText>{content}</ContentText>
      <ContentFooter>
        Source: 
        <ContentSource href={url} target='_blank'>
          {source?.name}
        </ContentSource>
      </ContentFooter>
    </Content>
  )
}

export default ArticleContent