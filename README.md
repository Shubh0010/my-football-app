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

# react-router-dom npm

- create routing configuration in app.js
- useRouteError: a hook given by react-router-dom
  - gives more details about error