const menu_data = [
  {
    id: 1,
    has_dropdown: false,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    has_dropdown: false,
    title: 'About Us',
    link: '/about',
  },
  {
    id: 3,
    has_dropdown: true,
    title: 'Pages',
    link: '#',
    sub_menus: [
      { link: '/tools', title: 'SEO Tools' },
      { link: '/pricing', title: 'Pricing Plans' },
      { link: '/faq', title: 'FAQ' },
    ],
  },
  {
    id: 4,
    has_dropdown: false,
    title: 'SEO Tools',
    link: '/tools',
  },
  {
    id: 5,
    has_dropdown: false,
    title: 'Pricing Plans',
    link: '/pricing',
  },
  {
    id: 6,
    has_dropdown: false,
    title: 'FAQ',
    link: '/faq',
  },
  {
    id: 7,
    has_dropdown: false,
    title: 'Contact',
    link: '/contact',
  },
];

export default menu_data;
