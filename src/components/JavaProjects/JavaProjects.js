import React, { useRef, useMemo } from 'react';
import { useTable,usePagination  } from 'react-table';
//npm install react-table
import './JavaProjects.css'; 
import './bootstrap-scoped.css';


function JavaProjects() {
  const gridViewRef = useRef(null);
  // Sample data (replace with your actual data)
  const data = useMemo(() => [
    {
      id: '1',
      name: (
        <div>
        <p>Order Table</p> 
        <p>(Spring Boot Project)</p>
        <a href='https://github.com/fusumwan/JavaWebAppProject/tree/main/ordertableweb' target="_blank" rel="noopener noreferrer">download</a>
        <table>
          <tr>
            <td style={{ width: '350px' }}>
            These projects are showcased on my YouTube channel.
            </td>
          </tr>
        </table>
        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/bA9zRNYOW7Y"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Order Table (Spring Boot Project) Video"
          ></iframe>
        </div>
      )
    },
    {
      id: '2',
      name: (
        <div>
        <p>Order Table</p> 
        <p>(Spring Boot & Security)</p>
        <a href='https://github.com/fusumwan/JavaWebAppProject/tree/main/ordertableweb' target="_blank" rel="noopener noreferrer">download</a>

        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/-naOyhX9buI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Order Table (Spring Boot & Security)"
          ></iframe>
        </div>
      )
    },
    {
      id: '3',
      name:  (
        <div>
        <p>Spring Boot Security JWT Authentication</p> 
        <p>(Without WebSecurityConfigurerAdapter) (part 1)</p>
        <a href='https://github.com/fusumwan/JavaWebAppProject/tree/main/ordertableweb' target="_blank" rel="noopener noreferrer">download</a>

        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/jaebecKtZos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Spring Boot Security JWT Authentication (Without WebSecurityConfigurerAdapter) (part 1)"
          ></iframe>
        </div>
      )
    },
    {
      id: '4',
      name:  (
        <div>
        <p>Spring Boot Security JWT Authentication</p> 
        <p>(Without WebSecurityConfigurerAdapter) (part 2)</p>
        <a href='https://github.com/fusumwan/JavaWebAppProject/tree/main/ordertableweb' target="_blank" rel="noopener noreferrer">download</a>

        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/pyC_9Y_SsEg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Spring Boot Security JWT Authentication (Without WebSecurityConfigurerAdapter) (part 2)"
          ></iframe>
        </div>
      )
    },
    {
      id: '4',
      name:  (
        <div>
        <p>Spring Boot Security JWT Authentication</p> 
        <p>(Without WebSecurityConfigurerAdapter) (part 2)</p>
        <a href='https://github.com/fusumwan/JavaWebAppProject/tree/main/ordertableweb' target="_blank" rel="noopener noreferrer">download</a>

        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/pyC_9Y_SsEg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Spring Boot Security JWT Authentication (Without WebSecurityConfigurerAdapter) (part 2)"
          ></iframe>
        </div>
      )
    },
    {
      id: '5',
      name:  (
        <div>
        <p>English learning platform</p> 
        <p>String Boot: Export Excel</p>
        <a href='https://github.com/fusumwan/JavaWebAppProject/tree/main/sentence' target="_blank" rel="noopener noreferrer">download</a>

        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/D56h9qZHSJ4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="String Boot: Export Excel"
          ></iframe>
        </div>
      )
    },
    {
      id: '6',
      name:  (
        <div>
        <p>English learning platform</p> 
        <p>String Boot: Export PDF</p>
        <a href='https://github.com/fusumwan/JavaWebAppProject/tree/main/sentence' target="_blank" rel="noopener noreferrer">download</a>

        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/DDUb79xR8EE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="String Boot: Export PDF"
          ></iframe>
        </div>
      )
    },
    {
      id: '7',
      name:  (
        <div>
        <p>English learning platform</p> 
        <p>Spring tutorials: Export CSV</p>
        <a href='https://github.com/fusumwan/JavaWebAppProject/tree/main/sentence' target="_blank" rel="noopener noreferrer">download</a>

        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/3xcHBlXWIJg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Spring tutorials: Export CSV"
          ></iframe>
        </div>
      )
    },
    {
      id: '8',
      name:  (
        <div>
        <p>Spring Boot work with Hadoop</p> 
        <p>(Big data mining and analytics)</p>

        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/bBCpzFGKuW8"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Spring Boot work with Hadoop"
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

export default JavaProjects;
  