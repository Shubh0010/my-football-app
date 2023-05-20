const heading = React.createElement("h1", {
    id: "heading"
}, "Hello World from ReactJS!");

/**
 * 
 * <div id="parent">
    * <div id="child1">
        * <h1>H1</h1>
        * <h1>H2</h1>
    * </div>
    * <div id="child2"></div>
        * <h1>H2</h1>
        * <h1>H3</h1>
* </div>
 */

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