# Advantages of react

- Optimizes DOM manipulations.
- Uses Reconciliation Algorithm (React fiber) (came in react 16)
  - let's say if you have a DOM of res-container which has 15 cards.
  - React creates a *Virtual DOM* (a representation of an actual DOM).
    - React creats a object out of it, for example, it will create a object for *<Body/>*
  - Diff Algo
    - Finds the difference between old virtual DOM and new virtual DOM
    - then it applies that different on the actual DOM.
  - React fiber is a new way to create diff.
  - Taking diff of two virtual DOMs object is very faster than taking diff of two HTML actual DOMs.
  - resource to read more: https://github.com/acdlite/react-fiber-architecture

# Two types of Export/Import

- Default Export/Import

export default Component;
import Component from '';

- Named Export/Import

export const Component;
import {Component} from '';

# React Hooks

Normal JS utility functions

- 2 imp react hooks

 - useState() 
    - create State Variabled in react
    - maintains state of the component
    - how to create? 
      const [clubs] = useState(clubData);
    - how to update?
      const [clubs, setClubList] = useState(clubData);
      setClubList(updatedList);
    - whenever state variable changes, React re-renders the component.
    - never create a usestate outside the component
    - don't use useState inside a if condition, function or for loop.

 - useEffect()
    - used for API call.
    - useEffect(callback function, dependency array);
      - the callback function will trigger once component renders.
      - if no dependency array => useEffect is called on every render.
      - if dependency array is empty => then useeffect is called on only initial render.
      - if there is something in dependecy => then useeffect is called every time the dependency changes

# How to do API calls

Approach 1. page loads -> API hits -> render
Approach 2. page loags -> render -> API call -> Re-render

We follow approach 2 in react.


# Shimmer UI

- We load a fake page until the data is coming from API.

# Search (Input)

- To get the value we need to bind the value to state variable
- Since the value is bind to the state varibale, so it won't type anything, then we need to use onChange method
  - onChange={e => setsearchText(e.target.value)}

# Routing in web apps

- Server side routing (where we had different about.html/ and using a network call we get about.html page)
- Client side routing (the one react uses)

# react-router-dom npm

- create routing configuration in app.js
- useRouteError: a hook given by react-router-dom
  - gives more details about error
- Due to Links funcitonlity, react is called as single page application.

# class based component

- class extends React.Component
- has a render function that return jsx
- we can receive the props, we receive inside the constructor, we need to use super(props) too.
- *how to use state variables*
  - whenever an instance of a class is created, state is created.
  - using this.state inside constructor
  - *updating the state variable in class based component*
    - this.setState({})
- class based component lifecycle
  - 3 lifecycles
    - Mounting
    - Updating
    - Unmounting
  - react life cycle diagram, https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  - Mounting
    - contructor -> Render -> component did mount
    - if there is a child component, it's life cycle will be completed, than parent will be mounted.
    - in case of multiple child, 
      - child1 constructor
      - child1 render
      - child2 constructor
      - child2 render
      - child1 didMount
      - child2 didMount
    - 2 phases
      - render (contructor, render)
      - commit (componentDidMount), in this phase, react update the DOM and refs, in a single batch
    - componentDidMount is generally used to make API calls
  - Updating
    - componentDidUdpate, this is called later on on update cycle
      - on update cycle, render gets called first, and then componentDidUdpate
  - Unmounting
    - ComponentWillUnmount will get called once our component is going to replace with something else, foe example, if we navigate to another page.
    - use case:
      - we need to clear things, before clearing page
      - for example if we had a setTimeout, and we change page, that seTimeout won't get cleared automatically, and if you come to that page again, it will start another timeout
    - In functional component, the return function of useEffect acts as ComponentWillUnmount.