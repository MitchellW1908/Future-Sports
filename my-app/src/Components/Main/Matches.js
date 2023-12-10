import React from 'react';

const Matches = () => {
    return (
        <div className="Matches">
            <h1>Matches</h1>
            <div className='MatchesTable'>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Game</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='TableCells'>22nd October, 2023</td>
                            <td className='TableCells'>FutureSports vs Team 1</td>
                            <td className='TableCells'>FutureSports won</td>
                        </tr>
                        <tr>
                            <td className='TableCells'>29th October, 2023</td>
                            <td className='TableCells'>Team 2 vs FutureSports</td>
                            <td className='TableCells'>FutureSports won</td>
                        </tr>
                        <tr>
                            <td className='TableCells'>5th November, 2023</td>
                            <td className='TableCells'>FutureSports vs Team 3</td>
                            <td className='TableCells'>FutureSports lost</td>
                        </tr>
                        <tr>
                            <td className='TableCells'>12th November, 2023</td>
                            <td className='TableCells'>FutureSports vs Team 4</td>
                            <td className='TableCells'>-</td>
                        </tr>
                        <tr>
                            <td className='TableCells'>19th November, 2023</td>
                            <td className='TableCells'>Team 5 vs FutureSports</td>
                            <td className='TableCells'>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Matches;