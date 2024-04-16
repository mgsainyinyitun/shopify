import { Typography } from '@mui/material';
import List from '@mui/material/List';
import MerchantProduct from './MerchantProduct';
export default function MerchantList() {

    return (
        <>
            <Typography mt={3} variant='h6' color={'gray'}>
                All Merchants
            </Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <MerchantProduct
                    info={'Business -- Sample Product of Mg Merchants'}
                />
                <MerchantProduct
                    info={'Shopee -- Electrical Product of Mg Merchants'}
                />
            </List>
        </>
    );
}