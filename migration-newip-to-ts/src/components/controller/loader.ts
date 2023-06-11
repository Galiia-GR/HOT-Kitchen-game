type LoadOptions = {
    [key: string]: string;
};

class Loader {
    public baseLink: string;
    public options: LoadOptions;

    constructor(baseLink: string, options: LoadOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        {
            endpoint,
            options = {},
        }: {
            endpoint: string;
            options: LoadOptions;
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

    public makeUrl = (options: LoadOptions, endpoint: string) => {
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
        options?: LoadOptions;
    }) {
        fetch(this.makeUrl(options, endpoint), { method: String(method) })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: string) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
