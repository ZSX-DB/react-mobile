## serve.js

**home主页下的HookDemo请求数据的后台代码**

* npm install express
* create serve.js
* node serve

```javascript
const express = require('express')

const app = express()

const languages = [
    {
        lid: 1,
        title: 'JavaScript',
        detail: 'JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。'
    },
    {
        lid: 2,
        title: 'Python',
        detail: 'Python由荷兰数学和计算机科学研究学会的Guido van Rossum 于1990 年代初设计，作为一门叫做ABC语言的替代品。'
    },
    {
        lid: 3,
        title: 'Golang',
        detail: 'Go（又称 Golang）是 Google 的 Robert Griesemer，Rob Pike 及 Ken Thompson 开发的一种静态强类型、编译型语言。'
    }
]

app.get('/api/GET/language', (req, resp) => {

    if (!req.query.name) {
        resp.status(400)
        resp.json({
            code: 400,
            message: 'Must enter the name',
            data: null
        })
    } else {
        resp.json({
            code: 200,
            message: 'success',
            data: languages.filter(item => item.title === req.query.name)[0]
        })
    }

})

app.listen(8080, () => console.log('Now server listen in http://localhost:8080'))

```

