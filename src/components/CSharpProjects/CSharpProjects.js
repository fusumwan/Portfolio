import React, { useRef, useMemo } from 'react';
import { useTable,usePagination  } from 'react-table';
//npm install react-table
import './CSharpProjects.css'; 
import './bootstrap-scoped.css';


function CSharpProjects() {
  const gridViewRef = useRef(null);
  // Sample data (replace with your actual data)
  const data = useMemo(() => [
    {
      id: '1',
      name: (
        <div>
        <p>PCCW 3G Retention</p> 
        <p>(Asp.net C# Web development)</p>
        <a href='https://github.com/fusumwan/CSharpWebProject/tree/main/RETENTION_ZIP'>download</a>
        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/GFFQY5jf9KM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="PCCW 3G Retention(Asp.net C# Web development)"
          ></iframe>
          <table>
            <tr>
            <td  style={{ width: '300px' }}>
            <p>This project represents a major milestone in my career and showcases a blend of innovative technology and strategic thinking.</p>
<p>From 2008 to 2012, I held a pivotal role in developing key systems that bolstered the operational efficiency of PCCW's consumer group call centers.</p> 
<p>Notably, I independently designed and executed the PCCW 3G Mobile Retention Order System, a substantial and complex project during this period.</p>
            </td>
            </tr>
          </table>
          

        </div>
      )
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
    { columns, data, initialState: { pageIndex: 0, pageSize: 2 } }, // Set initial page size
    usePagination
  );

  return (
    <div className="samples-container"> {/* New container div */}
      <section className="react-samples">
        <div className="gridview-container">
          <table ref={gridViewRef} {...getTableProps()} className="table" style={{ width: '100%' }}>
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
              {[2,3].map(pageSize => (
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

export default CSharpProjects;
  