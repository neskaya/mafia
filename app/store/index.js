import React from "react";
import useGlobalHook from "use-global-hook";

import initialState from './initial';
import * as actions from "../actions";


const store = useGlobalHook(React, initialState, actions);


/**
 * @returns {function}
 */
export default useGlobalHook(React, initialState, actions);