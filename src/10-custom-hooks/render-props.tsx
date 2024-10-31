import React from "react";

interface WindowSizeState {
  width: number;
  height: number;
}

interface WindowSizeProps {
  children: (size: WindowSizeState) => React.ReactNode;
}

class WindowSize extends React.Component<WindowSizeProps, WindowSizeState> {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  render() {
    return this.props.children(this.state);
  }
}

// const WindowSize: React.FC<WindowSizeProps> = ({ children }) => {
//   const [windowSize, setWindowSize] = React.useState<WindowSizeState>({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });
//
//   React.useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };
//
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//
//   return children(windowSize);
// };

export default WindowSize;
