import Divider from '../Divider'
import data from './new-section.json'
import NewItem from './NewItem'
function NewList() {
  return (
    <ul>
      {data.new.map((item, index) => {
        return (
          <>
            <NewItem
              key={item.id}
              title={item.title}
              description={item.description}
            />
            {data.new.length !== index + 1 && <Divider />}
          </>
        )
      })}
    </ul>
  )
}

export default NewList
