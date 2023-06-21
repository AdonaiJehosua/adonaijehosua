import { useSelector } from "react-redux"
import { selectAllAsyncUsers } from './asyncUsersSlice'

export const AsyncPostsAuthor = ({userId}) => {
  
    const users = useSelector(selectAllAsyncUsers)

    const author = users.find(user => user.id === userId)

  return (
    <span style={{fontSize: '12px'}}>от {author ? author.name : 'Неизвестный автор'}</span>
  )
}