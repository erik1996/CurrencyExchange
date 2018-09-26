class StorageService {
    defaultKey = 'defaultCurrency';
    favoriteKey = 'favoriteCurrencies';

    setDefault(currency) {
        localStorage.setItem(this.defaultKey, currency);
    }

    getDefault() {
        return localStorage.getItem(this.defaultKey) || 'USD';
    }

    isDefault(currency) {
        return localStorage.getItem(this.defaultKey) === currency;
    }

    addToFavorites(currency) {
        let favorites = localStorage.getItem(this.favoriteKey);
        favorites = favorites ? favorites.split(',') : [];
        favorites.push(currency);
        localStorage.setItem(this.favoriteKey, favorites);

        return favorites;
    }

    removeFromFavorites(currency) {
        let favorites = localStorage.getItem(this.favoriteKey);
        favorites = favorites.split(',').filter(favorite => favorite !== currency);
        localStorage.setItem(this.favoriteKey, favorites);

        return favorites;
    }

    getFavorites() {
        return localStorage.getItem(this.favoriteKey) ? localStorage.getItem(this.favoriteKey).split(',') : ''; 
    } 

    isFavorite(currency) {
        let favorites = localStorage.getItem(this.favoriteKey);
        if(favorites){
            favorites = favorites.split(',');

            return favorites.indexOf(currency) > -1;
        }
      
    }
}

export default new StorageService();