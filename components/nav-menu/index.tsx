function NavMenu() {
  let menuItems = ['Home', 'New', 'Popular', 'Trending', 'Categories']
  return (
    <ul
      className="
        flex 
        flex-col 
        gap-6
        lg:flex-row
        lg:gap-[44px]
      "
    >
      {menuItems.map((menuItem, index) => {
        return (
          <li
            data-cy="menu-nav-item"
            key={index}
            className="
              text-[18px] 
              lg:text-body
              text-gray
              hover:text-red
              cursor-pointer
            "
          >
            {menuItem}
          </li>
        )
      })}
    </ul>
  )
}

export default NavMenu
