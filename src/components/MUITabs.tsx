import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { SyntheticEvent, useState } from "react"

const MUITabs = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event: SyntheticEvent<Element, Event>, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Box>
            <TabContext value={value} >
                <Box sx={{
                    borderBottom: 1, borderColor: 'divider'
                }}>
                    <TabList aria-label="tabs" onChange={handleChange}>
                        <Tab label="Tab One" value='1'></Tab>
                        <Tab label="Tab Two" value='2'></Tab>
                        <Tab label="Tab Three" value='3'></Tab>
                    </TabList>
                </Box>
                <TabPanel value="1">Panel One </TabPanel>
                <TabPanel value="2">Panel Two </TabPanel>
                <TabPanel value="3">Panel Three </TabPanel>
            </TabContext>

            <TabContext value={value} >
                <Box sx={{
                    borderBottom: 1, borderColor: 'divider'
                }}>
                    <TabList aria-label="tabs" onChange={handleChange} textColor="secondary" indicatorColor="secondary">
                        <Tab label="Tab One" value='1'></Tab>
                        <Tab label="Tab Two" value='2'></Tab>
                        <Tab label="Tab Three" value='3'></Tab>
                    </TabList>
                </Box>
                <TabPanel value="1">Panel One </TabPanel>
                <TabPanel value="2">Panel Two </TabPanel>
                <TabPanel value="3">Panel Three </TabPanel>
            </TabContext>
        </Box>
    )
}
export default MUITabs