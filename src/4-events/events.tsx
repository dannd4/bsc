export default function Events() {
  // Viết hàm xử lý sự kiện trong component
  const handleClick = () => {
    alert("clicked");
  };

  const handleShowMessage = (message: string) => {
    alert(message);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
  };

  return (
    <div>
      <h1>Events</h1>

      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={() => {
          alert("Cliked");
        }}
      >
        Click Me
      </button>

      <button onClick={() => handleShowMessage("Hello React")}>Show Message</button>

      <hr />

      <input placeholder="Username" onChange={handleChange} />
    </div>
  );
}
