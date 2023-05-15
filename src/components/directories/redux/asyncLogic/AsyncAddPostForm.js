import { Box, Button, TextField, Typography, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { asyncPostAdded } from './asyncPostsSlice'
import { selectAllAsyncUsers } from './asyncUsersSlice'

const style = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px 0'
    },
    title: {
        marginBottom: '10px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textField: {
        marginBottom: '10px',
        minWidth: '25vw'
    },
    addButton: {

    }
}

export const AsyncAddPostForm = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllAsyncUsers)

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onAuthorChange = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (title && content && userId) {
            dispatch(
                asyncPostAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
            setUserId('')
        }
    }

    const cantSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const renderUsers = users.map(user => (
        <MenuItem key={user.id} sx={style.postWrapper} value={user.id}>
            {user.name}
        </MenuItem>
    ))

    return (
        <Box sx={style.wrapper}>
            <Typography sx={style.title} variant='h4'>Добавить новый пост</Typography>
            <Box sx={style.form} component='form'>
                <TextField
                    sx={style.textField}
                    label='Введите заголовок'
                    value={title}
                    onChange={onTitleChange}
                />
                <Select
                    sx={style.textField}
                    value={userId}
                    onChange={onAuthorChange}
                >
                    {renderUsers}
                </Select>
                <TextField
                    sx={style.textField}
                    label='Введите пост'
                    value={content}
                    onChange={onContentChange}
                />
                <Button sx={style.addButton}
                    variant='contained'
                    onClick={onSavePostClicked}
                    disabled={!cantSave}
                >Добавить</Button>
            </Box>
        </Box>
    )
}
