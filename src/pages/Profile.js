import React, { useEffect, useState } from 'react'
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    makeStyles,
    Grid,
    Container,
    Divider,
    TextField,
    Avatar
} from '@material-ui/core'
import { GET_ACCOUNT_QUERY } from '../query'
import { useQuery, useMutation } from '@apollo/client'
import { UPDATE_USER_MUTATION } from '../query'

const useStyles = makeStyles((theme) => ({

    root: {
        marginTop: 100
    },

    card: {
        textAlign: "center",
        minWidth: 400,
        maxWidth: 500
    },

    textFields: {
        marginBottom: 12,
        minWidth: 400
    },

    avatar: {
        backgroundColor: theme.palette.primary.light,
        width: theme.spacing(13),
        height: theme.spacing(13)
    },

    button: {
        backgroundColor: theme.palette.primary.light,
        color: "black"
    }
}))

function Profile() {

    const classes = useStyles()

    const [profileDetails, setProfileDetails] = useState({})
    const [textFieldDisabled, setTextFieldDisabled] = useState(true)

    const [registerCredentials, setRegisterCredentials] = useState({ username: '', email: '', password: '' })

    const { data } = useQuery(GET_ACCOUNT_QUERY)

    const [update] = useMutation(UPDATE_USER_MUTATION)


    useEffect(() => {
        if (data) setProfileDetails(data.getAccountDetails)
    }, [data])

    const handleTextFieldChnage = (e, label) => {
        console.log(e.target.value)
        if (label === "username") setRegisterCredentials({ ...registerCredentials, username: e.target.value })
        if (label === "email") setRegisterCredentials({ ...registerCredentials, email: e.target.value })
        if (label === "password") setRegisterCredentials({ ...registerCredentials, password: e.target.value })
    }

    const editUserDetails = () => {
        setTextFieldDisabled(!textFieldDisabled)
    }

    const saveUserDetails = () => {
        console.log(registerCredentials)
    }

    return (
        <div className={classes.root}>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
            >
                <Card elevation={24} >
                    <CardContent>
                        <Grid container className={classes.textFields} justifyContent="center">
                            <Avatar className={classes.avatar} c
                                olor="primary"
                            >
                                Yas
                            </Avatar>
                        </Grid>
                        <Grid item className={classes.textFields}>
                            <TextField
                                value={textFieldDisabled ? profileDetails.username : registerCredentials.username}
                                disabled={textFieldDisabled}
                                variant="outlined"
                                fullWidth
                                onChange={(e) => handleTextFieldChnage(e, "username")}
                            />
                        </Grid>
                        <Grid item className={classes.textFields}>
                            <TextField
                                value={profileDetails ? profileDetails.email : registerCredentials.email}
                                disabled={textFieldDisabled}
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setRegisterCredentials({ ...registerCredentials, email: e.target.value })}
                            />
                        </Grid>
                        <Grid item className={classes.textFields}>
                            <TextField
                                value={profileDetails ? profileDetails.password : registerCredentials.password}
                                disabled
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        {
                            textFieldDisabled ? (
                                <Button
                                    className={classes.button}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={editUserDetails}
                                >
                                    edit
                                </Button>
                            ) : (
                                <Button
                                    className={classes.button}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={saveUserDetails}
                                >
                                    save
                                </Button>
                            )
                        }
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default Profile
