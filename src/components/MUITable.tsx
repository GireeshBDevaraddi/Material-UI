import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
const MUITable= () =>{
    const TableData = [
        {
          "id": 1,
          "first_name": "Guglielmo",
          "last_name": "Dunk",
          "email": "gdunk0@meetup.com",
          "gender": "Male",
          "ip_address": "67.212.166.237"
        },
        {
          "id": 2,
          "first_name": "Florie",
          "last_name": "Cowern",
          "email": "fcowern1@quantcast.com",
          "gender": "Female",
          "ip_address": "179.167.163.182"
        },
        {
          "id": 3,
          "first_name": "Torey",
          "last_name": "Lawlee",
          "email": "tlawlee2@marketwatch.com",
          "gender": "Male",
          "ip_address": "129.192.232.10"
        },
        {
          "id": 4,
          "first_name": "Katinka",
          "last_name": "Chatters",
          "email": "kchatters3@ucoz.com",
          "gender": "Female",
          "ip_address": "201.206.215.60"
        },
        {
          "id": 5,
          "first_name": "Garner",
          "last_name": "Parnham",
          "email": "gparnham4@dailymotion.com",
          "gender": "Male",
          "ip_address": "150.12.141.188"
        },
        {
          "id": 6,
          "first_name": "Fernande",
          "last_name": "Merlin",
          "email": "fmerlin5@livejournal.com",
          "gender": "Female",
          "ip_address": "123.42.156.2"
        },
        {
          "id": 7,
          "first_name": "Shina",
          "last_name": "Denisevich",
          "email": "sdenisevich6@quantcast.com",
          "gender": "Female",
          "ip_address": "28.249.99.141"
        },
        {
          "id": 8,
          "first_name": "Raul",
          "last_name": "Conaghan",
          "email": "rconaghan7@fema.gov",
          "gender": "Male",
          "ip_address": "115.82.223.125"
        },
        {
          "id": 9,
          "first_name": "Shari",
          "last_name": "Matoshin",
          "email": "smatoshin8@umn.edu",
          "gender": "Female",
          "ip_address": "125.27.165.181"
        },
        {
          "id": 10,
          "first_name": "Gisele",
          "last_name": "Kellaway",
          "email": "gkellaway9@nature.com",
          "gender": "Female",
          "ip_address": "63.237.253.96"
        }
      ]
    return(
        <TableContainer component={Paper} sx={{maxHeight: '300px', margin: "5px"}}>
            <Table aria-label="simple-table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>IP Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        TableData.map(data=>(
                            <TableRow key={data.id}>
                                <TableCell>{data.id}</TableCell>
                                <TableCell>{data.first_name}</TableCell>
                                <TableCell>{data.last_name}</TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell>{data.gender}</TableCell>
                                <TableCell>{data.ip_address}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MUITable