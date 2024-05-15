import { Box, Button, LinearProgress, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { API_HOST } from "../../../constant"

export default function TradingPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { merchant, product, currentTask, totalTasks } = location.state;
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

    const [step1Error, setStep1Error] = useState(false);
    const [step1ErrorMsg, setStep1ErrorMsg] = useState("");

    function startTrade() {
        const url = `${API_HOST}/trade/start-trade`
        const token = localStorage.getItem('accessToken');
        const data = {
            tradeId: product.tradeId,
            productId: product.id,
            taskNumber: currentTask
        }
        console.log('start-trade', data);
        axios.post(url, data, {
            mode: 'no-cors',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => {
                console.log('start-trade', response.data);
                setTimeout(() => {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1); // step 1
                    finishTrade(response.data);
                }, 3000)
            })
            .catch(error => {
                console.error(error.response.data);
                setTimeout(() => {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1); // step 1
                    setStep1Error(true);
                    setStep1ErrorMsg(error.response.data.message);
                }, 3000)
            });
    }


    function finishTrade(tradeHist) {
        const url = `${API_HOST}/trade/trade-finish`;
        const token = localStorage.getItem('accessToken');
        axios.post(url, { tradeId: tradeHist.id }, {
            mode: 'no-cors',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => {
                console.log(response.data);
                setTimeout(() => {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1); // step 2

                    setTimeout(() => {
                        setActiveStep((prevActiveStep) => prevActiveStep + 1); // step 3
                    }, 3000)
                }, 3000)
            })
            .catch(error => {
                console.error(error.response.data);
                setTimeout(() => {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1); // step 2
                }, 3000)
            });
    }

    useEffect(() => {
        setTimeout(() => {
            startTrade(); // wait 3 second and start-trade
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
                                {!step1Error ? (<Typography>{step.description}</Typography>) : null}
                                {
                                    step1Error && (
                                        <Box display='flex' alignItems='center'>
                                            <ErrorOutlineIcon sx={{ color: 'red', marginRight: 1 }} /><Typography color="error"> {step1ErrorMsg}</Typography>
                                        </Box>
                                    )
                                }
                                {!step1Error && activeStep !== 3 ?
                                    <Box sx={{ mb: 2 }}>
                                        <LinearProgress color="success" />
                                    </Box> : null
                                }
                                {!step1Error && activeStep === 3 ?
                                    <Button fullWidth variant="outlined" onClick={() => navigate("/job")} sx={{ mt: 1, mr: 1 }}>
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