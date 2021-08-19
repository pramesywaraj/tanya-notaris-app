import useSWR from "swr";
import fetcher from "hooks/fetcher";
const apiBaseURL = process.env.API_BASE_URL;

const useRequest = (path) => {
    if (!path) {
        throw new Error("Path is required");
    }

    const url = `${apiBaseURL}/${path}`;
    const { data, error, isValidating } = useSWR(url, fetcher, {
        refreshInterval: 600000,
        revalidateOnFocus: false,
    });

    if (error) {
        const { response } = error;
        return { data: null, error: response.data.errors };
    }

    return { data, error: null, isLoadingData: isValidating };
};

export default useRequest;
