const express = require("express")
const app = express()

let questions = [
  {
    id: 1,
    data: "测试数据1"
  },
  {
    id: 2,
    data: "测试数据2"
  },
]

// routes

app.get('/', (req, res) => {
  res.send('Hello Node API')
})

// 列表接口
app.get('/test-list', (req, res) => {
  res.status(200)
  res.json({
    code: 200,
    data: questions,
    msg: '获取成功'
  })
})


app.get('/blog', (req, res) => {
  res.send('Hello Blog, i am here')
})


app.listen(3000, () => {
  console.log(`Node API app is runint on port 3000`, 'http://localhost:3000');
})

