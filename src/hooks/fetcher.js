import axios from "axios";

const fetcher = async (url, options) => {
    try {
        const res = await axios.get(url, { ...options });

        if (!res.data) throw new Error("Data kosong, silahkan hubungi admin.");
        return res.data;
    } catch (e) {
        console.error("Error Happened", e.message);
    }
};

export default fetcher;
