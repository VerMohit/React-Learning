import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {

  // States needed by both Content and Footer components
  // Uses items now set to whatever is in local storage defined by `shoppinglist`
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

  // Source of truth for the input - controlled component
  const [newItem, setNewItem] = useState('');

  // update state for items and save them locally
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    // increment item id
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const myNewItem = { id: id, checked: false, item: item };
    const listItems = [...items, myNewItem];    
    setAndSaveItems(listItems)
  }


  // onChange behaviours for input element and onClick behaviour for buttons
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault();         // prevents default behaviour of page, which is reloading
    if (!newItem) return;       // just an additional check to make sure newItem in input field isn't empty (note: we have required set in the input element, this is a redundancy)
    addItem(newItem);
    setNewItem('');             // This lets us specify the state of newItem in the input field to '' after user submits
  }

  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <Content 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer 
        length = {items.length}
      />
    </div>
  );
}

export default App;
