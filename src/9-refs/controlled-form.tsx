import React, { useState } from "react";
import { FormValues } from "./types";

interface ControlledFormProps {
  onSubmit: (values: FormValues) => void;
}

export default function ControlledForm(props: ControlledFormProps) {
  const [values, setValues] = useState<FormValues>({ username: "", email: "" });

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    props.onSubmit(values);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values) => ({
      ...values,
      [evt.target.name]: evt.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" name="username" onChange={handleChange} />
      <input placeholder="Email" name="email" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}
