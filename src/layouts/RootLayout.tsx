import {
  Outlet,
  Link,
  NavLink,
  useNavigate,
  useLocation,
  useNavigation,
} from "react-router";

export default function RootLayout() {
  const navigate = useNavigate();

  const navigation = useNavigation();
  const isNavigating = !!navigation.location;

  const location = useLocation();
  console.log(location);

  return (
    <>
      {isNavigating && <h1>Loading...</h1>}
      <div className="flex flex-col min-h-screen">
        <div className="w-full h-12">Header</div>
        <div className="flex w-full">
          <div className="flex flex-col gap-8 w-36">
            {/* <Link to="/">Home</Link>
            <Link to="/react-query">React Query</Link>
            <Link to="/redux">Redux</Link> */}

            {/* <NavLink to="/" className={({ isActive }) => (isActive ? "text-orange-600" : "text-blue-400")}>
            Home
            </NavLink>
            <NavLink
              to="/react-query"
              className={({ isActive }) => (isActive ? "text-orange-600" : "text-blue-400")}
            >
              React Query
            </NavLink>
            <NavLink
              to="/redux"
              className={({ isActive }) => (isActive ? "text-orange-600" : "text-blue-400")}
            >
              Redux
            </NavLink> */}

            <button
              className="btn"
              onClick={() => navigate("/", { state: "Hello" })}
            >
              Home
            </button>
            <button className="btn" onClick={() => navigate("/react-query")}>
              React Query
            </button>
            <button className="btn" onClick={() => navigate("/redux")}>
              Redux
            </button>
          </div>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
