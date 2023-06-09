class Loader {
    public baseLink: string;
    public options: object;

    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        {
            endpoint,
            options = {},
        }: {
            endpoint: string;
            options: object;
            callback: () => void;
        },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load({ method: 'GET', endpoint, callback, options });
    }

    public errorHandler = (res: Response) => {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    };

    public makeUrl = (options: object, endpoint: string) => {
        const urlOptions: { [key: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    };

    public load({
        method,
        endpoint,
        callback,
        options = {},
    }: {
        method: string;
        endpoint: string;
        callback: (data: string) => void;
        options?: object;
    }) {
        fetch(this.makeUrl(options, endpoint), { method: String(method) })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: string) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
