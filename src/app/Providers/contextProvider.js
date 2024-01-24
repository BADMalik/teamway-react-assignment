import { createContext } from 'react';
import { initialContextState } from '../actions/questionActions';


export const AppContext = createContext(initialContextState);