import React from "react";	
//import ReactDOM from "react-dom"  // before it is work but for new version following statement use.
import ReactDOM from "react-dom/client";
   

    //above heading using JSX
    const heading = (
         <h1 id="title" key="h1">
            Namaste React
            </h1>
    );

    // React component
    // functional component
    const HeaderComponent =  () => {
       return (
        <div>
            {heading}
            <h1>Namste React functional Component</h1>
             <h2>This is a H2 tag</h2>
             </div>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById("root")); 

    root.render(<HeaderComponent/>);
