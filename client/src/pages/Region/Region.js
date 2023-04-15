import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Cardsearch from '../../component/Cardsearch'
import "./Region.scss"
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import Spinner from '../HomePage/Spinner'

export default function Region() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const url=window.location.href.toString().split("regionnews/")[1].toUpperCase();
    var urlf=""
    console.log(url)
    if(url=="WORLD"){
        urlf="https://amiteshpatel.pythonanywhere.com/predict_api/0"
    }
    else if(url=="LOCAL"){
        urlf="https://amiteshpatel.pythonanywhere.com/local"
    }
    else{
        urlf="https://amiteshpatel.pythonanywhere.com/predict_api/1"
    }
    const fetchdata = async () => {
        setLoading(false);
        await fetch(urlf)
          .then((response) => {
            return response.json();
          })
          .then((res) => {
            const data = Object.values(res);
            var temp = [];
    
            for (let i = 0; i < data.length; i++) {
              temp.push(data[i]);
            }
            setPosts([...temp]);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
    
      useEffect(() => {
        fetchdata();
      }, []);
    
      useEffect(() => {
      }, [posts]);
  return (
    
    <div className='region'>
    {loading && <Spinner />}
    <Navbar/>
    <h1 className='w3-xxxlarge d-flex align-items-center justify-center'>{`${url} NEWS`}</h1>
    <Cardsearch/>
    <Cardsearch/>
    <Cardsearch/>
    <Footer/>
  </div>
    

  )
}
