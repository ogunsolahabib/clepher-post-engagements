import React from "react"
import Card, { CardBody } from "./Card";

type TableProps = {
    columns: {
        title: React.ReactNode;
        accessor: string | ((data: any) => React.ReactNode);
        width?: string
    }[]
    data: any[]
} & React.HTMLAttributes<HTMLTableElement>

export default function Table({ columns, data }: TableProps) {
    return <Card className="card overflow-x-auto md:h-[60vh]">
        <CardBody>
            <table className="table table-sm bg-base-100 px-6">
                <thead className="sticky top-0 z-[1] bg-base-100">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={typeof column.title === "string" ? column.title : index} style={column.width ? { width: column.width } : undefined}>{column.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((rowData, index) => (
                        <tr key={rowData.id ?? index}>
                            {columns.map((column, index) => {
                                const key = typeof column.title === "string" ? column.title : index;
                                const style = column.width ? { width: column.width } : undefined;
                                if (typeof column.accessor === "function") {
                                    return (
                                        <td key={key} style={style}>{column.accessor(rowData)}</td>
                                    )
                                } else {
                                    return <td key={key} style={style}>{rowData[column.accessor]}</td>
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </CardBody>

    </Card>
}