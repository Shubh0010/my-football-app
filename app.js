import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {
    id: "heading"
}, "Hello World from ReactJS!");

const demo = React.createElement('div', {id: 'parent'}, [
    React.createElement('div', {id:'child1'}, [
        React.createElement('h1', {}, 'H1'),
        React.createElement('h1', {}, 'H2'),
    ]),
    React.createElement('div', {id:'child1'}, [
        React.createElement('h1', {}, 'H1'),
        React.createElement('h1', {}, 'H2'),
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(demo);