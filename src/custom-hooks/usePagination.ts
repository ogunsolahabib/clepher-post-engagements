import { useState, useEffect } from 'react';

const usePagination = (dataLength: number, initialPage = 1, pageSize = 10) => {

    const totalPages = Math.ceil(dataLength / pageSize);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [startIndex, setStartIndex] = useState((initialPage - 1) * pageSize);
    const [endIndex, setEndIndex] = useState(startIndex + pageSize - 1);

    useEffect(() => {
        setStartIndex((currentPage - 1) * pageSize);
        setEndIndex(startIndex + pageSize - 1);
    }, [currentPage, pageSize, startIndex]);

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const hasPreviousPage = currentPage > 1;
    const hasNextPage = currentPage < totalPages;

    return {
        currentPage,
        startIndex,
        endIndex,
        handlePageChange,
        hasPreviousPage,
        hasNextPage,
    };
};

export default usePagination;
