import { parseISO, formatDistanceToNow } from "date-fns"

import React from 'react'

export const AsyncTimeAgo = ({timestamp}) => {

    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} назад`
    }


  return (
    <span style={{fontSize: '10px'}}>
        &nbsp; <i>{timeAgo}</i>
    </span>
  )
}
