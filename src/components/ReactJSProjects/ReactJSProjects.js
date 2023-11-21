import React, { useRef, useMemo } from 'react';
import { useTable,usePagination  } from 'react-table';
//npm install react-table
import './ReactJSProjects.css'; 
import './bootstrap-scoped.css';

//npm install bootstrap


function ReactJSProjects({ onShowBgVideo, onShowLoadingAnimation }) {
  const gridViewRef = useRef(null);
  // Sample data (replace with your actual data)
  const data = useMemo(() => [
    {
      id: '1',
      name: <a href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onShowBgVideo(); }}>Show Background Video</a>,
      description: 'This program is showing a Background Video program'
    },
    {
      id: '2',
      name: <a href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onShowLoadingAnimation(); }}>Show Loading Animation</a>,
      description: 'This program is showing a Loading Animation'
    }
  ], []);

  // Define columns with custom render functions
  const columns = useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Description',
      accessor: 'description',
    }
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we use page
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 5 } }, // Set initial page size
    usePagination
  );

  return (
    <div className="samples-container"> {/* New container div */}
      <section className="react-samples">
        <div className="gridview-container">
          <table ref={gridViewRef} {...getTableProps()} className="table nowrap" style={{ width: '100%' }}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map(row => { // Use 'page' instead of 'rows'
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {'>>'}
            </button>{' '}
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReactJSProjects;
