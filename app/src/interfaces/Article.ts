export interface IArticle {
  source: IArticleSource,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
}

interface IArticleSource {
  id: string | null,
  name: string,
}