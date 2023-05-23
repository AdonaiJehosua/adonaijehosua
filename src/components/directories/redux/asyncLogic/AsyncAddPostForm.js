import { Box, Button, TextField, Typography, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addNewPost } from './asyncPostsSlice'
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
    addButton: {}
}

export const AsyncAddPostForm = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [data, setData] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const users = useSelector(selectAllAsyncUsers)

    const onTitleChange = e => setTitle(e.target.value)
    const onDataChange = e => setData(e.target.value)
    const onAuthorChange = e => setUserId(e.target.value)

    const canSave = [title, data, userId].every(Boolean) && addRequestStatus === 'idle'

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewPost({ title, body: data, userId })).unwrap()
                setTitle('')
                setData('')
                setUserId('')
            } catch (error) {
                console.error('Failed to save the post ', error)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

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
                    value={data}
                    onChange={onDataChange}
                />
                <Button sx={style.addButton}
                    variant='contained'
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Добавить</Button>
            </Box>
        </Box>
    )
}
