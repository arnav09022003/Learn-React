const h1 = React.createElement("h1", {}, "This is a h1");
const h2 = React.createElement("h2", {}, "This is a h2");
const child = React.createElement("div", {id : "child"}, [h1, h2]);
const parent = React.createElement("div", {id : "parent"}, child);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);