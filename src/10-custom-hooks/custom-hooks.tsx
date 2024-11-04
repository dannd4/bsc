import useWindowSize from "./useWindowSize";

function CustomHooks() {
  const windowSize = useWindowSize();

  return (
    <div>
      Width: {windowSize.width} - Height: {windowSize.height}
    </div>
  );
}

export default CustomHooks;
