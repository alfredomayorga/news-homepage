import data from './sub-categories-data.json'
import SubCategoryItem from './SubCategoryItem'

function SubCategories() {
  return (
    <div
      className="
        flex 
        flex-col
        lg:flex-row 
        my-16 
        gap-8
      "
    >
      {data.subcategories.map((subcategory) => {
        return (
          <SubCategoryItem
            key={subcategory.id}
            order={subcategory.order}
            title={subcategory.title}
            description={subcategory.description}
            thumbnail={subcategory.thumbnail}
          />
        )
      })}
    </div>
  )
}

export default SubCategories
