import appConfig from '../constant/appConfig';

const {apiUrl,AUTH_TOKEN} = appConfig;

const CurrencyApiServices = {
    getCurrencyRates: () => {
        let url = apiUrl+'?app_id='+AUTH_TOKEN;
        return () => fetch(url);
    }
}

export default CurrencyApiServices;