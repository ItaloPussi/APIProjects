import React from "react"

function Pagination({getPage, page, maxPage}){

    return (
        <div className="pagination">
            {page>1 && <button className="previous" onClick={()=>getPage(page-1)}> &lt;- Previous</button>}
            {page < maxPage && <button className="next" onClick={()=>getPage(page+1)} >Next -&gt;</button>}
        </div>
    )
}

export default Pagination