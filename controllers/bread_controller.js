const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')
// console.log('Bread length', Bread.length);
//Index
breads.get('/', (req, res) => {
    // res.send(Bread)
    res.render('Index', {
        breads: Bread,
        title: 'Index Page'
    })
})
// CREATE
breads.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bread.push(req.body)
    res.redirect('/breads')
    // res.send(Bread)
})
breads.get('/new', (req, res) => {
    res.render('New')
})

breads.put('/:index', (req, res) => {
    let index = req.params.index
    console.log(req.body);
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread[index] = { ...Bread[index], ...req.body }
    res.redirect(`/breads/${index}`)
})

breads.delete('/:index', (req, res) => {
    let index = req.params.index
    Bread.splice(index, 1)
    console.log('inside delete', Bread);
    res.status(303).redirect('/breads')
})

breads.get('/:index/edit', (req, res) => {
    let index = req.params.index
    let bread = Bread[index]

    if (index < Bread.length) {
        // res.send(bread)
        res.render('Edit', { ...bread, index })
    } else {
        res.render('Error404')
    }
})

breads.get('/:index', (req, res) => {
    let index = req.params.index
    let bread = Bread[index]
    if (index < Bread.length) {
        // res.send(bread)
        res.render('Show', { ...bread, index })
    } else {
        res.render('Error404')
    }
})

module.exports = breads