import React,{Component} from 'react'
import {connect} from "react-redux";
import {reqArtitleMessage} from "../redux/actions";
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

import {Header} from '../components/header/header'
import Footer from '../components/footer/footer'
import {Banner} from "../components/banner/banner";
import '../mock/mock'
import './Main.css'

   class Main extends Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef()

    }
        componentWillMount() {
        window.addEventListener('scroll',this.ifScroll)
        }
        componentWillUnmount() {
        window.removeEventListener('scroll',this.ifScroll)
        }
       componentDidMount(){
        this.props.reqArtitleMessage()
       }
       ifScroll = () => {
        let scrollTop = document.documentElement.scrollTop
           if(scrollTop>1000){
                this.myRef.current.style.display = 'block'
           }else{
               this.myRef.current.style.display = 'none'
           }
       }
       handleScroll = () => {
        document.documentElement.scrollTop = 0
       }
       render() {


           return (
               <div style={{display: 'flex', flexDirection: 'column'}}>
                   <Header  onScroll={this.ifScroll}/>
                   <Banner/>
                   <Footer/>
                    <div className="backToggle" ref={this.myRef} style={{display:'none'}}><ArrowUpwardOutlinedIcon fontSize="large" color="primary" onClick={this.handleScroll}/>
                   </div>
               </div>

           )
       }
}
export default connect(
    null,
    {reqArtitleMessage}
)(Main)

