import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      isLoaded:false,
    }
  }

  componentDidMount(){
    fetch('https://api.github.com/users')
    .then(res=> res.json())
    .then(json =>{
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }
  render(){

    var {isLoaded,items}=this.state;

    if(!isLoaded){
      return <div>Loading..</div>
    }
    else {

      return (
        <div className="App">
          <table cellPadding="10" >
          {items.map(item=>(
            <tr>
              <td>
              {item.id}<br></br>
              </td>
              <td>
              <img src={item.avatar_url} width="200" height="200"></img>
              </td>
              <td>
              Name: {item.login}<br></br><br></br>
              </td>
            </tr>
            ))};
          </table>
        </div>
      );
    }
}
}

export default App;
