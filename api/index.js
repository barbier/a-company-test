'use strict';

const
  express = require('express'),
  cors = require('cors'),
  news = require('./data/news.json');

var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

const app = express();
app.use(cors());

const getNewsByTitle = query => {
  return news.articles.filter(item => {
    const patt = new RegExp(query, 'gi');
    return patt.test(item.title);
  });
}

app.get('/v1/news', (req, res) => {
  if (!req.query.q)
    return res.json(news);

  const foundResults = getNewsByTitle(req.query.q);

  return res.json({
    articles: foundResults
  });
});

var schema = buildSchema(`
    type Query {
        articles(title: String): [Article]
    },
    type Article {
    source: Source
    author: String
    title: String
    description: String
    url: String
    urlToImage: String 
    publishedAt: String
    content: String
  },
  type Source {
    id: String
    name: String
  }
`);

var root = {
  articles: query => {
    if (!query.title)
      return news.articles;

    return getNewsByTitle(query.title);
  },
};

app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

let server = app.listen(8000, '0.0.0.0', () => {
  console.log(`API listening on http://${server.address().address}:${server.address().port}`);
});