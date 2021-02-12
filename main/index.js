const express = require('express') //сервер на фреймворке express
const app = express()

app.use(express.static('public')) // это обращение к серверу

app.get('/', (req, res) => {
  res.sendFile(main + '/public/index.html') //как я понял, папка public обязательна
  //возвращаем индекс хтмл
})
app.listen(5000)
console.log ('пиздец блять');

//адрес локалхоста = http://localhost:5000/
