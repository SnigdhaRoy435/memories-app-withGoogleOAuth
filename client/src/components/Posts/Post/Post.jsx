import React from 'react';
import useStyle from './style';
import { Card, CardActions, CardMedia, CardContent, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { deletePost, likePost } from '../../../actions/posts';
import { useDispatch } from 'react-redux';



const Post = ({ post, setCurrentId }) => {
    const classes = useStyle();

    const dispatch = useDispatch();

    /* const deleteData = () => {
         dispatch(deletePost(post._id));
     }*/

    return (
        <>

            <Card className={classes.card}>
                <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
                <div className={classes.overlay}>
                    <Typography variant="h6">{post.creator}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button style={{ color: 'white' }}
                        size="small"
                        onClick={() => setCurrentId(post._id)}>
                        <MoreHorizIcon fontSize="medium" />
                    </Button>
                </div>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <CardContent>
                    <Typography variant="h5" gutterBottom className={classes.title}>{post.title}</Typography>
                    <Typography variant="caption" color="textSecondary">{post.message}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button color="primary" size="small" onClick={() => dispatch(likePost(post._id))}>
                        <ThumbUpAltIcon fontSize="small" />
                        Like &nbsp;
                        {post.likeCount}
                    </Button>
                    <Button color="primary" size="small" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                </CardActions>
            </Card>

        </>
    )
}

export default Post;