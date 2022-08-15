import renderer from 'react-test-renderer'
import App from './App'

import { ArticleContextProvider } from "../../contexts/context";

describe("Test Articles List rendering options", () => {
  test("It should match snapshot", () => {
    const component = renderer.create(
      <ArticleContextProvider>
        <App />
      </ArticleContextProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
// test('renders learn react link', () => {
//   render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
