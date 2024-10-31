import React from "react";
import { ThemeProvider } from "./theme.context";
import Controls from "./controls";
import Button from "./button";

const Context: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="p-4">
        <h2>Context API Demo</h2>
        <Controls />
        <div className="flex gap-2">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Context;
