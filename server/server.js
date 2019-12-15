import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import { StaticRouter } from 'react-router'
import { renderToString } from 'react-dom/server'

import App from '../src/App'

const PORT = process.env.PORT || 7878
const app = express()

const router = express.Router()

const serverRenderer = (req, res, next) => {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  )
  fs.readFile(path.resolve('./build/index.html'),  'utf8', (err, data) =>  {
    if (err) {
      console.error(err)
      return res.status(500).send("server error")
    }
    return res.send(data.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    ))
  })
}
router.use('^/$', serverRenderer)
router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

app.use(router)

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`)
})