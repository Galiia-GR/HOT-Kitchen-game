import News, { NewsItems } from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News<NewsItems>;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: { articles?: NewsItems[] }) {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    public drawSources(data: { sources?: [] }) {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
