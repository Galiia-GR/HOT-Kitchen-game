import './news.css';
export interface NewsItems {
    urlToImage: string;
    author: string;
    source: {
        name: string;
    };
    publishedAt: string;
    title: string;
    description: string;
    url: string;
}

class News<T extends NewsItems> {
    public draw(data: T[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');

        if (newsItemTemp instanceof HTMLTemplateElement && fragment) {
            news.forEach((item, idx) => {
                const newsClone: Element | null = newsItemTemp.content.cloneNode(true) as Element;

                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

                //  const NewsItems = item as NewsItems;
                const newsClonePhoto = newsClone.querySelector('.news__meta-photo');
                const newsCloneAutor = newsClone.querySelector('.news__meta-author');
                const newsCloneDate = newsClone.querySelector('.news__meta-date');
                const newsCloneTitle = newsClone.querySelector('.news__description-title');
                const newsCloneDescrip = newsClone.querySelector('.news__description-source');
                const newsCloneCont = newsClone.querySelector('.news__description-content');
                const newCloneRead = newsClone.querySelector('.news__read-more a');

                if (
                    newsClonePhoto &&
                    newsCloneAutor &&
                    newsCloneDate &&
                    newsCloneTitle &&
                    newsCloneDescrip &&
                    newsCloneCont &&
                    newCloneRead
                ) {
                    newsClonePhoto.setAttribute(
                        'style',
                        `background-image: url('${item.urlToImage || 'img/news_placeholder.jpg'}')`
                    );

                    newsCloneAutor.textContent = item.author || item.source.name;
                    newsCloneDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

                    newsCloneTitle.textContent = item.title;
                    newsCloneDescrip.textContent = item.source.name;
                    newsCloneCont.textContent = item.description;
                    newCloneRead.setAttribute('href', item.url);

                    fragment.appendChild(newsClone);
                }
            });
        }
        const newsContainer = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
