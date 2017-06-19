const app = require('express')()

app.get('/zero', (req, res) => {
  res.set('Content-Type', 'text/plain')
  res.send('0')
})

app.get('/add', (req, res) => {
  res.set('Content-Type', 'text/plain')

  if (!('a' in req.query) || !('b' in req.query)) {
    res.status(400).send('Example request: /add?a=4&b=8')
  } else {
    const a = Number(req.query.a)
    const b = Number(req.query.b)

    if (isNaN(a) || isNaN(b)) {
      res.status(400).send('a and b must be numbers')
    } else {
      res.send((a + b).toString())
    }
  }
})

app.get('/subtract', (req, res) => {
  res.set('Content-Type', 'text/plain')

  if (!('a' in req.query) || !('b' in req.query)) {
    res.status(400).send('Example request: /add?a=4&b=8')
  } else {
    const a = Number(req.query.a)
    const b = Number(req.query.b)

    if (isNaN(a) || isNaN(b)) {
      res.status(400).send('a and b must be numbers')
    } else {
      res.send((a - b).toString())
    }
  }
})

app.get('/double/:number', (req, res) => {
  res.set('Content-Type', 'text/plain')

  if (!('number' in req.params)) {
    res.status(400).send('Example request: /double/9')
  } else {
    const number = Number(req.params.number)

    if (isNaN(number)) {
      res.status(400).send('Example request: /double/9')
    } else {
      res.send((2 * number).toString())
    }
  }
})

app.listen(3000, () => console.log('listening on port 3000'))
