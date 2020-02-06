import React from 'react';
import TqInput from '../ui/TqInput/TqInput';
import TqButton from '../ui/TqButton/TqButton';

/* Feel free to make this a functional component if you consider it necessary */
class Search extends React.Component {
  state = {
    query: ''
  }
  handleInput = (event) => {
    this.setState({query: event.target.value});
    
  }
  handleEnter = (event) => {
    if(event.keyCode === 13){
      event.preventDefault();
      this.props.searchProduct(this.state.query);
    }
  }
  render() {
    return (
      <div>
       <TqInput 
       placeholder="What are you looking for?" 
       onChange={this.handleInput} 
       onKeyDown={this.handleEnter}/>
       <TqButton 
       onClick={()=>this.props.searchProduct(this.state.query)}>
         Search
        </TqButton>
      </div>
    );
  }
}

export default Search;
