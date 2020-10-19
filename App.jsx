import React, { useState } from 'react';

const App = () => {
    let bg = '#ffff00';
    let text = 'wow🤦‍♀️';

    const [color, updatecolor] = useState(bg);
    const [textc, textchange] = useState(text);

    const Bgchange = () => {
        let textch = 'HaHaHa😄';
        let chbg = 'red';
        updatecolor(chbg)
        textchange(textch)
        
    }

    return (
        <>
            <div style={{ backgroundColor: color }}>
                <button onClick={Bgchange}>{textc}</button>
            </div>

        </>
    );
}
export default App;