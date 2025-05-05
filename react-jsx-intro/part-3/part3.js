const Person = (props) => {
  const legal = props.age >= 18;
  const name = props.name.length > 6 ? props.name.slice(0, 6) : props.name;
  return (
    <div>
      <p>Name:{name}</p>
      <p>Age:{props.age}</p>
      <p>Vote Status:{legal ? "please go vote" : "you must be 18"}</p>
      Hobbies:
      <ul>
        {props.hobbies.map((hobbies) => (
          <li>{hobbies}</li>
        ))}
      </ul>
    </div>
  );
};
