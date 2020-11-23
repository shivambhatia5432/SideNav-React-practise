import React, { Component } from 'react';
import SideCustomBar from './sideCustomBar';
import '../App.css';

class Progress extends Component {
  constructor(props){
    super(props);
    this.state = {
      scrollPosition : 0
    }
 
  }
  componentWillReceiveProps(props){
    this.setState({ scrollPosition:props.scroll});
  }
  render(){
    return <SideCustomBar currentOption = {this.state.scrollPosition/11} />
  }
}

export  default  Progress;