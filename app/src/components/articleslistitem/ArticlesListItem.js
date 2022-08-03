import { useContext, useState } from 'react'
import { ArticleContext } from '../../contexts/context'
import {
  ListItem,
  ListItemText,
  ListItemTitle,
  ListItemButton,
} from '../../styles/styles'

function ArticlesListItem(props) {
  const { article } = props
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