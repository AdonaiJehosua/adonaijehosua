import { Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { selectAllUsers } from './usersSlice'

export const PostsAuthor = ({userId}) => {
  
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId)

  return (
    <span style={{fontSize: '12px'}}>от {author ? author.name : 'Неизвестный автор'}</span>
  )
}