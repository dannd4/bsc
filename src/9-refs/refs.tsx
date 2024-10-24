import { useRef, useEffect } from "react";
import ControlledForm from "./controlled-form";
import UncontrolledForm from "./uncontrolled-form";
import { FormValues, ToggleRef } from "./types";
import ToggleSwitch from "./toggle-switch";

export default function Refs() {
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadRef = useRef<HTMLInputElement>(null);
  const toggleRef = useRef<ToggleRef>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Ref</h1>
      <hr />

      <h3>Auto focus</h3>
      <input type="text" ref={inputRef} />

      <hr />

      <h3>Upload file</h3>
      <input type="file" hidden ref={uploadRef} />
      <button onClick={() => uploadRef.current!.click()}>Upload file</button>

      <hr />

      <h3>Controlled Form</h3>
      <ControlledForm onSubmit={handleSubmit} />

      <hr />

      <h3>Uncontrolled Form</h3>
      <UncontrolledForm onSubmit={handleSubmit} />

      <hr />

      <h3>Expose API</h3>
      <ToggleSwitch ref={toggleRef} />
      <button onClick={() => toggleRef.current?.toggle()}>Toggle Switch</button>
    </div>
  );
}
