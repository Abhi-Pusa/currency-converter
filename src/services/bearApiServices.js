const BearApiServices = {
    getBearList: () => {
        let url = 'https://api.punkapi.com/v2/beers';
        return () => fetch(url);
    }
}

export default BearApiServices;