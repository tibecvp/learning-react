import './Filters.css'

export function Filters() {
    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input
                    type="range"
                    id="price"
                    name="price"
                    min="0"
                    max="5000"
                />
            </div>

            <div>
                <label htmlFor="category">Category</label>
                <select id="category">
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}