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
        </section>
    )
}