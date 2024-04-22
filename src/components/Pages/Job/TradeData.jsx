import { Box, Chip, Rating, Typography } from "@mui/material";
import LightButton from "../../common/LightButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_HOST } from "../../../constant";
import { getImageFromDb } from "../../../utils/ImageUtils";
import { useNavigate } from "react-router-dom";

export default function TradeData({ merchant, totalTasks, currentTask }) {
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [image, setImage] = useState(null);
    const [tradeHist, setTradeHist] = useState(null);

    useEffect(() => {
        const url = `${API_HOST}/product/request-trade`
        const token = localStorage.getItem('accessToken');
        console.log(merchant);
        if (merchant) {
            axios.get(url, {
                params: {
                    merchantId: merchant.id,
                },
                mode: 'no-cors',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            }).then(response => {
                console.log(response.data);
                setProduct(response.data);
                getImageFromDb(response.data.uid, setImage);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [merchant]);


    const PriceInfo = ({ price }) => {
        return (
            <Box display={'flex'}>
                ≈ {price}
                <Typography margin={'2px'} variant='body1' color={'gray'} fontSize={12}><i>Rs</i></Typography>
            </Box>
        );
    }


    function tradeProduct() {
        const url = `${API_HOST}/trade/start-trade`
        const token = localStorage.getItem('accessToken');

        const data = {
            productId: product.id,
            taskNumber: currentTask
        }
        console.log(data);

        axios.post(url, data, {
            mode: 'no-cors',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        }).then(response => {
            console.log(response.data);
            setTradeHist(response.data);
            navigate("/trade", {
                replace: false,
                state: {
                    merchant,
                    tradeHist:response.data,
                    product,
                    currentTask,
                    totalTasks
                }
            });

        })
        .catch(error => {
            console.error(error.response.data);
        });
    }



    return (
        <>
            <Typography variant='h6' color={'gray'} mb={3} mt={5}>
                Merchant Tasks
            </Typography>
            {
                product ?
                    <Box p={2} m={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box width={"80%"} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                <Typography textAlign={'center'} color={'gray'}>{`${product.name} - ${product.description}`}</Typography>
                                <Typography textAlign={'center'} color={'gray'}><i> {`${product.price} Rs * 1`}</i></Typography>
                            </Box>
                            <Box>
                                <img src={image} alt="Product Image" height={"100px"} />
                            </Box>
                        </Box>
                    </Box> : null
            }


            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: 8 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant='body1' color={'gray'}>
                            <i>Number of Tasks</i>
                        </Typography>
                        <Typography variant='body1' color={'gray'}>
                            <Chip label={`${currentTask}/${totalTasks}`} variant="outlined" size="small" />
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant='body1' color={'gray'}>
                            <i>  Commission For the Product</i>
                        </Typography>
                        <PriceInfo price={product ? product.commission : 0} />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant='body1' color={'gray'}>
                            <i> Order Price</i>
                        </Typography>
                        <PriceInfo price={product ? product.price : 0} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant='body1' color={'gray'}>
                            <i>Qualification requirements</i>
                        </Typography>
                        <Typography variant='body1' color={'gray'}>
                            <Rating value={product ? product.rating : 0} />
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <LightButton
                text={'COMENZAR TRABAJO'}
                onClick={tradeProduct}
            />
        </>
    );

}


// atomic habit
// 1.obvious (min tr tin shr te signal shi ya mel) (reminder)
// 2.easy to start
// 3.attractive
// 4.statisfy (set kya nut mu shi ya mel)
