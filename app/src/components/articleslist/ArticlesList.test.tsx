import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { IArticle } from '../../interfaces/Article'
import ArticlesList from './ArticlesList'

const { ArticleContext } = require('../../contexts/context')

describe("Test Articles List rendering options", () => {
  test("It should match snapshot", () => {
    const selectedArticle = {}
    const setSelectedArticle = () => {}
    const articles: IArticle[] = [
      {
        "source": {
          "id": "cnbc",
          "name": "CNBC"
        },
        "author": "Amelia Lucas",
        "title": "Coca-Cola stock jumps as strong sales of Coke Zero Sugar continue to drive revenue growth - CNBC",
        "description": "Coca-Cola on Friday reported quarterly earnings that met analysts' expectations.",
        "url": "https://www.cnbc.com/2019/10/18/coca-cola-ko-earnings-q3-2019.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/105375236-1533317591071rtx6drjw.jpg?v=1571332846",
        "publishedAt": "2019-10-18T10:42:46Z",
        "content": "Coca-Cola on Friday reported quarterly revenue that topped analysts' expectations as more customers are drawn in by healthier options, like Zero Sugar soda and smaller size cans. \r\nShares of the company jumped 1.6% in premarket trading.\r\n\"Our performance give… [+1887 chars]"
      }
    ]
    const component = renderer.create(
      <ArticleContext.Provider value={[selectedArticle, setSelectedArticle]}>
        <ArticlesList articles={articles} />
      </ArticleContext.Provider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("It should return a list of articles when receiving data", () => {
    const selectedArticle = {
      "source": {
        "id": "cnbc",
        "name": "CNBC"
      },
      "author": "Amelia Lucas",
      "title": "Coca-Cola stock jumps as strong sales of Coke Zero Sugar continue to drive revenue growth - CNBC",
      "description": "Coca-Cola on Friday reported quarterly earnings that met analysts' expectations.",
      "url": "https://www.cnbc.com/2019/10/18/coca-cola-ko-earnings-q3-2019.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/105375236-1533317591071rtx6drjw.jpg?v=1571332846",
      "publishedAt": "2019-10-18T10:42:46Z",
      "content": "Coca-Cola on Friday reported quarterly revenue that topped analysts' expectations as more customers are drawn in by healthier options, like Zero Sugar soda and smaller size cans. \r\nShares of the company jumped 1.6% in premarket trading.\r\n\"Our performance give… [+1887 chars]"
    }
    const setSelectedArticle = () => {}
    const articles: IArticle[] = [
      {
        "source": {
          "id": "cnbc",
          "name": "CNBC"
        },
        "author": "Amelia Lucas",
        "title": "Coca-Cola stock jumps as strong sales of Coke Zero Sugar continue to drive revenue growth - CNBC",
        "description": "Coca-Cola on Friday reported quarterly earnings that met analysts' expectations.",
        "url": "https://www.cnbc.com/2019/10/18/coca-cola-ko-earnings-q3-2019.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/105375236-1533317591071rtx6drjw.jpg?v=1571332846",
        "publishedAt": "2019-10-18T10:42:46Z",
        "content": "Coca-Cola on Friday reported quarterly revenue that topped analysts' expectations as more customers are drawn in by healthier options, like Zero Sugar soda and smaller size cans. \r\nShares of the company jumped 1.6% in premarket trading.\r\n\"Our performance give… [+1887 chars]"
      }
    ]
    const {container} = render(
      <ArticleContext.Provider value={[selectedArticle, setSelectedArticle]}>
        <ArticlesList articles={articles} />
      </ArticleContext.Provider>
    )
    const listItem = container.querySelector("li")
    
    expect(listItem).toBeTruthy()

  })

  test("It should return an error message when there's no data", () => {
    const selectedArticle = {}
    const setSelectedArticle = () => {}
    const articles: IArticle[] = []

    render(<ArticlesList articles={articles} />)
    const errorText = screen.getByText('Failed to fetch data')
    expect(errorText).toBeInTheDocument()
  })
})