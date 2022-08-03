import { render, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { ArticleContext } from '../../contexts/context'
import ArticlesListItem from './ArticlesListItem'

describe("Test Articles List rendering options", () => {
  let selectedArticle
  let setSelectedArticle
  let article
  beforeEach(() => {
    selectedArticle = {}
    setSelectedArticle = () => {}
    article = {
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
  })
  
  test("It should match snapshot", () => {
    
    const component = renderer.create(
      <ArticleContext.Provider value={[selectedArticle, setSelectedArticle]}>
        <ArticlesListItem article={article} />
      </ArticleContext.Provider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("It shouldn't have any class names on render", () => {
    const {container} = render(
      <ArticleContext.Provider value={[selectedArticle, setSelectedArticle]}>
        <ArticlesListItem article={article} />
      </ArticleContext.Provider>
    )
    const listItem = container.querySelector(".read")
    
    expect(listItem).toBeFalsy()
  })

  test('It should have any class names "read" after clicking on button', () => {
    const {container} = render(
      <ArticleContext.Provider value={[selectedArticle, setSelectedArticle]}>
        <ArticlesListItem article={article} />
      </ArticleContext.Provider>
    )
    const button = container.querySelector('button')

    fireEvent.click(button)

    const listItem = container.querySelector(".read")
    
    expect(listItem).toBeTruthy()
  })
})