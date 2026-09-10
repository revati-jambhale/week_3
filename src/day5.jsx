function Day5() {
  const fruits = ["Apple", "Mango", "Banana"];

  return (
    <div>
      <h1>Day 5: Fruits List</h1>

      {fruits.length > 0 ? (
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      ) : (
        <p>No fruits found</p>
      )}
    </div>
  );
}

export default Day5;