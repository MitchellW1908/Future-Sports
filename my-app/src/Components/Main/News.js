import React from 'react';
import Dummy from './images/dummy.png';

const News = () => {
    return (
        <div className="News">
            <h1>News</h1>
            <div className='NewsFlexContainer'>
                <div className='NewsImageDiv'>
                    <article>
                        <a href='https://www.abc.net.au/'>
                            <img src={Dummy} alt='' className='NewsImages' />
                        </a><br />
                        <a href="https://www.abc.net.au/">News Item 1</a>
                    </article>
                </div>
                <div className='NewsImageDiv'>
                    <article>
                        <a href='https://www.abc.net.au/'>
                            <img src={Dummy} alt='' className='NewsImages' />
                        </a><br />
                        <a href="https://www.abc.net.au/">News Item 1</a>
                    </article>
                </div>
                <div className='NewsImageDiv'>
                    <article>
                        <a href='https://www.abc.net.au/'>
                            <img src={Dummy} alt='' className='NewsImages' />
                        </a><br />
                        <a href="https://www.abc.net.au/">News Item 1</a>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default News;