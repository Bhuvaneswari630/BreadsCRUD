const React = require('react')
const Default = require('./layouts/default')

function New({ bread, index }) {
    console.log('inside edit view', bread.baker)
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
                        defaultValue={bread.name}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="req-img">Image</label>
                    <input
                        type="text"
                        name='image'
                        id='req-img'
                        defaultValue={bread.image}
                    // required
                    />
                </div>
                <div>
                    <label htmlFor="req-name">Has Gluten</label>
                    <input
                        type="checkbox"
                        name='hasGluten'
                        id='req-hasGluten'
                        defaultChecked={bread.hasGluten ? true : false}
                    />
                </div>
                <div>
                    <label htmlFor="baker">Baker</label>
                    <select name="baker" id="baker" defaultValue={bread.baker} >
                        <option value="Rachel">Rachel</option>
                        <option value="Monica">Monica</option>
                        <option value="Joey">Joey</option>
                        <option value="Chandler">Chandler</option>
                        <option value="Ross">Ross</option>
                        <option value="Phoebe">Phoebe</option>
                    </select>
                </div>
                <input type="submit" value='Update Bread' />
            </form>

            <div>
                <a href="/breads"><button>Go back to Index</button></a>
            </div>
        </Default>
    )
}

module.exports = New
