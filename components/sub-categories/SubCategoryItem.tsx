import Image from 'next/image'

interface IProps {
  order: string
  title: string
  description: string
  thumbnail: string
}

function SubCategoryItem({
  order,
  title,
  description,
  thumbnail,
}: IProps) {
  return (
    <div
      data-cy="subcategory-item"
      className="flex flex-row gap-8"
    >
      <Image
        data-cy="subcategory-thumbnail"
        src={thumbnail}
        alt="Article Preview"
        width={100}
        height={127}
      />
      <div className="flex flex-col justify-between">
        <h1
          data-cy="subcategory-order"
          className="
            text-silver
            text-md
            font-bold
          "
        >
          {order}
        </h1>
        <h2
          data-cy="subcategory-title"
          className="
            text-black
            font-bold
            text-sm
          "
        >
          {title}
        </h2>
        <p
          data-cy="subcategory-description"
          className="
            text-gray
            text-bold
          "
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default SubCategoryItem
