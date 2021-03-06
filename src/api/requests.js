import Http from './http';
import * as URLS from './urls';


const HTTP = new Http('https://www.homefix.ng/api/');

export function login(obj){
    return HTTP.post(URLS.LOGIN, obj).then((res)=>{
        return res.data;
    });
}

export function getRequests(type){
    return HTTP.get('get_'+type+'_requests/'+window.localStorage.getItem('csa_rid'), {}).then((res)=>res.data);
}