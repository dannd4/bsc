// import Profile from "./1-components/profile";
// import CustomHooks from "./10-custom-hooks/custom-hooks";
// import Performance from "./11-performance/performance";
// import Context from "./12-context/context";
// import Redux from "./13-redux/redux";
// import ReactQuery from "./14-react-query/react-query";
// import ConditionalRendering from "./2-conditional-render/conditional-rendering";
// import RenderList from "./3-render-list/render-list";
// import Events from "./4-events/events";
// import Props from "./5-props/props";
// import State from "./6-state/state";
// import Reducer from "./7-reducer/reducer";
// import Effect from "./8-effect/effect";
// import Refs from "./9-refs/refs";
// import ShoppingCart from "./ex-shopping-cart/shopping-cart";
// import TodoAppRedux from "./ex-todo-app-redux/todo-app";
// import TodoApp from "./ex-todo-app/todo-app";

import { RouterProvider } from "react-router";
import router from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
