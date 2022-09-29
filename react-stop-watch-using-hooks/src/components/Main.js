import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import StopWatch from './StopWatch';
import Timer from './Timer';

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box className="main-box" sx={{ width: '50%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Timer" value="1" />
                        <Tab label="StopWatch" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1"><Timer /></TabPanel>
                <TabPanel value="2"><StopWatch /></TabPanel>
            </TabContext>
        </Box>
    );
}