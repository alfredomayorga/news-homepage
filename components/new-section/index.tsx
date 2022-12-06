import NewList from './NewList'

function NewSection() {
  return (
    <div
      data-cy="new-section"
      className="w-full bg-black px-4 py-6"
    >
      <h1
        data-cy="new-section-title"
        className="
          text-yellow 
          text-md
          font-bold
          mb-6
        "
      >
        New
      </h1>
      <NewList />
    </div>
  )
}

export default NewSection
