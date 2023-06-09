import './sources.css';

class Sources {
    public draw(data: { name: string; id: string }[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp instanceof HTMLTemplateElement) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;

                const sourceName = sourceClone.querySelector('.source__item-name');
                const sourceItem = sourceClone.querySelector('.source__item');

                if (sourceName && sourceItem) {
                    sourceName.textContent = item.name;
                    sourceItem.setAttribute('data-source-id', item.id);
                }
                fragment.append(sourceClone);
            });
        }
        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;
