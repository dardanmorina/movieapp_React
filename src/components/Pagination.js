import React from 'react'

const Pagination = ({page, setPage}) => {

    const Previous = () => {
      if (page > 1) {
        setPage(page - 1);
      } 
    };
  
    const Next = () => {
        setPage (page => page += 1)
    };

    return(
        <>
            <div className="pagination">
                <button onClick={Previous}>{"< Prev"}</button>
                <p>{page}</p>
                <button onClick={Next}>{"Next >"}</button>
          </div>
        </>
    )
}   
export default Pagination