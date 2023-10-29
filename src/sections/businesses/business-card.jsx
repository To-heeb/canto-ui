import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export default function BusinessCard({ business, index }) {

    const { cover, title, view, comment, share, author } = business;

    // come back to use these for Ads if needed
    const latestPostLarge = index === null;

    const latestPost = index === null || index === null;

    const renderAvatar = (
        <Avatar
            alt={author.name}
            src={author.avatarUrl}
            sx={{
                zIndex: 9,
                width: 32,
                height: 32,
                position: 'absolute',
                left: (theme) => theme.spacing(3),
                bottom: (theme) => theme.spacing(-2),
                ...((latestPostLarge || latestPost) && {
                    zIndex: 9,
                    top: 24,
                    left: 24,
                    width: 40,
                    height: 40,
                }),
            }}
        />
    );

    // this will be clickable to show the full details of businesses
    const renderName = (
        <Link
            color="inherit"
            variant="subtitle2"
            underline="hover"
            sx={{
                height: 44,
                overflow: 'hidden',
                WebkitLineClamp: 2,
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                ...(latestPostLarge && { typography: 'h5', height: 60 }),
                ...((latestPostLarge || latestPost) && {
                    color: 'common.white',
                }),
            }}
        >
            Business Name
        </Link>
    );

    const renderInfo = (
        <Stack
            direction="row"
            flexWrap="wrap"
            spacing={1.5}
            justifyContent="flex-end"
            sx={{
                mt: 3,
                color: 'text.disabled',
            }}
        >
            {[
                { number: comment, icon: 'eva:message-circle-fill' },
                { number: view, icon: 'eva:eye-fill' },
                { number: share, icon: 'eva:share-fill' },
            ].map((info, _index) => (
                <Stack
                    key={_index}
                    direction="row"
                    sx={{
                        ...((latestPostLarge || latestPost) && {
                            opacity: 0.48,
                            color: 'common.white',
                        }),
                    }}
                >
                    {/* only view and stars will be showed here */}
                    <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
                    <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
                </Stack>
            ))}
        </Stack>
    );

    const renderCover = (
        <Box
            component="img"
            alt={title}
            src={cover}
            sx={{
                top: 0,
                width: 1,
                height: 1,
                objectFit: 'cover',
                position: 'absolute',
            }}
        />
    );

    // high possibility to move it in the image as tag right up
    // this will be clickable to show the business types and they can be clicked to see businesses under them
    const renderType = (
        <Typography
            variant="caption"
            component="div"
            sx={{
                mb: 2,
                color: 'text.disabled',
                ...((latestPostLarge || latestPost) && {
                    opacity: 0.48,
                    color: 'common.white',
                }),
            }}
        >
            <Label color="success">business type</Label>
        </Typography>
    );

    const renderShape = (
        <SvgColor
            color="paper"
            src="/assets/icons/shape-avatar.svg"
            sx={{
                width: 80,
                height: 36,
                zIndex: 9,
                bottom: -15,
                position: 'absolute',
                color: 'background.paper',
                ...((latestPostLarge || latestPost) && { display: 'none' }),
            }}
        />
    );

    return (
        <Grid xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
            <Card>
                <Box
                    sx={{
                        position: 'relative',
                        pt: 'calc(100% * 3 / 4)',
                        ...((latestPostLarge || latestPost) && {
                            pt: 'calc(100% * 4 / 3)',
                            '&:after': {
                                top: 0,
                                content: "''",
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                            },
                        }),
                        ...(latestPostLarge && {
                            pt: {
                                xs: 'calc(100% * 4 / 3)',
                                sm: 'calc(100% * 3 / 4.66)',
                            },
                        }),
                    }}
                >
                    {renderShape}

                    {renderAvatar}

                    {renderCover}
                </Box>

                <Box
                    sx={{
                        p: (theme) => theme.spacing(4, 3, 3, 3),
                        ...((latestPostLarge || latestPost) && {
                            width: 1,
                            bottom: 0,
                            position: 'absolute',
                        }),
                    }}
                >
                    {renderType}

                    {renderName}

                    {renderInfo}
                </Box>
            </Card>
        </Grid>
    );
}


BusinessCard.propTypes = {
    business: PropTypes.object.isRequired,
    index: PropTypes.number,
};
