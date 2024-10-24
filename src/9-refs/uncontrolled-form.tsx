import React, { useRef } from "react";
import { FormValues } from "./types";

interface UncontrolledFormProps {
  onSubmit: (values: FormValues) => void;
}

export default function UncontrolledForm(props: UncontrolledFormProps) {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    props.onSubmit({
      username: usernameRef.current!.value,
      email: emailRef.current!.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" name="username" ref={usernameRef} />
      <input placeholder="Email" name="email" ref={emailRef} />
      <button>Submit</button>
    </form>
  );
}
