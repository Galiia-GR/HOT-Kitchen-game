import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '38bc38e2f2f84db68c1f24f55b8bfaa6', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
