import axios from "axios";

const apiBaseURL = process.env.API_BASE_URL;

export const fetcher = async (url) => {
    const { data } = await axios.get(`${apiBaseURL}/${url}1`);

    if (data.errors || !data) {
        const error = new Error("An error occurred while fetching the data.");
        // Attach extra info to the error object.
        error.info = data.errors;
        error.status = data.status;
        throw error;
    }

    return data;

    // if (response.status === 401) throw new eror

    // if (!data || statusText !== "OK") throw data;

    // await axios.get(`${apiBaseURL}/${url}`).then(async (response) => {
    //     console.log("CHECK RESPONSE", response);
    //
    //     return response;
    // });
};
