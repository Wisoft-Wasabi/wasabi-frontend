import {useTable} from "react-table";

// const TableSheet = styled.div``;
// const TableHead = styled.div``;
// const Header = styled.div``;
// const ThCell = styled.div``;
// const TdCell = styled.div``;

const SignUpList = ({columns, data}) => {
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(header => (
                        <tr {...header.getHeaderGroupProps()}>
                            {header.headers.map(col => (
                                <th {...col.getHeaderProps()}>{col.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default SignUpList;