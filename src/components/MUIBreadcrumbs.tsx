import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const MUIBreadcrumb = () => {
    return (
        <Box m={2}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link href="#" underline="hover">Home</Link>
                <Link href="#" underline="hover">Catalog</Link>
                <Link href="#" underline="hover">Accessories</Link>
                <Typography color={'text.primary'}>Shoes</Typography>
            </Breadcrumbs>
            <Breadcrumbs aria-label="breadcrumb" separator="-">
                <Link href="#" underline="hover">Home</Link>
                <Link href="#" underline="hover">Catalog</Link>
                <Link href="#" underline="hover">Accessories</Link>
                <Typography color={'text.primary'}>Shoes</Typography>
            </Breadcrumbs>
            <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                <Link href="#" underline="hover">Home</Link>
                <Link href="#" underline="hover">Catalog</Link>
                <Link href="#" underline="hover">Accessories</Link>
                <Typography color={'text.primary'}>Shoes</Typography>
            </Breadcrumbs>
            <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} maxItems={2}>
                <Link href="#" underline="hover">Home</Link>
                <Link href="#" underline="hover">Catalog</Link>
                <Link href="#" underline="hover">Accessories</Link>
                <Typography color={'text.primary'}>Shoes</Typography>
            </Breadcrumbs>
            <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} 
                    maxItems={2} itemsAfterCollapse={2} itemsBeforeCollapse={2}>
                <Link href="#" underline="hover">Home</Link>
                <Link href="#" underline="hover">Catalog</Link>
                <Link href="#" underline="hover">Accessories</Link>
                <Link href="#" underline="hover">Brands</Link>
                <Typography color={'text.primary'}>RedTape</Typography>
            </Breadcrumbs>
        </Box>
    )
}

export default MUIBreadcrumb