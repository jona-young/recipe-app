import React, {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomPhotos, selectRandomPhoto } from './photosSlice.js';
import './Cover.css';

function Cover () {
    const dispatch = useDispatch()
    const photoStatus = useSelector(state => state.photos.status)
    const randomPhoto = useSelector(selectRandomPhoto)

    useEffect (() => {
        if (photoStatus === 'idle') {
            dispatch(fetchRandomPhotos())
        }
    }, [photoStatus, dispatch, randomPhoto])

    return (
        <div className="cover">
            <img className="cover__coverImage" src={randomPhoto} />
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
        </div>
    )
}

export default Cover;