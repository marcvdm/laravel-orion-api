import axios from 'axios';

export default class AxiosInstance {
    constructor(AxiosConfig) {
        this.axios = axios.create({
            ...AxiosConfig,
        });
    }
}

export {
    axios
}