import { Box } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import icon from "../../imgs/icon/iconpng.jpg";

function Header(){
    return (
        <header>
            <Box  p={1} sx={{borderBottom:"1px solid rgba(255,0,0,0.1)", zIndex:1, background:'white', display:'flex',justifyContent:'space-between',position:'fixed',top:0,width:'100%'}}>
                <Box ml={1} sx={{display:'flex',alignItems:'center'}}>
                    <Box>
                       <img src={icon} width={120}/>
                    </Box>
                </Box>
                <Box mr={1}>
                    <LanguageIcon/>
                </Box>
            </Box>
        </header>
    );
}

export default Header;