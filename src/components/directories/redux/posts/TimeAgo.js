import { Typography } from "@mui/material"
import { parseISO, formatDistanceToNow } from "date-fns"

import React from 'react'

export const TimeAgo = ({timestamp}) => {

    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} назад`
    }


  return (
    <Typography>
        &nbsp; <i>{timeAgo}</i>
    </Typography>
  )
}
