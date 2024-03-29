import { createContext, useContext, useReducer } from "react";

import {
    LOGGED_IN,
    LOGGED_OUT,
    USER_AVAILABLE,
    SCREEN_LOADER_SHOW,
    SCREEN_LOADER_HIDE,
} from "constants/reduxConst";
import { removeCookies, createCookies } from "Utils";

const AuthContext = createContext(null);

export function AuthWrapper({ children }) {
    let initialState = {
        isLoggedIn: false,
        isScreenLoaderShow: false,
        userData: null,
    };

    let reducer = (state, action) => {
        switch (action.type) {
            case LOGGED_IN: {
                const { userData, token } = action.payload;

                if (!state.isLoggedIn) {
                    if (token) createCookies("access_token", token);
                    if (userData) createCookies("user", JSON.stringify(userData));
                }

                return {
                    ...state,
                    isLoggedIn: true,
                    userData,
                };
            }
            case LOGGED_OUT: {
                removeCookies("access_token");
                removeCookies("user");

                return {
                    ...state,
                    ...initialState,
                };
            }
            case USER_AVAILABLE: {
                const { userData } = action.payload;

                return {
                    ...state,
                    isLoggedIn: true,
                    userData,
                };
            }
            case SCREEN_LOADER_SHOW: {
                return {
                    ...state,
                    isScreenLoaderShow: true,
                };
            }
            case SCREEN_LOADER_HIDE: {
                return {
                    ...state,
                    isScreenLoaderShow: false,
                };
            }
            default:
                break;
        }
    };

    let [state, dispatch] = useReducer(reducer, initialState);

    return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
    return useContext(AuthContext);
}
