interface NewItemProps {
  title: string
  description: string
}

function NewItem({ title, description }: NewItemProps) {
  return (
    <li
      data-cy="new-article"
      className="my-8 last:my-0"
    >
      <h1
        data-cy="new-article-title"
        className="
          font-bold
          text-white
          text-sm
        "
      >
        {title}
      </h1>
      <p
        data-cy="new-article-description"
        className="text-silver my-2"
      >
        {description}
      </p>
    </li>
  )
}

export default NewItem
