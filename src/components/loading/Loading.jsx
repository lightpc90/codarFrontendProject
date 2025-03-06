import React from 'react'
import style from './Loading.module.css'

const LoadingComponent = () => {
    return (
        <div className={`${style.loadingContainer}`}>
            <div className={`${style.loadingRing}`}></div>
        </div>
    )
}

export default LoadingComponent