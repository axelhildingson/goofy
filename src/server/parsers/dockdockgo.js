import fetch from 'node-fetch';

export default function duckduckgo(searchString) {
    const urlString = "http://localhost:3000/duckduckgo";
    return fetch(urlString).then(response => response.json()).then(response => {
        return Object.assign({}, response, {"search engine": "duckduckgo"})
    });
}