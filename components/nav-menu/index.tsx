function NavMenu() {
  let menuItems = ['Home', 'New', 'Popular', 'Trending', 'Categories']
  return (
    <ul className="flex flex-col gap-6">
      {menuItems.map((menuItem, index) => {
        return (
          <li
            data-cy="menu-nav-item"
            key={index}
            className="text-[18px] text-gray"
          >
            {menuItem}
          </li>
        )
      })}
    </ul>
  )
}

export default NavMenu
