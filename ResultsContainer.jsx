import React from "react";
import NameCard from "./NameCard";


import './ResultsContainer.css';

const ResultsContainer = ({ suggestednames }) => {
    const suggestednamejsx = suggestednames.map((suggestedname) => {
    return <NameCard key={suggestedname} suggestedname={suggestedname} />
    })
    return (
        <div className="resultscontainer">{suggestednamejsx}</div>
    )
    

}
export default ResultsContainer;