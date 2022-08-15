import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ArticleContent from './ArticleContent'

import { ArticleContextProvider } from "../../contexts/context";
describe("Test Article Content rendering options", () => {
  test("It should match snapshot", () => {
    const component = renderer.create(
      <ArticleContextProvider>
        <ArticleContent />
      </ArticleContextProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  // test("It shouldn't render nothing if there's no article selected", () => {
  //   const {container} = render(
  //     <ArticleContextProvider>
  //       <ArticleContent />
  //     </ArticleContextProvider>
  //   )
  //   const articleTag = container.querySelector('article')

  //   expect(articleTag).toBeFalsy()
  // })

  test("It shouldn't render normaly when an article is selected", () => {

    const {container} = render(
      <ArticleContextProvider>
        <ArticleContent />
      </ArticleContextProvider>
    )
    const articleTag = container.querySelector('article')

    expect(articleTag).toBeTruthy()
  })
})
