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
            alignItems:'center',
            height: '96vh'

        }}>
            <Header/>

            <div className='__container'>
                {children}
            </div>


            <Footer/>
        </Box>
    );
}

export default Layout;
