import { Outlet, Link, useLocation } from "react-router-dom";

function Root() {
  let location = useLocation();

  console.log(location.pathname);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            React Hooks & React Memo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={`useState`}>
                  useState
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`useEffect`}>
                  useEffect
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`useRef`}>
                  useRef
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`useContext`}>
                  useContext
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`useReducer`}>
                  useReducer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`memo`}>
                  memo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`useMemo`}>
                  useMemo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`useCallback`}>
                  useCallback
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {location.pathname === "/" ? (
        <div
          style={{ height: `calc(100vh - 56px)` }}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <div style={{ fontWeight: "400" }} className="display-1">
              React Hooks & React Memo
            </div>
            <hr />
            <h2
              style={{ fontWeight: "400" }}
              className="text-center text-secondary"
            >
              Click on a topic above to view its contents.
            </h2>
          </div>
        </div>
      ) : (
        <div id="detail" className="container mt-4">
          <Outlet />
        </div>
      )}
    </>
  );
}

export default Root;
