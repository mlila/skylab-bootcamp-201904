'use strict'

const duckApi = {
    __url__: 'https://duckling-api.herokuapp.com/api',

    searchDucks(query) {
        validate.arguments([
            { name: 'query', value: query, type: 'string' }
        ])
        
        return fetch(`${this.__url__}/search?q=${query}`)
           // .then(response => JSON.parse(response))
            .then(response => response.json())
    },

    retrieveDuck(id) {
        validate.arguments([
            { name: 'id', value: id, type: 'string' }
        ])

        return fetch(`${this.__url__}/ducks/${id}`)
            //.then(response => JSON.parse(response))
            .then(response => response.json())
    }
}