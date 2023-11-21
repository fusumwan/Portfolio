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
      name: (
        <div>
        <p>Personal Portfolio</p> 
        <p>(ReactJS Website)</p>
        <a href='https://fusumwan.github.io/portfolio/'  target="_blank" rel="noopener noreferrer">Portfolio</a>
        </div>
      ),
      description: (
        <div>
          <table  className="table">
            <tr>
              <td>
              <img src={process.env.PUBLIC_URL + '/Images/portfolio.png'} style={{ width: "50%", height: "50%" }} alt="Profile" />
              </td>
            </tr>
            <tr>
              <td style={{ width: '350px' }}>
              This portfolio, crafted with ReactJS, demonstrates my expertise over 3 years in Java, Spring MVC, Hibernate, and 6 years in ASP.NET WebForms C#. It highlights my contributions to robust technology solutions and a keen interest in AI and Machine Learning, reflecting my commitment to leveraging technology for impactful outcomes. As an Analyst Programmer, I specialize in developing efficient web applications, with a focus on optimizing organizational functionality. Please explore my showcased work for insights into my skills and experiences.</td>
            </tr>
          </table>
        </div>
      )
    },
    {
      id: '2',
      name: <a href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onShowBgVideo(); }}>Show Background Video</a>,
      description: 'This program is showing a Background Video program'
    },
    {
      id: '3',
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
    { columns, data, initialState: { pageIndex: 0, pageSize: 1 } }, // Set initial page size
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
              {[1, 2].map(pageSize => (
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
