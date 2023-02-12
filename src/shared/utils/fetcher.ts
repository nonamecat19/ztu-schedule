const fetcher = (url: string, init?: RequestInit) =>
    fetch(url, init)
        .then(res => res.json())
export default fetcher