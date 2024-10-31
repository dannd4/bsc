// HOCs dễ gây bối rối: Việc sử dụng nhiều HOCs cho một component dễ dẫn đến tình trạng không biết props này là do HOC nào cung cấp.
// Trùng lặp tên props: Nếu bạn có 2 HOCs sử dụng cùng một tên cho prop, chúng sẽ bị ghi đè lên nhau.

import React from "react";

interface WindowSize {
  width: number;
  height: number;
}

interface WithWindowSizeProps {
  windowSize: WindowSize;
}

const withWindowSize = <P extends WithWindowSizeProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  return class WithWindowSize extends React.Component<
    Omit<P, keyof WithWindowSizeProps>,
    WindowSize
  > {
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
      return (
        <WrappedComponent
          {...(this.props as P)}
          windowSize={this.state}
        />
      );
    }
  };
};

export default withWindowSize;
