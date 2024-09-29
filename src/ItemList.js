import LineItem from "./LineItem";

const ItemList = ({items, handleCheck, handleDelete}) => {
    return (
        // to display items in list in js, recommended to use .map() method
        <ul>
        {items.map((item) => (
           <LineItem  
            key = {item.id} // Each list item in react MUST have a key - helps react know which items changed, added or removed
            item = {item}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
           />
        ))}
        </ul>
    );
}

export default ItemList;
