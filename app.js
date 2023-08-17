import React from 'react';
import ReactDOM from 'react-dom/client';

const jsxHeading = <h1 id="heading">I love Manchester United 👹</h1>


//functional component

const HeadingComponent = () => (
    <h1>I am a functional component and I still love Manchester United 👹</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)
// root.render(jsxHeading);