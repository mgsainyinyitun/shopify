import { Box } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';

function Header(){
    return (
        <header>
            <Box  p={1} sx={{borderBottom:"1px solid gray", zIndex:1, background:'white', display:'flex',justifyContent:'space-between',position:'fixed',top:0,width:'100%'}}>
                <Box ml={1} sx={{display:'flex',alignItems:'center'}}>
                    <Box>
                        <ShoppingCartIcon/>
                    </Box>
                    <Box>
                        Shopify
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