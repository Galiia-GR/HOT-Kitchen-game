import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        const startApp = document.querySelector('.sources');
        if (startApp) {
            startApp.addEventListener('click', (e) =>
                this.controller.getNews(e, (data?: { articles?: [] } | undefined) => {
                    if (data) {
                        this.view.drawNews(data);
                    }
                })
            );
            this.controller.getSources((data?: { sources?: [] } | undefined) => {
                if (data) {
                    this.view.drawSources(data);
                }
            });
        }
    }
}

export default App;
