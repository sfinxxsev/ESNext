'use strict';

export class XMLHTTPRequestor {
    constructor() {
        this.requestHeaders = {
            'Content-Type': 'application/json'
        };
    }

    executeRequest(requestOptions) {
        requestOptions.headers = this.requestHeaders;
        return new Promise(function (resolve, reject) {
             const xhr = new XMLHttpRequest();
            xhr.open(requestOptions.method, requestOptions.url);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            if (requestOptions.headers) {
                Object.keys(requestOptions.headers).forEach(function (key) {
                    xhr.setRequestHeader(key, requestOptions.headers[key]);
                });
            }

            let parameters = requestOptions.params;
            if (parameters && typeof parameters === 'object') {
                parameters = Object.keys(parameters).map(function (key) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key]);
                }).join('&');
            }

            xhr.send(parameters);
        });
    }

    get(url){
        const requestOptions = {method: 'GET', url: url};
        return this.executeRequest(requestOptions);
    }

    post(url, requestParams) {
        const requestOptions = {method: 'POST', url: url, params: requestParams};
        return this.executeRequest(requestOptions);
    }

    put(url, requestParams) {
        const requestOptions = {method: 'PUT', url: url, params: requestParams};
        return this.executeRequest(requestOptions);
    }

    delete(url, requestParams) {
        const requestOptions = {method: 'DELETE', url: url, params: requestParams};
        return this.executeRequest(requestOptions);
    }
}
