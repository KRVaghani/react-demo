import React from 'react'
class About extends React.Component{
    constructor(){
        super();
      

    }
    componentDidMount(){
        // console.warn("did mount");
        console.warn("props",this.props.name)
    }
    componentDidUpdate(){
        // alert('data updated');
        console.warn("props in update",this.props.name)
    }
    render(){
        return(<div>
            <h1>About us component</h1>
           <h2>{this.props.name}</h2>
            </div>)
    }
}
export default About;

// constructor(){

// }
// componentDidMount(){

// }
// componentDidUpdate(){

// }
// componentWillUnmount(){

// }