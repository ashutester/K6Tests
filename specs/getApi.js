import  http from "k6/http";
import {check} from "k6";

export default function() {
    const res = http.get('https://quickpizza.grafana.com/test.k6.io/');
    check(res,{
        "Response is 200": (r) => r.status===200,
        //'Response has location': (r) => r.body.includes('quickpizza.grafana.com')
    })
}
