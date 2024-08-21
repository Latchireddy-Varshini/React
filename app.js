import React  from "react";
import ReactDOM from "react-dom/client";

 //react element
// const jsxheading=<h1 className="heading">Welcome to React</h1>
    

//react component
// const HeadingComponent=()=>{
//    return <h1>Functional Component</h1>
// };
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);


//Component Composition
const Title=()=>(
    <h1>Namaste React using Jsx</h1>
);
const HeadingComponent=()=>(
    <div id="container">
    <Title/>
    <h1>Functional Component</h1>
    </div>
);
 const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);