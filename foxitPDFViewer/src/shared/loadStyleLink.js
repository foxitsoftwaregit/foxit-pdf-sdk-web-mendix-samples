export default function (url) {
    const existingLink = document.getElementById(url);
    if (existingLink) {
        return Promise.resolve();
    }
    const link = document.createElement('link');
    link.href = url;
    link.id = url;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return new Promise((resolve, reject) => {
        link.onload = function () {
            resolve();
        };
        link.onerror = function () {
            reject();
        }
    })
}