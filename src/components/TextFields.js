import {
    TextField,
    Divider,
    IconButton,
    InputAdornment
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    textFields: {
        margin: "10px",
        minWidth: 420,
        minHeight: 30
    }
}))

function TextFields(props) {

    const { Icon, label, value, updaterFunc } = props
    const classes = useStyles()


    return (
        <div>
            <TextField

                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton>
                                {/* <Divider orientation="vertical" flexItem /> */}
                                <Icon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}

                className={classes.textFields}
                label={label}
                type={label}
                variant="outlined"
                value={value}
                onChange={(e) => updaterFunc(e, label)}
            />
        </div>
    )
}

export default TextFields
