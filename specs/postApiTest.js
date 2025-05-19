import http from "k6/http";
import {check} from "k6";
import {executor} from 'k6';

export const options = {
    scenarios: {
        iterationExample: {
          executor: 'per-vu-iterations',//shared-iterations or per-vu-iterations
          vus: 5,
          iterations: 200,
          maxDuration: '30s',
        },
      },
};

export default function () {
  const url = "https://dummyjson.com/auth/login";
  const payload = JSON.stringify({
    username: "sophiab",K6
    password: "sophiabpass",
  });
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = http.post(url, payload, params);

  check(res, {
    "Response is 200": (r) => r.status === 200,
    "Response has username": (r) => r.body.includes("sophiab"),
  });
}
