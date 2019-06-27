import React from 'react';
import axios from 'axios'
class Demo extends React.Component {
  state = {
    text: ''
  }

  componentDidMount(){
    this.formSubmit = this.formSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
  }

  formSubmit(e){
    e.preventDefault()
    var url = `https://www.sainsburys.co.uk/webapp/wcs/stores/servlet/SearchDisplayView?catalogId=10123&langId=44&storeId=10151&catalogId=10123&categoryId=&parent_category_rn=&top_category=&pageSize=60&orderBy=RELEVANCE&searchTerm=${this.state.text}&beginIndex=0&categoryFacetId1=`
    console.log('a', url)
    axios.get(url)
    .then(response => {
      console.log('test1', response)
      
          
      }).catch(e => {
         console.log(e);
      });
    }


  render() {
 return(
   <div className = 'ui container'>
  <div className = "ui segment">
    <h1 className = 'h1Home'>Welcome - to 'Choose Name'</h1>
    <h2 className = 'h2Home'>Please search your item</h2>
    <div className = "searchBar">
    <form className ="ui form" onSubmit={this.formSubmit}>
    <input 
      type="text" 
      value={this.state.text} 
      placeholder="Search Product" 
      name="search" 
      onChange={(e) =>{this.setState({text: e.target.value})}}
       /> 
    
    <button type="submit" onClick={this.handleClick}>> Search <i class="search icon" ></i></button>
    </form>
    </div>
    </div>  
       
          
       

  </div>
 )

 
  }
}

export default Demo;
