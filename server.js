const express = require('express')
const app = express()
const PORT = 8000

const guitarists = {
    'eric clapton': {
        'age': 78,
        'birthName': 'Eric Clapton',
        'birthLocation': 'Ripley, United Kingdom'
    },
    'jimi hendrix': {
        'age': 27,
        'birthName': 'James Marshall Hendrix',
        'birthLocation': 'Seattle, Washington'
    },
    'jeff beck': {
        'age': 79,
        'birthName': 'Geoffry Beck',
        'birthLocation': 'Wallington, United Kingdom' 
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:guitarist', (req, res) => {
    const guitaristName = req.params.guitarist.toLowerCase()
    if (guitarists [guitaristName]) {
        res.json(guitarists [guitaristName])
    } else {
        res.json(guitarists['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})