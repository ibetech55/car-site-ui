import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers = { API_KEY: 'APIKEY' } as any
axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 403) {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/refresh`, {}, {
            withCredentials: true,
            headers: {
                API_KEY: 'APIKEY',
            }
        })
        if (response.status === 200) {
            return axios(error.config)
        }
    } else {
        localStorage.removeItem('test');
        window.location.pathname = '/'
        return error;
    }
})

export default axios;