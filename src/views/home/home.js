import React,{useState,useEffect} from "react";
import axios from "axios";
import NewsCard from "../../components/newsCard/newsCard";
import './home.css';


function Home(){
    const [news,setNews] = useState([]);
    const [newsTopic,setNewsTopic] = useState('Indian Economy');
    

    async function loadNews()
    {
        try{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${newsTopic}&from=2023-12-17&to=2023-12-17&sortBy=popularity&apiKey=318c45d20f9e48d2baeb8e9edec8de2e`)
        setNews(response.data.articles);
        }

        catch(error){
            console.log(error);
        }
    }


    useEffect(()=>{
        loadNews()
    },[newsTopic])

    return(
        <>
        <h1 className="home-title">Current Affairs🌏🗞️</h1>

        <input type="text" className="input-box" value={newsTopic} onChange={(e)=>{
            setNewsTopic(e.target.value);
        }} />

       <div className="news-card-container">
        {
            news.map((newsArticle,index)=>{
                const {author,description,publishedAt,source,title,url,urlToImage} = newsArticle;
                return(
                   <NewsCard author={author} description={description} publishedAt={publishedAt}
                     source={source} title={title} url={url} urlToImage={urlToImage} key={index}/>
                );
            })
        }
        </div>
        </>
    );
}

export default Home;