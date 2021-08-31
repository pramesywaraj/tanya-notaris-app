import { useState } from "react";
import axios from "axios";
const apiBaseURL = process.env.API_BASE_URL;

export default function usePost() {
    const [isRequesting, setIsRequesting] = useState(false);
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);

    const handlePost = async (url = "", payload = {}, options = {}) => {
        try {
            setIsRequesting(true);

            const { data, success, errors } = await axios.post(
                `${apiBaseURL}/${url}`,
                { ...payload },
                {
                    headers: {
                        "Content-Type": "application/json",
                        ...options?.headers,
                    },
                    ...options,
                }
            );

            if (!success) throw new Error(errors);

            setData(data);
            setIsRequesting(false);
        } catch (e) {
            console.error("ERR::", e);
            let message = e.message || "";

            if (Object.keys(e).length > 0) message = e[Object.keys(e)[0]][0];

            setErrors(message);
            setIsRequesting(false);
        }
    };

    return {
        data,
        errors,
        isRequesting,
        handlePost,
    };
}
