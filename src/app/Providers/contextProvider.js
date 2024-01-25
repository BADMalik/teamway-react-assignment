import React, { createContext } from 'react';
import { initialContextState } from '../actions/questionActions';


export const AppContext = createContext(initialContextState);
export const useAppContext = ()=> React.useContext(AppContext)