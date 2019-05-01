import React from 'react'
import './index.sass'

function Results({ error, items, onPlayer }) {



    return <div className="results">
        <section className="container">
            <div className='columns is-multiline is-mobile is-centered'>
            {
            items.map(({ trackName, artistName, previewUrl, artWork, genere }) =>{

                return <div key={previewUrl} className="column is-2-desktop is-3-tablet is-5-mobile" onClick={() => onPlayer(previewUrl)}>
                        <div className="card myCard">
                                <div className="card-image">
                                    <div className="image">
                                        <figure className="image is 80x80">
                                            <img src={artWork} />
                                        </figure>
                                    </div>
                                </div>
                            <div className="media-content">
                                    <h3 className="title track">{trackName}</h3>
                                    <h4 className="subtitle artist">{artistName}</h4>
                                    <p className="subtitle genere">{genere}</p>
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
        </section>
    </div>
}

export default Results
