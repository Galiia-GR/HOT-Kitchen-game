import AppLoader from './appLoader';

enum Endpoints {
    'sources',
    'everything',
}

class AppController extends AppLoader {
    public getSources(callback: () => void) {
        super.getResp(
            {
                endpoint: Endpoints[0],
                options: {},
                callback,
            },
            callback
        );
    }

    public getNews(e: Event, callback: () => void) {
        let target = e.target;
        const newsContainer: HTMLElement | null = e.currentTarget as HTMLElement;

        while (target !== newsContainer && target !== null) {
            if ((target as HTMLElement).classList.contains('source__item')) {
                const sourceId = (target as HTMLElement).getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId || '');
                    super.getResp(
                        {
                            endpoint: Endpoints[1],
                            callback,
                            options: {
                                sources: sourceId || '',
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = (target as Node).parentNode;
        }
    }
}

export default AppController;
