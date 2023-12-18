import React,{useState,useEffect} from "react";
import axios from "axios";

function Home(){
    const [news,setNews] = useState([]);
    
    async function loadNews(){
        const response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2023-12-17&to=2023-12-17&sortBy=popularity&apiKey=318c45d20f9e48d2baeb8e9edec8de2e')
        setNews(response.data.articles);
    }

    useEffect(()=>{
        loadNews()
    },[]);
    return(
        <div className='news-card'>
        {
            news.map((newsArticle,index)=>{
                const {author,content,description,publishedAt,source,title,url,urlToImage} = newsArticle;
                return(
                 <div>
                    <img src={urlToImage} alt='' className="article-image"/>
                 </div>
                );
            })
        }
        </div>
    );
}

export default Home;