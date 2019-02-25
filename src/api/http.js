import Axios from 'axios';
export default class Http{
    constructor(url){
        this.url = url;
    }
    get(url, params, addCsa_rid = false){
        const getURL = this.url+url+(addCsa_rid?window.localStorage.getItem('csa_rid') : '');
        return Axios.get(getURL, { 
            params: params
        });
    }
    post(url, data, addCsa_rid = false){
        const postURL = this.url+url+(addCsa_rid?window.localStorage.getItem('csa_rid') : '');
        return Axios({
            url: postURL,
            method: 'post',
            data: data,
        });
    }
}