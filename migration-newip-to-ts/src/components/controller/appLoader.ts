import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '71fc1eadc563498db9e4940de8e15530',
        });
    }
}

export default AppLoader;
