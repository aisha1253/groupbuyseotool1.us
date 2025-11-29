const menu_data = [
    {
      id: 1,
      has_dropdown: false,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      has_dropdown: false,
      title: "About Us",
      link: "/about",
    },
    {
      id: 3,
      has_dropdown: true,
      title: "Pages",
      link: "#",
      sub_menus: [
        { link: "/tools", title: "SEO Tools" },
        { link: "/pricing", title: "Pricing Plans" },
        { link: "/faq", title: "FAQ" },
      ],
    },
    {
      id: 4,
      mega_menu: false,
      has_dropdown: false,
      title: "Contact",
      link: "/contact",
    },
  ];
  export default menu_data;