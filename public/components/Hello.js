import React from 'react';

class Hello extends React.Component{
    render(){
        return (<div>{this.props.name}</div>);
    }
}

export default Hello;