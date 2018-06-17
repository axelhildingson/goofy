import fetch from 'node-fetch';

export default function google(searchString) {
    const urlString = "http://localhost:3000/google";
    return fetch(urlString).then(response => response.json()).then(response => {
        return Object.assign({}, response, {"search engine": "google"})
    })
}