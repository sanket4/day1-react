import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => <h1> TitleComponent</h1>;

const FunctionalComponent = () => (
  <div id="sad">
    <TitleComponent />

    <h1> FunctionalComponent</h1>
    {TitleComponent()}
    <TitleComponent></TitleComponent>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalComponent />);
