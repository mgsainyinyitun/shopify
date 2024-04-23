import { Box, Button, LinearProgress, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_HOST } from "../../../constant"

export default function TradingPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { merchant, product, currentTask, totalTasks, tradeHist } = location.state;
    const steps = [
        {
            label: 'Submit Assignment',
            description: `Sending Task (${currentTask}/${totalTasks})`,
        },
        {
            label: 'Trader Review',
            description:
                'Request Review From Merchant.',
        },
        {
            label: 'Send Data',
            description: `Sending Data to process.`,
        },
        {
            label: 'Task Completed',
            description: ` You have received ${product ? product.commission : 0} % commission from the merchant task ${merchant ? merchant.name : 0}, and the commissin has been issued to your platform account.`,
        }
    ];
    const [activeStep, setActiveStep] = useState(0);

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };
    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };


    useEffect(() => {
        const url = `${API_HOST}/trade/trade-finish`
        const token = localStorage.getItem('accessToken');
        setTimeout(() => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setTimeout(() => {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                const data = {
                    tradeId: tradeHist.id
                }
                axios.post(url, data, {
                    mode: 'no-cors',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                })
                    .then(response => {
                        console.log(response.data);
                        setTimeout(() => {
                            setActiveStep((prevActiveStep) => prevActiveStep + 1);
                        }, 3000)

                    })
                    .catch(error => {
                        console.error(error.response.data);
                    });
            }, 3000)
        }, 3000);
    }, []);


    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '70%' }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepLabel>
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography>{step.description}</Typography>
                                {activeStep !== 3 ?
                                    <Box sx={{ mb: 2 }}>
                                        <LinearProgress color="success" />
                                    </Box> : null
                                }
                                {activeStep === 3 ?
                                    <Button fullWidth variant="outlined" onClick={() => navigate("/jobcl")} sx={{ mt: 1, mr: 1 }}>
                                        CONFIRM
                                    </Button> : null
                                }
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper elevation={0} sx={{ p: 3 }}>
                        <Typography>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </Paper>
                )}
            </Box>
        </Box>
    )
}


// axios.post(url, data, {
//     mode: 'no-cors',
//     headers: {
//         'Authorization': `Bearer ${token}`
//     },
// })
//     .then(response => {
//         console.log(response.data);
//             setActiveStep(3);
//     })
//     .catch(error => {
//         console.error(error.response.data);
//     });