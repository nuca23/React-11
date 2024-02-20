import React from "react";
import ReactDOM from 'react-dom/client';
import Listitems from "./Listitems";



    function App() { 
      const items =["appple","banana","orange","grape","kiwi"]; 
   { 
      return (
           
        <React.Fragment>
            <div>
                <h1>let fruits</h1>
                <Listitems items={items}/>
            </div>
        </React.Fragment>

    );}  
   }

    var root = document.getElementById('root');
    ReactDOM.createRoot(root).render(<App />);

















