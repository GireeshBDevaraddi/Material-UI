
import { Stack } from "@mui/material"
import { DatePicker, DateTimePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from "dayjs";
import { useState } from "react";


const MUIDateTime = () =>{
    const [value, setValue] = useState<Dayjs | null>(null);
    console.log(value)
    return(
        <Stack spacing={4} direction="row" sx={{
            width : "800px"
        }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker />
                <DatePicker/>
                <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                <TimePicker/>
            </LocalizationProvider>
            
        </Stack>
    )
}

export default MUIDateTime