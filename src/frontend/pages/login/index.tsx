import React, { Component } from "react"

interface AppState {
    email: string,
    password: string
}

class Login extends Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.verify = this.verify.bind(this);
    }

    verify() {
        console.log(this.state)
        fetch(
            "https://reqres.in/api/login",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }

    render() {
        return (
            <>
                <h1>boring login page</h1>
                <input type="text" name="email" placeholder="email" onChange={((event: React.ChangeEvent<HTMLInputElement>) => {
                    this.setState({
                        email: event.target.value
                    })
                })}></input>
                <input type="password" name="password" placeholder="password" onChange={((event: React.ChangeEvent<HTMLInputElement>) => {
                    this.setState({
                        password: event.target.value
                    })
                })}></input>
                <button onClick={this.verify}>Login</button>
            </>
        )
    }
}

export default Login;