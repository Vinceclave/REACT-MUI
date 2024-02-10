import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const MuiAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary id='panel1-header' aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est nemo quo hic non iusto possimus consequatur libero id quibusdam, ipsum eligendi harum a distinctio ut voluptatem voluptatum vero, quis labore!
                Illum velit adipisci quia expedita. Quam quibusdam repellendus laborum! Illo, iusto sit atque ipsum enim amet doloribus quia ipsa, ducimus sunt minus libero culpa pariatur voluptatem architecto, impedit voluptates itaque.
                Tenetur molestiae illum non commodi tempora blanditiis temporibus dolorum aut? Nam corporis pariatur beatae deleniti molestiae velit, fugit perferendis a rerum recusandae eligendi sint voluptate maiores ullam hic sapiente ex!
             </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MuiAccordion
