import React, { Fragment, useState } from 'react'

function HomePage() {
    const [isClicked, setIsClicked] = useState(false)
    const onClickHandler = ()=>{
        setIsClicked(true)
    }

    return (
        <Fragment>
            <img
                alt='brocoliDuCoeur'
                id='logo' 
                src='/brocoliDuCoeur.jpg'
                style={{
                    height: 'auto',
                    maxHeight: '100vh',
                    width: '100%',
                    objectFit: 'cover'
                }}
            />
            {!isClicked && (
                <button id='alphaMale'
                    onClick={onClickHandler}
                    style={{
                        height: 100,
                        width: 500,
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        backgroundColor: '#67e17b',
                        color: '#C731D2',
                        fontSize: 40,
                        fontWeight:'bold'
                    }}>Qui est le plus beau ?
                
                </button>
            )}
            
            {isClicked && (
                <h2 id='answer'
                    style={{
                        height: 100,
                        width: 500,
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        backgroundColor: '#67e17b',
                        color: '#C731D2',
                        fontSize: 40,
                        fontWeight:'bold',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    Matthieu, tout simplement
                </h2>
            )}
        </Fragment>
    ) 
}
  
export default HomePage