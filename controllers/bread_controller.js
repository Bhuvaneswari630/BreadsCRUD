const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')
// console.log('Bread length', Bread.length);
//Index

breads.get('/', async (req, res) => {
    const allBreads = await Bread.find();
    console.log(allBreads);
    // res.send(Bread)
    res.render('Index', {
        // from mongoDb
        breads: allBreads,
        // breads: Bread,
        title: 'Index Page'
    })
})
// CREATE
breads.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.image) {
        req.body.image = undefined
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    // Bread.push(req.body)
    Bread.create(req.body)
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

breads.get('/:index', async (req, res) => {
    // let index = req.params.index
    // let bread = Bread[index]
    let bread = await Bread.findById(req.params.index)
    // if (index < Bread.length) {
    // res.send(bread)
    // res.render('Show', { ...bread, index })
    res.render('Show', { bread })
    // } else {
    //     res.render('Error404')
    // }
})

module.exports = breads