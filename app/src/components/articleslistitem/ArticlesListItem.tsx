import { useContext, useState } from 'react'
import {
  ListItem,
  ListItemText,
  ListItemTitle,
  ListItemButton,
} from '../../styles/styles'
import { IArticle } from '../../interfaces/Article'

const { ArticleContext } = require('../../contexts/context')

const ArticlesListItem: React.FC<{article: IArticle}> = ({article}) => {

  const [read, setRead] = useState(false)
  // eslint-disable-next-line
  const [selectedArticle, setSelectedArticle] = useContext(ArticleContext)

  const handleReadMoreClick = () => {
    setRead(true)
    setSelectedArticle(article)
  }
  
  return (
    <ListItem className={read ? 'read' : ''}>
      <ListItemTitle>{article.title}</ListItemTitle>
      <ListItemText>{article.description}</ListItemText>
      <ListItemButton onClick={() => handleReadMoreClick()}>
        Read more
      </ListItemButton>
    </ListItem>
  )
}

export default ArticlesListItem