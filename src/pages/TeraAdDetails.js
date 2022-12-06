import './App.css';
import TeraAdsService from '../services/TeraAdsService';
import Header from '../components/Header';
import { useEffect , useState} from 'react';

import { useParams } from 'react-router-dom';


function TeraAdDetails({ params }) {
  let { adId } = useParams();
  console.info(adId);


  const [ad, setAd] = useState({});


  useEffect( () => {
    const getAdById = async ()=> {
      setAd(await TeraAdsService.getAdById(adId) || {});
    }

    getAdById();
  },[adId]);

  return (
    <div className="App">
      <Header></Header>
      <section className="TeraAdsDetailsContainer">
        {ad?.id && (
            <div className="TeraAd" key={ad?.id}>
            <div className="TeraAdImageContainer">
                <img src={ad?.imageURL} alt={ad?.description}/>
            </div>
            <span className="TeraAdTitle">{ad?.title}</span>
            <span className="TeraAdPrice">R$ {ad?.price}</span>
            <span className="TeraAdDescription"> {ad?.description}</span>
          </div>
        )}
      </section>
    </div>
  );
}

export default TeraAdDetails;
