import { 
    TableContainer, 
    Table, 
    TableHead, 
    TableBody,
    TableRow, 
    TableCell, 
    Paper 
} from "@mui/material"

const MuiTable = () => {
  return (
      <TableContainer component={Paper} sx={{ maxHeight: '300px'}}>
        <Table aria-label='simple table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                  
                    </TableRow>
                ))}

            </TableBody>
        </Table>
      </TableContainer>
  )
}

const tableData = [{
    "id": 1,
    "first_name": "Ashien",
    "last_name": "Gristhwaite",
    "email": "agristhwaite0@about.com",
    "gender": "Female",
    "ip_address": "167.225.48.64"
  }, {
    "id": 2,
    "first_name": "Miguela",
    "last_name": "Hurry",
    "email": "mhurry1@miitbeian.gov.cn",
    "gender": "Female",
    "ip_address": "62.111.148.79"
  }, {
    "id": 3,
    "first_name": "Danella",
    "last_name": "McGettigan",
    "email": "dmcgettigan2@alibaba.com",
    "gender": "Female",
    "ip_address": "247.156.206.25"
  }, {
    "id": 4,
    "first_name": "Raquela",
    "last_name": "Livoir",
    "email": "rlivoir3@smugmug.com",
    "gender": "Female",
    "ip_address": "64.67.86.156"
  }, {
    "id": 5,
    "first_name": "Bel",
    "last_name": "Edgar",
    "email": "bedgar4@indiatimes.com",
    "gender": "Female",
    "ip_address": "224.247.103.53"
  }, {
    "id": 6,
    "first_name": "Jared",
    "last_name": "Paynter",
    "email": "jpaynter5@comsenz.com",
    "gender": "Male",
    "ip_address": "62.170.147.190"
  }, {
    "id": 7,
    "first_name": "Annora",
    "last_name": "Blazdell",
    "email": "ablazdell6@imdb.com",
    "gender": "Female",
    "ip_address": "117.4.171.170"
  }, {
    "id": 8,
    "first_name": "Hort",
    "last_name": "Barringer",
    "email": "hbarringer7@cafepress.com",
    "gender": "Male",
    "ip_address": "47.155.18.85"
  }, {
    "id": 9,
    "first_name": "Yves",
    "last_name": "Asbery",
    "email": "yasbery8@xing.com",
    "gender": "Male",
    "ip_address": "255.45.193.128"
  }, {
    "id": 10,
    "first_name": "Petronille",
    "last_name": "Browncey",
    "email": "pbrowncey9@chicagotribune.com",
    "gender": "Female",
    "ip_address": "197.30.39.154"
  }]
export default MuiTable
