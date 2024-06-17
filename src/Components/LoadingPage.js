import React from 'react';
import './LoadingPage.css';

function LoadingPage() {
    const firstLine = "The website";
    const secondLine = "is set to launch imminently.";
    return (
        <div className='comingsoon-container'>
            <div className='background-text'>
                <span className='left-end'>end</span>
                <span className='right-bli'>bli</span>
            </div>
            <div className='transparent-layer'>
                <div className='announcement'>
                    <div className='vertical-line'></div>
                    <div className='announcement-text'>
                        <div className='line-1 highlight'>
                            {firstLine.split('').map((char, index) => (
                                <span
                                    key={index}
                                    className={`letter letter-${index + 1} ${char === ' ' ? 'space' : ''}`}
                                >
                                    {char}
                                </span>
                            ))}

                        </div><br />
                        <div className='line line-2'>
                            <span>{secondLine}</span>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoadingPage