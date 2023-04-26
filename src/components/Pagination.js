import React from 'react'

const Pagination = ({page, setPage}) => {

    const Previous = () => {
      if (page !== 1) {
        setPage(page - 1);
      } else {
        setPage(page);
      }
    };
  
    const Next = () => {
      if (page < 10) {
        setPage(page + 1);
      }
    };

    return(
        <>
            <div className="pagination">
                <button onClick={Previous}>{"< Prev"}</button>
                <button onClick={Next}>{"Next >"}</button>
          </div>
        </>
    )
}   
export default Pagination