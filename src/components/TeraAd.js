import './TeraAd.css';
import { Link } from "react-router-dom";

function TeraAd({id, title, description, price, imageURL}) {
    return (
    <Link to={`/ads/${id}`} key={id}>
      <div className="TeraAd" >
        <div className="TeraAdImageContainer">
            <img src={imageURL} alt={description}/>
        </div>
        <span className="TeraAdTitle">{title}</span>
        <span className="TeraAdPrice">R$ {price}</span>
      </div>
    
    </Link>
    );
  }
  
  export default TeraAd;