import { useState } from "react";
import Logo from "./Logo"
import Stats from "./Stats"
import PackingList from "./PackingList"
import Item from "./Item"
import Form from "./Form"
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Sneakers", quantity: 24, packed: true },
// ];
export default function App() {
  const [items, setItems] = useState([]);
  const numItems = items.length
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList(){
    const confirmed  =  window.confirm("Do you want to delete all Items?")
    if(confirmed) setItems([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItems}
        onToggleItems={handleToggleItem}
        onClearList = { handleClearList}
      />
      <Stats items={items} numItems = {numItems}/>
    </div>
  );
}





