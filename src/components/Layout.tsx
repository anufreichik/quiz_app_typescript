import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Box} from "@mui/material";

const Layout: React.FC = ({children}) => {
    return (
        <Box sx={{
            display: 'flex',
            p: 1,
            m: 1,
            backgroundColor: 'background.paper',
            flexDirection: 'column',
            justifyContent: 'start',
            height:'96vh'

        }}>
            <Header/>
            <Box sx={{
                display: 'flex',
                p: 1,
                m: 1,
                backgroundColor: 'background.white',
                flexDirection: 'row',
                justifyContent: 'center',
                flex:1

            }}>
                {children}
            </Box>
            <Footer/>
        </Box>
    );
}

export default Layout;
