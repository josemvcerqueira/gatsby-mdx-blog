import React, { FC, useState } from "react"

interface Props {}

const Counter: FC<Props> = () => {
  const [count, setCount] = useState(0)

  const handleOnClick = () => setCount(prevState => prevState + 1)

  return (
    <div className="counter">
      <h3> Click the button if you like the post</h3>
      <h3>likes {count}</h3>
      <button onClick={handleOnClick}>click me</button>
    </div>
  )
}

export default Counter
