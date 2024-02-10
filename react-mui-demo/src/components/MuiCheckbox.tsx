import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText} from '@mui/material'
import React, { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon  from '@mui/icons-material/Bookmark'


const MuiCheckbox = () => {
  const [accetTnc, setAcceptTnc] = useState(false)
  const [skills, setSkills] = useState<string[]>([])
  console.log(skills)
  console.log(accetTnc)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(event.target.checked)
  }

  const handelSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)

    if (index === -1) {
        setSkills([...skills, event.target.value])
    } else {
        setSkills(skills.filter((skill) => skill !== event.target.value))
    }
  }

  return (
    <Box>
      <Box>
        <FormControlLabel
          label='I accept terms and conditions'
          control={<Checkbox size='medium' checked={accetTnc} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox 
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={accetTnc}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
            label='HTML'
            control={<Checkbox value='html' checked={skills.includes('html')} onChange={handelSkillChange} />}
            />
            <FormControlLabel
            label='CSS'
            value='css' 
            control={<Checkbox checked={skills.includes('css')} onChange={handelSkillChange} />}
            />
            <FormControlLabel
            label='JavaScript'
            value='javascript' 
            control={<Checkbox checked={skills.includes('javascript')} onChange={handelSkillChange} />}
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>      
  )
}

export default MuiCheckbox
