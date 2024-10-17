import Avatar from "./avatar";

interface ProfileProps {
  name: string;
  avatar: string;
  isAdmin: boolean;
}

export default function Profile({ name, avatar, isAdmin }: ProfileProps) {
  return (
    <>
      <h3>
        Name: {name}
        {isAdmin && <span>(Admin)</span>}
      </h3>
      <Avatar src={avatar} />
    </>
  );
}
