function Stats({numItems, items}) {
  if(!numItems)return <footer className="stats"><em>Start Adding Items to your packing list</em></footer>
  const numPacked = items.filter((item)=> item.packed).length
  const percentagePacked = Math.round((numPacked/numItems) * 100)
  return (
    <footer className="stats">
      <em>
      {percentagePacked ===100? "You got everything ready to go!":
     ` You have ${numItems} Items on your list and you already packed ${numPacked}(${percentagePacked}%)`}
     </em>
    </footer>
  );
}
export default Stats