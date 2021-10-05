import React, { useState, useEffect } from 'react';
import useStyle from './style';
import { Typography, TextField, Button, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyle();
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        tags: '',
        message: '',
        selectedFile: ''
    })
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const dispatch = useDispatch();


    useEffect(() => {
        if (post) {
            setPostData(post);
        }
    }, [post])

    const handleSubmit = (event) => {
        event.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
        clear();

    }

    const clear = () => {
        setCurrentId(null)
        setPostData({
            creator: '',
            title: '',
            tags: '',
            message: '',
            selectedFile: ''
        })

    }
    return (
        <>
            <Paper className={classes.paper}>
                <form autoComplete="off" className={`${classes.root} ${classes.form}`} noValidate onSubmit={handleSubmit}>
                    <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memories</Typography>
                    <TextField name="creator" label="Creator" variant="outlined" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                    <TextField name="title" label="Title" variant="outlined" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    <TextField name="message" label="Message" variant="outlined" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    <TextField name="tags" label="Tags" variant="outlined" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />

                    <div className={classes.fileInput}>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                    </div>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" size="large" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

                </form>
            </Paper>
        </>
    )
}

export default Form