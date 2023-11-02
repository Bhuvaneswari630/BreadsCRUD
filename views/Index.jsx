const React = require('react')
const Default = require('./layouts/default')
// const { link } = require('../controllers/bread_controller')

function Index({ breads, title }) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            {/* <p>I have {breads[0].name} bread!</p> */}
            <ul>
                {breads.map((bread, i) => {
                    return (
                        <li key={bread._id}>
                            <a href={`/breads/${bread.id}`}>
                                {bread.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <a href="/breads/new"><button className='btn btn-secondary'>Add a new Bread</button></a>
        </Default>
    )
}

module.exports = Index
