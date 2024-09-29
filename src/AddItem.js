import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {

    const inputRef = useRef();

    return (
        <form
            className="addForm"
            onSubmit={handleSubmit}
        >
        
            <label 
                // links label to the input with the associated id and will focus on input field when user clicks on the label
                htmlFor="addItem" 
            >
                Add Item
            </label>
            <input
                autoFocus
                ref = {inputRef}                             // we use the useRef hook to return autofocus to the add item input field after submit button clicked
                id="addItem"                                 // label element is linked to this input
                type="text"
                placeholder="Add Item"
                required
                value={newItem}                              // Sets current value of the input field - input displays what is assigned to newItem
                onChange={(e) => setNewItem(e.target.value)} // e.target.value gets the input field's current value and setNewItem updates the newItem state with it
            />
            <button
                type="submit"
                aria-label="Add Item"
                onClick={ () => inputRef.current.focus() }   // set focus back to add item input field
            >
                <FaPlus/> 
            </button>

        </form>
    )
};

export default AddItem;