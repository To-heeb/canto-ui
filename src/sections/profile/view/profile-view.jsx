import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import Iconify from 'src/components/iconify';

import ProfileUpdate from '../profile-update';
import ProfileDetails from '../profile-details';

// ----------------------------------------------------------------------

export default function AppView() {
    return (
        <Container maxWidth="xl">
            <Typography variant="h4" sx={{ mb: 5 }}>
                Hi, Oyekola Toheeb 👋
            </Typography>

            <Grid container spacing={3}>


                <Grid xs={12} md={6} lg={8}>
                    <ProfileUpdate
                        title="Update Profile"
                        list={[...Array(5)].map((_, index) => ({
                            id: faker.string.uuid(),
                            title: faker.person.jobTitle(),
                            description: faker.commerce.productDescription(),
                            image: `/assets/images/covers/cover_${index + 1}.jpg`,
                            postedAt: faker.date.recent(),
                        }))}
                    />
                </Grid>

                <Grid xs={12} md={6} lg={4}>
                    <ProfileDetails
                        title="Profile Details"
                        list={[...Array(5)].map((_, index) => ({
                            id: faker.string.uuid(),
                            title: [
                                '1983, orders, $4220',
                                '12 Invoices have been paid',
                                'Order #37745 from September',
                                'New order placed #XF-2356',
                                'New order placed #XF-2346',
                            ][index],
                            type: `order${index + 1}`,
                            time: faker.date.past(),
                        }))}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
