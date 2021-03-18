import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{

    verifyUser(){
        if(
        document.getElementById("email").value === localStorage.getItem("username") && 
        document.getElementById("password").value === localStorage.getItem("password")
        ){
            localStorage.setItem("isLoggedIn", true);

        }else{
            localStorage.setItem("isLoggedIn", false);
        }
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form" >
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick={this.verifyUser}
                            >
                                Login
                            </Button>

                            <br/>
                            <br/>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className="submit"
                            >
                                Create Account
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}