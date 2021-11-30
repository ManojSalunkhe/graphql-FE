import { useState } from "react"
import { Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import EmailIcon from '@material-ui/icons/Email'
import PersonIcon from '@material-ui/icons/Person'
import VisibilityIcon from '@material-ui/icons/Visibility'
import TextFields from "../components/TextFields"
import { useQuery, gql, useLazyQuery, useMutation } from '@apollo/client'
import { REGISTER_MUTATION } from '../query'

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
                await register({
                    variables: {
                        input: {
                            email: "mani@gmail.com",
                            password: "9876543210"
                        }
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
        apiCall()
    }

    return (
        <div className={classes.container}>
            <form onSubmit={handleRegisterSubmit} >
                <div className={classes.textFieldsParent}>
                    <TextFields Icon={PersonIcon} label="username" value={registerCredentials.username} updaterFunc={handleTextFieldChnage} />
                    <TextFields Icon={EmailIcon} label="email" value={registerCredentials.email} updaterFunc={handleTextFieldChnage} />
                    <TextFields Icon={VisibilityIcon} label="password" value={registerCredentials.password} updaterFunc={handleTextFieldChnage} />
                    <Button
                        className={classes.textFields}
                        type="submit"
                        variant="contained"
                        color="primary"

                    >register
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Register
