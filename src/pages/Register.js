import { useState } from "react"
import { Button, Paper, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import EmailIcon from '@material-ui/icons/Email'
import PersonIcon from '@material-ui/icons/Person'
import VisibilityIcon from '@material-ui/icons/Visibility'
import TextFields from "../components/TextFields"
import { useMutation } from '@apollo/client'
import { REGISTER_MUTATION } from '../query'
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "80px auto",
        width: 430,
        height: 430
    },

    heading: {
        textAlign: "center",
        marginTop: "15px"
    },

    formElements: {
        margin: "30px 47px",
    },

    button: {
        margin: "10px",
        minWidth: 320,
        minHeight: 30,
        color: "black",
        backgroundColor: theme.palette.primary.light
    }
}))

function Register() {


    const classes = useStyles()

    const [registerCredentials, setRegisterCredentials] = useState({ username: '', email: '', password: '' })

    const [register] = useMutation(REGISTER_MUTATION)

    const handleTextFieldChnage = (e, label) => {
        if (label === "username") setRegisterCredentials({ ...registerCredentials, username: e.target.value })
        if (label === "email") setRegisterCredentials({ ...registerCredentials, email: e.target.value })
        if (label === "password") setRegisterCredentials({ ...registerCredentials, password: e.target.value })
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        console.log(registerCredentials)

        const apiCall = async () => {
            try {
                const result = await register({
                    variables: {
                        input: {
                            username: registerCredentials.username,
                            email: registerCredentials.email,
                            password: registerCredentials.password
                        }
                    }
                })
                console.log(result.data)
            } catch (err) {
                console.log(err)
            }
        }
        apiCall()
        setRegisterCredentials({ username: '', email: '', password: '' })
    }

    return (
        <Paper className={classes.container} variant="outlined" >
            <Typography variant="h4" className={classes.heading}>Register here</Typography >
            <div className={classes.formElements}>
                <form onSubmit={handleRegisterSubmit}  >
                    <TextFields Icon={PersonIcon} label="username" value={registerCredentials.username} updaterFunc={handleTextFieldChnage} />
                    <TextFields Icon={EmailIcon} label="email" value={registerCredentials.email} updaterFunc={handleTextFieldChnage} />
                    <TextFields Icon={VisibilityIcon} label="password" value={registerCredentials.password} updaterFunc={handleTextFieldChnage} />
                    <Button
                        className={classes.button}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        register
                    </Button>
                    <Typography className={classes.heading}>already have an account ? <Link to="/login">login</Link></Typography>
                </form>
            </div>
        </Paper>
    )
}

export default Register
