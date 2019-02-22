import React from 'react'
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'

const { Header } = Layout
const { Item } = Menu
const HeaderComponent = () => (
    <Header style={{backgroundColor: "#61B7C4"}}>
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectKey={["home"]}
        style={{lineHeight: "64px", backgroundColor: "#61B7C4"}}
        >
            <Item key="home"><NavLink to="/">Inicio</NavLink></Item>
            <Item key="register"><NavLink to="/register">Registar</NavLink></Item>
            <Item key="login"><NavLink to="/login">Iniciar sesión</NavLink></Item>
        </Menu>
    </Header>
)

export default HeaderComponent