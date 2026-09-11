function Welcome(props) {
  return <h2>Hello, {props.name}</h2>;
}

function Day2() {
  return (
    <div>
      <h1>Day 2: Components and Props</h1>
      <Welcome name="Aditi" />
      <Welcome name="React Student" />
    </div>
  );
}

export default Day2;