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