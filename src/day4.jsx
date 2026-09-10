import { useState } from "react";

function Day4() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Hello " + name);
  }

  return (
    <div>
      <h1>Day 4: Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Day4;