import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const MUICard = () => {
    return (
        <Box m="50px" display="flex" flexDirection="row">
            <Box m="20px">
                <Card>
                    <CardContent>
                        <Typography variant="h5">React</Typography>
                        <Typography variant="body2">React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.</Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box m="20px">
                <Card>
                    <CardContent>
                        <Typography variant="h5">React</Typography>
                        <Typography variant="body2">React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Share</Button>
                        <Button>Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
            <Box m="20px">
                <Card>
                    <CardMedia 
                        component="img"
                        height="140"
                        image="https://nurserylive.com/cdn/shop/products/nurserylive-plants-rose-red-plant-16969265840268_150x150_crop_center.jpg?v=1674656824"
                    />
                    <CardContent>
                        <Typography variant="h5">React</Typography>
                        <Typography variant="body2">React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Share</Button>
                        <Button>Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    )
}

export default MUICard;