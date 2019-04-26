import React, { Component } from 'react'
import literals from './literals'
import logic from '../../logic'
import Search from '../Search'
import Results from '../Results'
import Detail from '../Detail'

class Home extends Component {
    state = { error: null, ducks: [], duck: null }

    handleSearch = query =>
        logic.searchDucks(query)
            .then(ducks =>
                this.setState({ duck: null, ducks: ducks.map(({ id, title, imageUrl: image, price }) => ({ id, title, image, price })) })
            )
            .catch(error =>
                this.setState({ error: error.message })
            )

    handleRetrieve = id =>
        logic.retrieveDuck(id)
            .then(({ title, imageUrl: image, description, price }) =>
                this.setState({ duck: { title, image, description, price } })
            )
            .catch(error =>
                this.setState({ error: error.message })
            )

    render() {
        const {
            handleSearch,
            handleRetrieve,
            state: { ducks, duck },
            props: { lang, name, onLogout }
        } = this

        const { hello, logout } = literals[lang]

        return <main>
            <h1>{hello}, {name}!</h1>
            <button onClick={onLogout}>{logout}</button>
            <Search lang={lang} onSearch={handleSearch} />
            {!duck && <Results items={ducks} onItem={handleRetrieve} />}
            {duck && <Detail item={duck} />}
        </main>
    }
}

export default Home