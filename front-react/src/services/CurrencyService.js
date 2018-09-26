class CurrencyService {
    baseUrl = 'http://localhost:4000/currencies/';

    getCurrencies(defaultCurrency) {
        return fetch(this.baseUrl + defaultCurrency)
            .then(res => res.json());
    }

    convert(data) {
        return fetch(this.baseUrl+'/exchange', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(res=>res.json())

    }
}

export default new CurrencyService();