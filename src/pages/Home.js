import './App.css';
import  TeraAd from '../components/TeraAd';
import TeraAdsService from '../services/TeraAdsServiceAxios';
import Header from '../components/Header';
import { useEffect , useState} from 'react';

function Home() {

  const [ads, setAds] = useState([]);


  useEffect( () => {
    const getAds = async ()=> {
      setAds(await TeraAdsService.getAds());
    }

    getAds();
  });

  return (
    <div className="App">
      <Header></Header>

      <section className="TeraAdsContainer">
          {ads.map( ad => {
            return ( <TeraAd id={ad.id} title={ad.title} description={ad.description} price={ad.price} imageURL={ad.imageURL}></TeraAd>)
          })}

      </section>

      
    </div>
  );
}

export default Home;
