const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')
const Baker = require('../models/baker')
// console.log('Bread length', Bread.length);
//Index

breads.get('/', async (req, res) => {
    const allBreads = await Bread.find();
    // console.log(allBreads);
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
breads.get('/new', async (req, res) => {
    const bakers = await Baker.find()
    res.render('New', { bakers })
})

breads.put('/:index', async (req, res) => {
    let index = req.params.index
    // console.log(req.body);
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    // Bread[index] = { ...Bread[index], ...req.body }
    try {
        await Bread.findByIdAndUpdate(index, req.body, { new: true })
        res.redirect(`/breads/${index}`)
    } catch (e) {
        console.log('Err', e);
        res.render('Error404')
    }

})

breads.delete('/:index', async (req, res) => {
    let index = req.params.index
    // Bread.splice(index, 1)
    try {
        await Bread.findByIdAndDelete(index)
        res.status(303).redirect('/breads')
    } catch (e) {
        console.log('Err', e);
        res.render('Error404')
    }

})

breads.get('/:index/edit', async (req, res) => {
    let index = req.params.index
    // let bread = Bread[index]

    try {
        let bread = await Bread.findById(index)
        // .populate('baker')
        // await bread.populate('bakers', 'id')
        res.render('Edit', { bread, index })
    } catch (e) {
        console.log('Err', e);
        res.render('Error404')
    }
})

breads.get('/:index', async (req, res) => {
    let index = req.params.index
    // let bread = Bread[index]
    let bread = await Bread.findById(index).populate('baker')
    let bakedBy = bread.getBakedBy()
    console.log('baked by', bakedBy);
    // if (index < Bread.length) {
    // res.send(bread)
    // res.render('Show', { ...bread, index })
    res.render('Show', { bread, index, bakedBy })
    // } else {
    //     res.render('Error404')
    // }
})
breads.get('/data/seed', async (req, res) => {
    try {
        await Bread.insertMany(
            [
                {
                    name: 'Rye',
                    hasGluten: true,
                    image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                },
                {
                    name: 'French',
                    hasGluten: true,
                    image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                },
                {
                    name: 'Gluten Free',
                    hasGluten: false,
                    image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
                },
                {
                    name: 'Pumpernickel',
                    hasGluten: true,
                    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
                }
            ]
        )
        res.redirect('/breads')
    } catch (e) {
        console.log('Err', e);
        res.render('Error404')
    }
})
module.exports = breads