const React = require('react')
const Default = require('./layouts/default')

function New() {
    return (
        <Default>
            <h2>Add a new bread</h2>
            <form action="/breads" method='POST'>
                <div>
                    <label htmlFor="req-name">Name</label>
                    <input
                        type="text"
                        name='name'
                        id='req-name'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="req-img">Image</label>
                    <input
                        type="text"
                        name='image'
                        id='req-img'
                        // required
                    />
                </div>
                <div>
                    <label htmlFor="req-name">Has Gluten</label>
                    <input
                        type="checkbox"
                        name='hasGluten'
                        id='req-hasGluten'
                        defaultChecked
                    />
                </div>
                <button type='submit'>Create Bread</button>
            </form>
            <div>
            <a href="/breads"><button>Go back to Index</button></a>
            </div>
        </Default>
    )
}

module.exports = New
