import { Helmet } from 'react-helmet-async';

import { AdminView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Admin |  Canto Business </title>
      </Helmet>

      <AdminView />
    </>
  );
}
