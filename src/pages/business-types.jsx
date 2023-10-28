import { Helmet } from 'react-helmet-async';

import { BusinessTypesView } from 'src/sections/business-types/view';

export default function BusinessTypes() {

    return (
        <>
            <Helmet>
                <title> Business Types | Canto Business </title>
            </Helmet>

            <BusinessTypesView />
        </>
    );
}
