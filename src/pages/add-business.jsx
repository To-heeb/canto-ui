import { Helmet } from 'react-helmet-async';

import { AddBusinessesView } from 'src/sections/add-business/view';

export default function Businesses() {

    return (
        <>
            <Helmet>
                <title> Add Business | Canto Business </title>
            </Helmet>

            <AddBusinessesView />
        </>
    );

}