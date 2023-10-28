import { Helmet } from 'react-helmet-async';

import { BusinessesView } from 'src/sections/businesses/view';

export default function Businesses() {

    return (
        <>
            <Helmet>
                <title> Businesses | Canto Business </title>
            </Helmet>

            <BusinessesView />
        </>
    );
}
