import { Helmet } from 'react-helmet-async';

import { ForgetPasswordView } from 'src/sections/forget-password';

// ----------------------------------------------------------------------

export default function LoginPage() {
    return (
        <>
            <Helmet>
                <title> Forget Password | Canto Business </title>
            </Helmet>

            <ForgetPasswordView />
        </>
    );
}
