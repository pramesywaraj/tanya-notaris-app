import { setCookie, destroyCookie, parseCookies } from "nookies";

export const parseCurrency = (value) => `Rp ${value.toLocaleString("id")}`;
export const imageLoader = ({ src }) => src;

// Cookies related
export const createCookies = (name, value) => {
    return setCookie(null, name, value, {
        maxAge: 2 * 24 * 60 * 60,
        path: "/",
    });
};

export const removeCookies = (name) => {
    return destroyCookie(null, name);
};

export const getCookies = (param) => {
    if (param) {
        return parseCookies(param);
    }
    return parseCookies();
};
