import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const MUISkelton = () => {
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 10000)
    },[])
    return (
        <Stack spacing={2}>
            <Stack spacing={1} width={"350px"} sx={{ marginLeft: "50px" }}>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton variant="circular" width={'40px'} height={'40px'} animation="pulse"></Skeleton>
                <Skeleton variant="circular" width={'40px'} height={'40px'} animation="pulse"></Skeleton>
                <Skeleton variant="circular" width={'40px'} height={'40px'} animation="pulse"></Skeleton>

                <Skeleton variant="rectangular" width={'250px'} height={'125px'} animation="wave"></Skeleton>
                <Skeleton variant="rectangular" width={'250px'} height={'125px'} animation="wave"></Skeleton>
                <Skeleton variant="rectangular" width={'250px'} height={'125px'} animation="wave"></Skeleton>
            </Stack>
            <Box
                sx={{
                    width: "350px"
                }}>
                {
                    loading ? (
                        <Skeleton variant="rectangular" width={256} height={144} animation="wave"></Skeleton>
                    ) : (
                        <img src="https://nurserylive.com/cdn/shop/products/nurserylive-plants-rose-red-plant-16969265840268_150x150_crop_center.jpg?v=1674656824" alt="skelton" width={256} height={144} />
                    )
                }
            </Box>
            
            <Stack direction={'row'} spacing={1} 
                sx={{
                    width: '100%',
                    marginTop: '12px'
                }}
            >
                {
                    loading ? (
                        <Skeleton variant="circular" width={40} height={40} animation='wave' />
                    ): (<Avatar>V</Avatar>)
                }
                <Stack sx={{width: "80%"}}>
                    {loading ? (
                        <>
                            <Typography variant="body1">
                                <Skeleton variant="text" width="100%" animation='wave'></Skeleton>
                            </Typography>
                            <Typography variant="body2">
                                <Skeleton variant="text" width="100%" animation='wave'></Skeleton>
                            </Typography>
                        </>
                    ): (
                        <Typography variant="body2">React </Typography>
                    )}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default MUISkelton