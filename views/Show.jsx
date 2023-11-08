const React = require('react')
const Default = require('./layouts/default')
// const { link } = require('../controllers/bread_controller')

function Show({ bread, index, bakedBy }) {
    return (
        <Default>
            <h2>Show Page</h2>
            {/* <p>I have {breads[0].name} bread!</p> */}
            <h3>{bread.name}</h3>
            <p>It is {bread.hasGluten ? 'not' : ''} gluten-free</p>
            <img src={bread.image} alt={bread.name} />
            {/* <p>Baked by {bread.baker}</p> */}
            <p>{bakedBy}</p>
            <div>
            <a href={`/breads/${index}/edit`}><button>EDIT</button></a>
                <form action={`/breads/${index}?_method=DELETE`} method='POST'>
                    <input type="submit" value='DELETE' />
                </form>
                <a href="/breads"><button>Go back to Index</button></a>
            </div>
        </Default>
    )
}

module.exports = Show
