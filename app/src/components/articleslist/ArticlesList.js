import { List } from "../../styles/styles"
import ArticlesListItem from '../articleslistitem/ArticlesListItem'

function ArticlesList(props) {
  if (props.articles.length > 0) {
    return (
      <List>
        {props.articles.map((article, index) => (
          <ArticlesListItem article={article} key={index} />
        ))}
      </List>
    )
  }
  return <p>Failed to fetch data</p>
}

export default ArticlesList