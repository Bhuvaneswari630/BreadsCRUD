const React = require('react')
const Default = require('./layouts/default')

function New({ bakers }) {
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
                <div>
                    <label htmlFor="baker">Baker</label>
                    <select name="baker" id="baker">
                        {bakers.map(b => {
                            return (
                                <option key={`baker${b.id}`} value={b.id}>{b.name}</option>
                            )
                        })}
                        {/* <option value="Rachel">Rachel</option>
                        <option value="Monica">Monica</option>
                        <option value="Joey">Joey</option>
                        <option value="Chandler">Chandler</option>
                        <option value="Ross">Ross</option>
                        <option value="Phoebe">Phoebe</option> */}
                    </select>
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
