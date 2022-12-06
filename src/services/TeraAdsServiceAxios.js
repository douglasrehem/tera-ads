import axios from 'axios';

class TeraAdsService {
    async getAds() {

        return axios.get('https://tisdtamgspxhre7xqgcezvkozq0uapoc.lambda-url.us-east-1.on.aws/')
            .then(resp => {
            console.log(resp.data);
            return resp.data.ads;
        });
    }

    async getAdById(id) {
        return this.getAds().find( ad => ad.id === +id);
    }
}

export default new TeraAdsService();