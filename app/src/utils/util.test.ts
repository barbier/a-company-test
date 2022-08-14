import { convertToDate } from './util'

describe("Test date conversion", () => {
  test("It should return a locale date", () => {
    expect(convertToDate("2019-10-18T10:42:46Z")).toBe("10/18/2019")
  })
})