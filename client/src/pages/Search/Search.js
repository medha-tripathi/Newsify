import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../component/Navbar/Navbar'
import Cardsearch from '../../component/Cardsearch'
import Footer from '../../component/Footer/Footer'
import Spinner from '../HomePage/Spinner'
import "./Search.scss"


export default function Search() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  var url=window.location.href.toString().split("/search/")[1];
  if(url=="1"||url=="2"||url=="3"||url=="4"||url=="5"||url=="6"||url=="7"||url=="0"){
    url=`topic_news/${url}`;
  }

  const fetchdata = async () => {
    setLoading(true);
    await fetch(`https://amiteshpatel.pythonanywhere.com/predict_api/${url}`)
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

  // var urlc=url.split("/search/")[1];
  // console.log(url)

  return (
    <div className='searchpage'>
    {/* {loading && <Spinner />}
        <Navbar/>
        <h1 className='w3-xxlarge m-5'>SEARCH RESULTS</h1>
        <h1 className='w3-xlarge mx-5'>POLITICS</h1>
        {posts.map((i)=>{
          return (<div className="card mb-3 m-5 mx-10 w3-border w3-border-black" style={{height:"35%",width:"80%"}} >
    <div className="row g-0">
      <div className="col-md-4">
        <img src={i.images}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title w3-xlarge">{i.Headline}</h5>
          <p className="card-text w3-large">
          {i.summary?.slice(0, 240)}...
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Something else</small><Link to="/detail"><button type="button" class="btn btn-primary card-btn">Read More</button></Link>
          </p>
          
        </div>
        
      </div>
      
    </div>
    
  </div>)
        })} */}
        <Navbar/>
        <h1 className='w3-xxlarge m-5'>SEARCH RESULTS</h1>
        <h1 className='w3-xlarge mx-5'>POLITICS</h1>
        <Cardsearch/>
        <Cardsearch/>
        <Cardsearch/>
        <Cardsearch/>
        <Cardsearch/>
        <Cardsearch/>
        <Cardsearch/>
        <Footer/>
    </div>
  )
}
