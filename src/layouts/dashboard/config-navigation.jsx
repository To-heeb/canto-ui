import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'admins',
    path: '/admins',
    icon: icon('ic_user'),
  },
  {
    title: 'businesses',
    path: '/businesses',
    icon: icon('ic_cart'),
  },
  {
    title: 'business types',
    path: '/business-types',
    icon: icon('ic_list'),
  },
  {
    title: 'profile',
    path: '/profile',
    icon: icon('ic_profile'),
  }
];



export default navConfig;
