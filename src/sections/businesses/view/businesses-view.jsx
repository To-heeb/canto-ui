import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { posts } from 'src/_mock/blog';

import Iconify from 'src/components/iconify';

import BusinessCard from '../business-card';
import BusinsessSort from '../business-sort';
import BusinessSearch from '../business-search';

// ----------------------------------------------------------------------

export default function BusinessesView() {
    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Businesses</Typography>

                <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
                    Add New Business
                </Button>
            </Stack>

            <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                <BusinessSearch businesses={posts} />
                <BusinsessSort
                    options={[
                        { value: 'latest', label: 'Latest' },
                        { value: 'popular', label: 'Popular' },
                        { value: 'oldest', label: 'Oldest' },
                    ]}
                />
            </Stack>
            <Grid container spacing={3}>
                {posts.map((post, index) => (
                    <BusinessCard key={post.id} business={post} index={index} />
                ))}
            </Grid>
        </Container>
    );
}
