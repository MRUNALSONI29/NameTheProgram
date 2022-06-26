import React from "react";
import './App.css';
import Header from "./Header";
import SearchBox from "./SearchBox";
import ResultsContainer from "./ResultsContainer";

const name = require('@rstacruz/startup-name-generator')
 

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            headertext: 'Name-The-Program!!!',
            headerexpanded: true,
            suggestednames: [],
    }
    
    }
    handleInputChange = (inputtext) => {
     
        this.setState({
            headerexpanded: !inputtext,
            suggestednames: inputtext ? name(inputtext) : [],
        });
    }
    render() {
        
        return (
            <div>
                <Header headerExpanded={this.state.headerexpanded}
                 headTitle={this.state.headertext}  />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestednames={this.state.suggestednames} />
                </div>
    )}
}



export default App;