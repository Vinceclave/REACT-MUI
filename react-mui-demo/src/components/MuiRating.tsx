import { Stack, Rating} from "@mui/material" 
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'


const MuiRating = () => {
  const [value, setValue] = useState<number | null>(2.9)
  console.log( {value} )
  const handleChange = (
    _event:React.ChangeEvent<object>,
    newValue: number | null
  ) => {
    setValue(newValue)
  }
  return (
    <Stack>
        <Rating 
            value={value}
            onChange={handleChange} 
            precision={0.5}
            size='large'   
            icon={<FavoriteIcon fontSize='inherit' color="error"/>}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit' />} 
            highlightSelectedOnly
        />
    </Stack>
    
  )
}

export default MuiRating
