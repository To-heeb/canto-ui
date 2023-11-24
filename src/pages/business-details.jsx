import { Helmet } from 'react-helmet-async';

import { BusinessDetailsView } from 'src/sections/business-details/view';

export default function BusinessDetails() {

    return (
        <>
            <Helmet>
                <title> Business Details | Canto Business </title>
            </Helmet>

            <BusinessDetailsView />
        </>
    );
}
