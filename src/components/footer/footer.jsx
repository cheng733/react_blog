import React, {Component} from 'react'
import {withRouter} from "react-router";

import './footer.css'
import {connect} from "react-redux";
import github from './images/44574739399bd41.jpg'

 class Footer extends Component {
     render() {
             let path = this.props.location.pathname.split("/")
             this.name = path[1]
             this.index = path[2]
         if(this.props.result[this.name]){
             this.result = this.props.result[this.name][this.index]
         }
         const {time,author,read,comment,repo} = this.result||{}
        return (
            <div className="footer">
                <span>posted@{time||"2019-6-12"}&nbsp;{author||"Tom"}&nbsp;read（{read||1000}）comments（{comment||20}） </span>
                <a href={repo||"https://github.com/cheng733"}><img src={github} alt="GitHub" width="20px" height="20px"/></a>
            </div>
        )
    }}
export default  connect(
    state =>({result: state.articleMessage})
)(withRouter(Footer))

