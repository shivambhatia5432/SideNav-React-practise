import React, { Component } from 'react';
import {Options} from './constants';
import '../App.css';

class sideCustomBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Option: 0,
            Options: Options
    }
    }
    componentWillReceiveProps(props) {
        var currentOption = Math.round(props.currentOption);

        if(currentOption>=this.state.Options.length){
            currentOption = this.state.Options.length - 1;
        }

        this.setState({ Option: currentOption + 1  });
        
        var updatedOptions = this.state.Options;
        updatedOptions.forEach((eachOption,index)=>{
            if (currentOption===index){
                eachOption.Color = "Blue"
            }else{
                eachOption.Color = "Grey"
            }
        })
        this.setState({Options:updatedOptions});
    }
    render() {
        return (
            <div className="sideNavbar">
                {
                    this.state.Options.map((eachOption, index) => {
                        return (<a className="Link" href={"#"+eachOption.Link}>
                                    <p key={index} style={{ color: eachOption.Color }}>
                                        {eachOption.Name}
                                    </p>
                                </a>)
                    })
                }  
            </div>
        )
  
  }
}

export default sideCustomBar;