import { Typography } from '@mui/material';
import List from '@mui/material/List';
import MerchantProduct from './MerchantProduct';
export default function MerchantList(props) {

    return (
        <>
            <Typography mt={3} variant='h6' color={'gray'}>
                All Merchants
            </Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
                props.merchants.map(merchant=>{
                    return <MerchantProduct merchant={merchant}/>
                })
            }
            </List>
        </>
    );
}