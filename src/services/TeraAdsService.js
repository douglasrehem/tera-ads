class TeraAdsService {
    async getAds() {
        return [{
            id: 1,
            title: 'Jogos PS4',
            price: 350,
            description: 'Vários jogos de PS4',
            imageURL: 'https://img.olx.com.br/thumbs256x256/27/276210717883515.jpg'
        },
        {
            id: 2,
            title: 'Jogos PS5',
            price: 400,
            description: 'Vários jogos de PS4',
            imageURL: 'https://img.olx.com.br/images/16/165271224741321.jpg'
        }]
    }

    async getAdById(id) {
        return (await this.getAds()).find( ad => ad.id === +id);
    }
}

export default new TeraAdsService();