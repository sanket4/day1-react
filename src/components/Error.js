import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops!!</h1>
      <h2>404 not found</h2>
      <h3>{err.data}</h3>
    </div>
  );
};

export default Error;
