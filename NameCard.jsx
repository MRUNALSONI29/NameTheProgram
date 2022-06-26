import React from 'react';
import './NameCard.css'

const namecheapurl = 'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard = ({ suggestedname }) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className='namecardlink' href={`${namecheapurl}${suggestedname}`}>
             <div className='resultnamescard'>
            <p className='resultname'>{suggestedname}</p>
         </div>
       </a>
     )
}
export default NameCard;