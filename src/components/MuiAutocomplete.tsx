import { Stack, Autocomplete, TextField } from "@mui/material"
import { useState } from 'react'  

type Skill = {
    id: number;
    label: string;
}

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']

const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
}));

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null)
  console.log({value,})
  const [skill, setSkill] = useState<Skill | null>(null)
  console.log({skill,})
  return (
    <Stack 
        spacing={2}
         width='250px'>
        <Autocomplete 
            options={skills} 
            renderInput={(params) => <TextField {...params} label="Skills" />} 
            value={value}
            onChange={(event: unknown, newValue: string | null) => setValue(newValue)}
            freeSolo
        />
        <Autocomplete 
            options={skillOptions} 
            renderInput={(params) => <TextField {...params} label="Skills" />} 
            value={skill}
            onChange={(event: unknown, newValue: Skill | null) => setSkill(newValue)}
        />

    </Stack>      
  )
}

export default MuiAutocomplete
