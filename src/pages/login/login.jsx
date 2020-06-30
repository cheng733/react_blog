import React, {Component} from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './login.css'
import svg from './images/captcha.svg'
export class Login extends Component {
    constructor(props){
        super(props)
        this.tip1 = React.createRef()
        this.tip2 = React.createRef()
        this.tip3 = React.createRef()
        this.toggle = React.createRef()
        this.pwdCircle = React.createRef()
        this.state = {
            isShow:true,
            pwd:true,
            username:'',
            password:'',
            code1:'',
            phone:'',
            code2:'',
            count:30,
            sendCode:false
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleChoose = (value)=>{
        this.tip1.current.innerText =""
        this.tip2.current.innerText =""
    this.setState({isShow:value})
}
    handleInputChange(event){
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({
            [name]:value
        })
    }
    userInfoHandle = (event) =>{
        event.preventDefault()
        const {username,password,code1,phone,code2,isShow} = this.state
        if(isShow){
           if(!/\w{4}/.test(username)){
                    this.tip1.current.innerText = "*用户名输入有误,包含4位（字母、数字、下划线）"
           }else if(!/\d{6}/.test(password)){
                    this.tip1.current.innerText = " "
                    this.tip2.current.innerText = "*密码输入有误，包含6位数字"
           }else if(!/[A-Za-z0-9]{4}/.test(code1)){
                    this.tip1.current.innerText = " "
                    this.tip2.current.innerText = " "
                    this.tip3.current.innerText = "*验证码输入有误"
           }
        }else{
                if(!/\d{11}/.test(phone)){
                    this.tip1.current.innerText = "*手机号输入有误"
                }else if(!/[A-z0-9]{4}/.test(code2)){
                    this.tip1.current.innerText = " "
                    this.tip2.current.innerText = "*验证码输入有误"
                }
        }

    }
    pwdIfShow = () =>{
            const {pwd} = this.state
        if(pwd){
            this.pwdCircle.current.style ="transform: translateX(18px);transition: 1s;"
            this.toggle.current.style = " background-color: deeppink;transition: 1s"
            this.setState({
                pwd:false
            })
        }else{
            this.pwdCircle.current.style ="transform: translateX(0);transition: 1s;"
            this.toggle.current.style = " background-color: #3c3c3c;transition: 1s"
            this.setState({
                pwd:true
            })
        }

    }
    showCount =(event) => {
        let {count,sendCode} = this.state
        sendCode = true
        this.setState({sendCode})
        event.preventDefault()
        if(this.counter == null){
            this.counter = setInterval( ()=> {
                if(count<=0){
                    clearInterval(this.counter)
                    sendCode = false
                    this.setState({sendCode,count:30})
                }else{
                    count-=1
                    this.setState({count})
                    console.log(count)
                }
            },1000)
        }

    }
    render() {
       const {isShow,username,password,code1,phone,code2,pwd,count,sendCode} = this.state
        return (
            <div>
                <div className="loginHeader">
                   <ArrowBackIcon onClick={this.props.history.goBack}/>&nbsp;&nbsp;<span>返回主页面</span>
                </div>
                <div className="loginContent">
                    <h1>登录界面</h1>
                   <div className="loginChoose">
                       <span onClick={()=>this.handleChoose(true)} className={isShow?'showChoose':''}>
                       用户密码登录</span>&nbsp;
                           <span onClick={()=>this.handleChoose(false)} className={!isShow?'showChoose':''}>手机短信登录</span></div>
                    {isShow?(
                        <form style={{display:'block'}}>
                            <label htmlFor="username">用户名:</label>
                        <input type="text" id="username" name="username"value={username} onChange={this.handleInputChange}/><br/>
                            <label htmlFor="password">密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
                            <span style={{position:"relative"}}>
                            {pwd?(<input type="password" id="password" name="password" value={password} onChange={this.handleInputChange}/>)
                            :(<input type="text" id="password" name="password" value={password} onChange={this.handleInputChange}/>)}
                            <div className="toggle" ref={this.toggle}>
                                <div className="circle" onClick={this.pwdIfShow} ref={this.pwdCircle}/>
                                <span>Hi</span>
                            </div>
                            </span>
                            <br/>
                            <label htmlFor="code">验证码:</label>
                        <span style={{position:'relative'}}><input type="text" id="code" name="code1" value={code1} onChange={this.handleInputChange}/>
                        <img src={svg} alt="captcha"/>
                        </span><br/>
                        <input type="submit" value="确定" onClick={this.userInfoHandle}/>
                        </form>
                    ):(
                        <form style={{display:'block'}}>
                            <label htmlFor="phone">手机号:</label>
                        <span style={{position:'relative'}}><input type="tel" id="phone" name="phone" value={phone} onChange={this.handleInputChange}/><div className="count" onClick={this.showCount}>{!sendCode?"获取验证码":count+"秒"}</div></span><br/>
                            <label htmlFor="code">验证码:</label>
                       <input type="text" id="code" name="code2" value={code2} onChange={this.handleInputChange}/><br/>
                        <input type="submit" value="确定" onClick={this.userInfoHandle}/>
                        </form>
                    )}
                    {isShow?(<div>
                        <div className="tip1" ref={this.tip1}/>
                        <div className="tip2" ref={this.tip2}/>
                        <div className="tip3" ref={this.tip3}/>
                    </div>):(<div>
                        <div className="tip1" ref={this.tip1}/>
                        <div className="tip2" ref={this.tip2}/>
                    </div>)}
                </div>
            </div>
        )
    }
}
