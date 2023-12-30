import { useState } from "react";

const Fun2 = () => {
  const [boxslots, setBoxSlots] = useState([]);
  const [items, setItems] = useState("");

  const insert = () => {
    if (items.trim() !== "") {
      setBoxSlots([...boxslots, items]);
      setItems("");
    }
  };

 
  const remove = (index) => {
    const remove = [...boxslots];
    remove.splice(index, 1);
    setBoxSlots(remove);
  };
  console.log(boxslots);
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {boxslots.map((items, index) => (
          <li key={index}>
            <input className="check" type="checkbox"></input>
            {items}
            <button className="remove" onClick={() => remove(index)}>
              remove
            </button>
          </li>
        ))}
      </ul>
      <div className="div1">
        <input value={items} onChange={(e) => setItems(e.target.value)}></input>
        <button onClick={insert}>Add</button>
      </div>
    </>
  );
};

export default Fun2;
