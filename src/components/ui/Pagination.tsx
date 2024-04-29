import { useEffect, useState } from "react";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import DoubleArrowLeft from "../icons/DoubleArrowLeft";
import DoubleArrowRight from "../icons/DoubleArrowRight";
import Input from "./Input";
import Button from "./Button";


export default function Pagination({ dataLength, pageSize = 10, handlePageChange, currentPage, hasPreviousPage, hasNextPage }) {

    const totalPages = Math.ceil(dataLength / pageSize);

    const [inputValue, setInputValue] = useState(currentPage);



    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { value } = e.target;
        const valueToUse = !value ? 1 : +value > totalPages ? totalPages : +value < 1 ? 1 : value;
        setInputValue(valueToUse);
        handlePageChange(+valueToUse);
    }


    useEffect(() => {
        setInputValue(currentPage)
    }, [currentPage])

    return (
        <div className="flex items-center justify-center gap-4 py-3.5">
            <Button className="btn-circle" size="sm" disabled={currentPage === 1} onClick={() => handlePageChange(1)}><DoubleArrowLeft /></Button>
            <Button className="btn-circle" size="sm" disabled={!hasPreviousPage} onClick={() => handlePageChange(currentPage - 1)}><ChevronLeft />
            </Button>
            <Button className="btn-circle" size="sm" disabled={!hasNextPage} onClick={() => handlePageChange(currentPage + 1)}>
                <ChevronRight />
            </Button>
            <Button className="btn-circle" size="sm" disabled={!hasNextPage} onClick={() => handlePageChange(totalPages)}>
                <DoubleArrowRight />
            </Button>
            <span className="flex items-center gap-1">
                <div>Page</div>
                <strong>{currentPage} of {totalPages}</strong>
            </span>
            <span className="hidden items-center gap-1 md:flex">
                Go to page:
                <Input value={inputValue} onChange={onInputChange} type="number" className="input w-12 p-1 input-sm input-bordered focus:outline-offset-0" />
            </span>
        </div>
    );
}




