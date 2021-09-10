import { useState } from "react";
import axios from "axios";
const apiBaseURL = process.env.API_BASE_URL;

export default function usePost() {
    const [isRequesting, setIsRequesting] = useState(false);
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);

    const handlePost = async (url = "", payload = {}, options = {}, callback) => {
        try {
            setIsRequesting(true);

            const {
                data: { success, data, errors },
            } = await axios.post(
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
            if (callback) callback(data);

            setData(data);
            setIsRequesting(false);
        } catch (e) {
            let message = e.message || "";

            if (e.response) {
                const {
                    data: { errors },
                } = e.response;

                message = errors.message;
            }
            if (Object.keys(e).length > 0 && !e.response) message = e[Object.keys(e)[0]][0];

            console.error("ERR::", e.message);

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
