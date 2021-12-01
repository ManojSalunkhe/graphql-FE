import { useState } from "react"
import {
    Button,
    Paper,
    Typography
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import EmailIcon from '@material-ui/icons/Email'
import VisibilityIcon from '@material-ui/icons/Visibility'
import TextFields from "../components/TextFields"
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION } from '../query'


const useStyles = makeStyles(() => ({
    container: {
        margin: "80px auto",
        width: "530px",
        height: "350px"
    },

    heading: {
        textAlign: "center",
        marginTop: "25px"
    },

    formElements: {
        margin: "30px 46px"
    },

    button: {
        margin: "10px",
        minWidth: 420,
        minHeight: 30
    }
}))

function Login(props) {
    const classes = useStyles()

    const [loginCredentials, setLoginCredentials] = useState({ email: '', password: '' })

    const [login] = useMutation(LOGIN_MUTATION)


    const handleTextFieldChnage = (e, label) => {
        if (label === "email") setLoginCredentials({ ...loginCredentials, email: e.target.value })
        if (label === "password") setLoginCredentials({ ...loginCredentials, password: e.target.value })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        console.log(loginCredentials)

        const loginApiCall = async () => {
            try {
                const result = await login({
                    variables: {
                        input: {
                            email: loginCredentials.email,
                            password: loginCredentials.password
                        }
                    }
                })
                setLoginCredentials({ email: '', password: '' })
                props.history.push('/blog')
                console.log(result.data.loginUser.token)
                if (result) localStorage.setItem('token', JSON.stringify(result.data.loginUser.token))
            } catch (err) {
                console.log(err)
            }
        }
        loginApiCall()
    }

    return (
        <Paper className={classes.container} variant="outlined"  >
            <Typography variant="h4" className={classes.heading}>Login here</Typography >
            <div className={classes.formElements} >
                <form onSubmit={handleLoginSubmit} >
                    <TextFields Icon={EmailIcon} label="email" value={loginCredentials.email} updaterFunc={handleTextFieldChnage} />
                    <TextFields Icon={VisibilityIcon} label="password" value={loginCredentials.password} updaterFunc={handleTextFieldChnage} />
                    <Button
                        className={classes.button}
                        type="submit"
                        variant="contained"
                        color="primary"

                    >log in
                    </Button>
                </form>
            </div>
        </Paper>
    )
}

export default Login
