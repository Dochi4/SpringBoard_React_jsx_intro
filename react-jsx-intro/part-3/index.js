const App = () => (
  <div>
    <Person
      name="MIkeeeeeeee"
      age="12"
      hobbies={["keke", "swimming", "gardening"]}
    />
    <Person
      name="Care"
      age="43"
      hobbies={["bowling", "swimming", "gardening"]}
    />
    <Person name="Woddel" age="03" hobbies={["meow", "nfso", "buddle"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
