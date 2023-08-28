function Item({ item, handleDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => {
          onToggleItems(item.id);
        }}
        value={item.packed}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => handleDeleteItems(item.id)}
        style={{ color: "red", fontSize: "26px" }}
      >
        &times;
      </button>
    </li>
  );
}

export default Item