const Tweet = (props) => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
  };
  return (
    <ul style={mystyle}>
      <li>Username:{props.username}</li>
      <li>Date:{props.date}</li>
      <li>Message:{props.message}</li>
    </ul>
  );
};
