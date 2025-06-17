import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export const options = {
    stages: [
        { duration: '30s', target: 1 },
        { duration: '2m', target: 1 },
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'],
        http_req_failed: ['rate<0.01']
    }
};

export function handleSummary(data) {
    return {
        'performance-report.html': htmlReport(data),
    };
}

export default function () {
    const res = http.get('https://jsonplaceholder.typicode.com/posts');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(1);
}