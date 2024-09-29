import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item, handleCheck, handleDelete}) => {
    return (
         
         <li className="item">
         <input
             type="checkbox"
             onChange={() => handleCheck(item.id)} // with a checkbox we need a onChange event. To pass params we use anonlymous func {() => func(params)}
             checked={item.checked}
         />
         <label
             style={(item.checked) ? { textDecoration: 'line-through' } : null}
             onDoubleClick={() => handleCheck(item.id)}
         >{item.item}</label>
         <FaTrashAlt
             onClick={() => handleDelete(item.id)}
             role="button"
             tabIndex="0"
             aria-label={`Delete ${item.item}`} // used for screen readers
         />
     </li>
    );
}

export default LineItem;
