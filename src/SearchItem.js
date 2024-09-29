// No buttons are being added because we want to begin searching the list immediately when user types

const SearchItem = ( { search, setSearch }) => {
    return (
        <form
            className="searchForm"
            onSubmit={(e) => e.preventDefault()} // when enter is pressed, page won't reload
        >
            <label htmlFor="search">Search</label>
            <input
                id="search"
                type="text"
                role="searchbox"                               // provide semantic role of element and helps assistive technologies (ie. screen readers) understand its use
                placeholder="Search Items"
                value={search}                                 // Sets current value of the input field - input displays what is assigned to newItem
                onChange={(e) => setSearch(e.target.value)}    // e.target.value gets the input field's current value and setNewItem updates the newItem state with it
            />

        </form>
    )
}

export default SearchItem