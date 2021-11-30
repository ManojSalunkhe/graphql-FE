import { useState } from "react"
import {
    Button
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import EmailIcon from '@material-ui/icons/Email'
import VisibilityIcon from '@material-ui/icons/Visibility'
import TextFields from "../components/TextFields";


const useStyles = makeStyles(() => ({
    container: {
        margin: "130px auto"
    },
    textFieldsParent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    textFields: {
        margin: "5px auto",
        minWidth: 420,
        minHeight: 30
    }
}))

function Login() {
    const classes = useStyles()

    const [loginCredentials, setLoginCredentials] = useState({ email: '', password: '' })


    const handleTextFieldChnage = (e, label) => {
        if (label === "email") setLoginCredentials({ ...loginCredentials, email: e.target.value })
        if (label === "password") setLoginCredentials({ ...loginCredentials, password: e.target.value })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        console.log(loginCredentials)
    }

    return (
        <div className={classes.container}>
            <form onSubmit={handleLoginSubmit} >
                <div className={classes.textFieldsParent}>
                    <TextFields Icon={EmailIcon} label="email" value={loginCredentials.email} updaterFunc={handleTextFieldChnage} />
                    <TextFields Icon={VisibilityIcon} label="password" value={loginCredentials.password} updaterFunc={handleTextFieldChnage} />
                    <Button
                        className={classes.textFields}
                        type="submit"
                        variant="contained"
                        color="primary"

                    >log in
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Login
