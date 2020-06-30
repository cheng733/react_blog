import React, {Component} from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './register.css'
export class Register extends Component {
    state = {
        username:'',
        password:'',
        confirmPwd:'',
        code:'',
    }
    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]:value
        })
    }
    submitHandle = (event) => {
        const {username,password,code,confirmPwd} = this.state
        event.preventDefault()
        console.log(username,password,confirmPwd,code)
    }
    render() {
        const {username,password,confirmPwd,code} = this.state
        return (
            <div>
                <div className="registerHeader">
                    <ArrowBackIcon onClick={this.props.history.goBack}/>&nbsp;&nbsp;<span>返回主页面</span>
                </div>
                <div className="loginContent">
                    <h1>注册界面</h1>
                        <form onSubmit={this.submitHandle}>
                            <table>
                                <tr><td>用户名:</td><td> <input type="text" name="username" value={username} onChange={this.handleInputChange}/></td></tr>
                                <tr>
                                    <td>密&nbsp;&nbsp;&nbsp;&nbsp;码:</td>
                                    <td><input type="password" name="password" value={password} onChange={this.handleInputChange}/></td></tr>
                                <tr>
                                    <td>确认密码:</td>
                                    <td><input type="password" name="confirmPwd" value={confirmPwd} onChange={this.handleInputChange}/></td></tr>
                                <tr>
                                    <td>验证码:</td>
                                    <td><input type="text" name="code" value={code} onChange={this.handleInputChange}/></td></tr>
                            </table>
                            <input type="submit" value="确定"/>
                        </form>
                </div>
            </div>
        )
    }
}
