import React, {useEffect, useRef, useState} from 'react'
 export const ContextNews = React.createContext(null);

export default function ContextNewsProvider({children}){
  
const [country,setCountry] = useState("us"); 
const [page,setPage] = useState(1);
const [category,setCategory] = useState('general');
const [data,setData] = useState([]);
const [loading,setLoading] = useState(false);
const r = useRef(null);

 


useEffect(()=>{
  console.count("useEffect");
  r.current = new AbortController();
  const getNews = async()=>{
    try{
      
      setLoading(true);
      let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7633ee9404a548e3bc81cf144a6a6f0f&page=${page}&pageSize=10`,{signal:r.current.signal});
      if(!response.ok) {throw new Error("something went wrong")}
      let result = await response.json();
      setData(result);
      
    }catch(error){
     if(error.name === 'Abort') return;
  
    }

    finally{
      setLoading(false);
    } 
  }
  getNews();
  return ()=>{
    r.current.abort();
  }
},[country,page,category]);
 const changeCountry =(e)=>{
  setCountry(e.target.innerText.toString());
 }
 const changeCategory=(e)=>{
  setCategory(e);
 }
 const changePage =(e)=>{
  if(e.target.innerText ==='Next'){
    setPage(page+1);
  }
  else if(e.target.innerText ==='Previous')
  setPage(page-1);
 }
 const value = {
  data,
  page,
  loading,
  changeCountry,
  changePage,
  changeCategory
 }

  return (
    <ContextNews.Provider value={value}>{children}</ContextNews.Provider>
  )
}
