import React, { useEffect, useState } from 'react';
import './Cover.css';

function Cover () {
    const [coverPhoto, setCoverPhoto] = useState(['#', ''])
    const photoCred = `https://unsplash.com/@${coverPhoto[1]}?utm_source=recipes-app&utm_medium=referral`

    useEffect (() => {
        fetch('https://api.unsplash.com/photos/random/?client_id=cw1ZZ185SThdLPcEx7g4IherAzt-SFN9EdBKWOnjq-0&query=food&orientation=landscape')
            .then(res => res.json())
            .then((result) => {
                console.log("Unsplash Random API Call: ", result)
                setCoverPhoto([result.urls.regular, result.user.username, result.user.name, result.alt_description])
            }, (error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="cover">
            <img className="cover__coverImage" src={coverPhoto[0]} alt={coverPhoto[3]} />
            <div className="cover__coverAbout">
                <p className="cover__coverAboutTitle">
                    Welcome to DELISH!
                </p>
                <span className="cover__coverAboutText">
                    DELISH is your source for fresh new recipes updated daily with a variety of
                    cuisines.  Our offerings are served to you in an easy to follow and simple to
                    make set of instructions to get the most flavour!
                </span>
            </div>
            <div className="cover__coverCred">
                <div className="cover__coverCredBox">
                    Photo by&nbsp;
                    <a className="cover__coverLink"
                       href={photoCred}
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        {coverPhoto[2]}
                    </a>
                    &nbsp;on&nbsp;
                    <a className="cover__coverLink"
                       href="https://unsplash.com/?utm_source=recipe-app&utm_medium=referral"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        Unsplash
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Cover;