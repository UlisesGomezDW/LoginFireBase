import React, { Component } from 'react'
import { Input, Button, Icon } from 'antd'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            correo: null,
            password: null,
            confirm_password: null,
        }
    }

    changeCorreo = (e) => {
        this.setState({correo: e.target.value})
    }

    changePass = (e) => {
        this.setState({password: e.target.value})
    }

    envio = () => {
        
            this.props.loginCorreo(this.state.correo, this.state.password)        
        
    }


    render(){
        const suffix = this.state.correo ? <Icon type="close-circle" onClick={this.clearEmail} /> : null 
        const { Password } = Input
        return (
            <div>
            {/* DIV FORM */}    
            <div style={{
                height: "50vh",
                width: "50vw",
                marginLeft: "25vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
            <p style={{
                fontSize: "2em",
                fontWeight: "700"
            }}>
                Iniciar Sesión
            </p>
            <Input 
                prefix={<Icon type="user" style={{color: "#61B7C4"}} />}
                suffix={suffix}
                placeholder="Introduce tu correo"
                onChange={(e)=>this.changeCorreo(e)}
            />

            <Password
            type="password"
            placeholder="Introduce tu contraseña"
            onChange={(e)=>this.changePass(e)} 
            />

            <Button 
                style={{backgroundColor: "#61B7C4", color: "#fff"}}
                shape="round" 
                icon="user-add" 
                size="small"
                onClick={this.envio}
                >
                    Iniciar Sesión
            </Button>
            </div>


            {/*DIV GOOGLE*/ }
            
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img 
                style={{width: "100px", height: "100px", borderRadius: "50%"}}
                src="https://pbs.twimg.com/profile_images/988272404915875840/lE7ZkrO-_400x400.jpg"
                alt="Google Login"
                onClick={this.props.loginGoogle}
                />
                <p>Iniciar sesión con Google</p>
            </div>

            </div>
        )
    }
}
export default Login