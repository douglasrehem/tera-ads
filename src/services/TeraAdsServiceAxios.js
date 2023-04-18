import axios from 'axios';

class TeraAdsService {
    async getAds() {

        return axios.get('https://ow7bbpq2cgusli2nlshbo7zodq0osfdz.lambda-url.us-east-1.on.aws/')
            .then(resp => {
            return resp.data.ads;
        });
    }

    async getAdById(id) {
        return this.getAds().find( ad => ad.id === +id);
    }
}

export default new TeraAdsService();