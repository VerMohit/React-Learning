import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form
            className="addForm"
            onSubmit={handleSubmit}
        >
        
            <label 
                // links label to the input with the associated id and will focus on input field
                // when user clicks on the label
                htmlFor="addItem" 
            >
                Add Item
            </label>
            <input
                autoFocus
                id="addItem" // label element is linked to this input
                type="text"
                placeholder="Add Item"
                required
                value={newItem} // Sets current value of the input field - input displays what is assigned to newItem
                onChange={(e) => setNewItem(e.target.value)} // e.target.value gets the input field's current value and setNewItem updates the newItem state with it
            />
            <button
                type="submit"
                aria-label="Add Item"
            >
                <FaPlus/> 
            </button>

        </form>
    )
};

export default AddItem;