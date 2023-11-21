import React, { useRef, useMemo } from 'react';
import { useTable,usePagination  } from 'react-table';
//npm install react-table
import './AIProjects.css'; 
import './bootstrap-scoped.css';


function AIProjects() {
  const gridViewRef = useRef(null);
  // Sample data (replace with your actual data)
  const data = useMemo(() => [
    {
      id: '1',
      name: (
        <div>
        <p>AI Stock Prediction</p> 
        <p>(Regression & Long-term short-term memory network)</p>
        <a href='https://github.com/fusumwan/aistockprediction'>download</a>
        </div>
      ),
      description: (
        <div>
          <table  className="table ai-projects-table">
            <tr>
              <td style={{ width: '150px' }}>
              The project aims to use regression and long-term short-term memory network (LSTM) on S&P500 historical stock price data to predict future stock prices during COVID-19. This report is concerned with 4 aspects which are a thorough discussion of previous research, the novelty of method, methodology, and evaluation metric.

              </td>
            </tr>
          </table>
        </div>
      )
    },
    {
      id: '2',
      name: (
        <div>
        <p> TensorFlow & Spring Boot project</p> 
        <p>(Showcases)</p>
        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/hNGmDxCtbS0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Showcases: TensorFlow + Java + Spring Boot+ Hibernate"
          ></iframe>
        </div>
      )
    },
    {
      id: '3',
      name: (
        <div>
        <p>A Search for Improved Performance in Regular Expressions(Genetic programming)</p> 
        <p>(Machine learning technology)</p>
        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/ae85-c7-xZI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="A Search for Improved Performance in Regular Expressions(Genetic programming)"
          ></iframe>
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

export default AIProjects;
  