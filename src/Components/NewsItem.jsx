import React , {useContext} from 'react'
import {ContextNews} from './ContextNewsProvider'
export default function NewsItem() {
    const {page,data,loading,changePage} = useContext(ContextNews);
     const {articles , totalResults} = data;
      const totalPages = Math.ceil(totalResults / 10);
     return (
       (loading || data.length === 0) ? (<div>{"true"}</div>):(
         <>
              <p>pages :  {page}/{totalPages}</p>
              <div className='grid-container'>
              {articles?.map((item) => 
              {
                 return  <div className="grid-item" key={item.url}>
                 <h3 className="news-title">{item.title}</h3>
                 <p className="news-description">{item.description}</p>
                 <div className="news-meta">
                   <span className="news-date">{new Date(item.publishedAt).toUTCString()}</span>
                   <span className="news-author">{item.author}</span>
                 </div>
                 <button className="read-more-btn">Read More</button>
               </div>
              } 
             )}
           </div>
           <section>
             { page === 1 ||  <button className='prev' onClick={changePage}>Previous</button>}
             {page<totalPages && <button className='next' onClick={changePage}>Next</button>}
           </section>
         </>
       )
     );
}
