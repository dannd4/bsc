function Profile() {
  const user = {
    name: "Alice",
    avatar: "https://i.pravatar.cc/300",
  };

  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.avatar}
        alt="avatar"
        style={{
          width: 100,
          height: 100,
        }}
      />
    </>
  );
}

export default Profile;
