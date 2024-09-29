import LineItem from "./LineItem";

const ItemList = ({items, handleCheck, handleDelete}) => {
    return (
        // to display items in list in js, recommended to use .map() method
        <ul>
        {items.map((item) => (
           <LineItem 
            key = {item.id}
            item = {item}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
           />
        ))}
        </ul>
    );
}

export default ItemList;