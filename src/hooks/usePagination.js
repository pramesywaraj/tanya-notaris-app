import { useState } from "react";
import useSWR from "swr";
import fetcher from "hooks/fetcher";

const apiBaseURL = process.env.API_BASE_URL;
const PAGE_SIZE = 6;
const maxPageLayout = 5;

const makePaginationLayout = (currentPage, paginationArray = []) => {
    // Set pages obtained so far, start with 1 since we have currentPage
    let pagesCount = 1;
    // Maintain a copy of pagesCount.
    // Used to detect whether any new pages were added in the iteration
    let newPagesCount = 1;
    // Set beginning and end as currentPage
    let start = currentPage,
        end = currentPage;
    // Continue iteration till enough pages are obtained
    while (pagesCount < maxPageLayout) {
        if (end + 1 <= paginationArray.length) {
            // Ok to take one more page towards end
            end++;
            newPagesCount++;
        }
        if (start - 1 > 0) {
            //Ok to take one more page towards start
            start--;
            newPagesCount++;
        }
        /* 
        Break loop if no additional pages were 
        obtained in this iteration
        We have obtained maximum number of possible pages
        */
        if (newPagesCount == pagesCount) break;
        else pagesCount = newPagesCount;
    }

    return paginationArray.filter((item, index) => {
        if (index + 1 >= start && index + 1 <= end) return item;
    });
};

const usePagination = (endpoint, queryParams = "") => {
    const [selectedPage, setSelectedPage] = useState(1);
    const isPaged = (!queryParams && `&page=${selectedPage}`) || "";

    const { data, error, isValidating } = useSWR(
        `${apiBaseURL}/${endpoint}?${queryParams}per_page=${PAGE_SIZE}${isPaged}`,
        fetcher
    );

    const setPage = (page) => {
        setSelectedPage(page);
    };

    const items = data && !error ? data.data : [];
    const tempPaginationsItems = (data && !error && [...data.links].slice(1, -1)) || [];
    const paginationItems =
        (tempPaginationsItems.length !== 0 &&
            makePaginationLayout(data.current_page, tempPaginationsItems)) ||
        [];

    return {
        items,
        paginationItems,
        error,
        setPage,
        isLoadingData: isValidating,
    };
};

export default usePagination;
