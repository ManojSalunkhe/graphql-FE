import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_BLOGS_QUERY } from '../query'
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
    Avatar
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        margin: "20px",
        minWidth: 250,
        maxWidth: 250
    },

    heading: {
        color: "#FCFCFC",
        textAlign: "center"
    },

    cardContent: {
        textAlign: "center"
    },

    cardAction: {
        display: "felx",
        justifyContent: "flex-end"
    },

    gridContainer: {
        flexGrow: 1
    },

    avatar: {
        backgroundColor: theme.palette.primary.light
    },

}))

function Blog() {

    const classes = useStyles()

    const { data } = useQuery(GET_ALL_BLOGS_QUERY)

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        if (data) setBlogs(data.getAllBlog)
    }, [data])


    return (
        <div>
            {/* <Typography variant="h3" className={classes.heading}>Blogs - {blogs.length}</Typography> */}
            <Container>
                <Grid container >
                    {
                        blogs && blogs.map((blog) => {
                            return (
                                <div key={blog.id}>
                                    <Grid item xs={1} className={classes.root}>
                                        <Card elevation={24} >
                                            <CardActions>
                                                <Avatar className={classes.avatar} > {blog.title.slice(0, 1)}</Avatar> <Typography  >{blog.title.slice(1)}</Typography>
                                                <Divider orientation="vertical" flexItem />
                                            </CardActions>
                                            <Divider />
                                            <CardContent className={classes.cardContent}>
                                                <Typography variant="h5" >{blog.title}</Typography>
                                                <Typography >{blog.body.slice(0, 30)}...</Typography>
                                            </CardContent>
                                            <CardActions className={classes.cardAction}>
                                                <Button size="small" color="primary">view more...</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </div>
                            )
                        })
                    }
                </Grid>
            </Container>
        </div >
    )
}

export default Blog
