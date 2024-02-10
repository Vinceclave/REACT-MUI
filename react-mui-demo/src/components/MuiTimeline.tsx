import { 
    Timeline, 
    TimelineItem, 
    TimelineSeparator, 
    TimelineConnector, 
    TimelineContent, 
    TimelineDot,
    TimelineOppositeContent, 
} from '@mui/lab'
import { Typography } from '@mui/material'


const MuiTimeline = () => {
    return <Timeline position='alternate'>
        <TimelineItem>
            <TimelineOppositeContent>
            <Typography color='secondary'>
                9:30 am
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined'/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                City A
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent>
            <Typography color='secondary'>
                10:30 am
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined'/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                City B
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent>
                <Typography color='secondary'>
                    11:30 am
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined'/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                City C
            </TimelineContent>
        </TimelineItem>
    </Timeline>
}

export default MuiTimeline
