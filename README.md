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

 - useEffect()