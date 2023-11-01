const React = require('react')
const Default = require('./layouts/default')

function New({ name, image, hasGluten, index }) {
    console.log('inside edit view', index)
    return (
        <Default>
            <h2>Edit a bread</h2>
            <form action={`/breads/${index}?_method=PUT`} method='POST'>
                <div>
                    <label htmlFor="req-name">Name</label>
                    <input
                        type="text"
                        name='name'
                        id='req-name'
                        defaultValue={name}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="req-img">Image</label>
                    <input
                        type="text"
                        name='image'
                        id='req-img'
                        defaultValue={image}
                    // required
                    />
                </div>
                <div>
                    <label htmlFor="req-name">Has Gluten</label>
                    <input
                        type="checkbox"
                        name='hasGluten'
                        id='req-hasGluten'
                        defaultChecked={hasGluten ? true : false}
                    />
                </div>
                <input type="submit" />
            </form>
          
            <div>
                <a href="/breads"><button>Go back to Index</button></a>
            </div>
        </Default>
    )
}

module.exports = New
