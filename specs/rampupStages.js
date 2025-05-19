import  http from "k6/http";
import {check} from "k6";

export const options = {
    stages : [
        {'duration': '5s',target: 10},
        {'duration': '10s',target: 20},
        {'duration': '30s',target: 300},
        {'duration': '5s',target: 5},
    ]
};
export default function() {
    
    const res = http.get('https://quickpizza.grafana.com/test.k6.io/');
    check(res,{
        "Response is 200": (r) => r.status===200,
        //'Response has location': (r) => r.body.includes('quickpizza.grafana.com')
    })
}