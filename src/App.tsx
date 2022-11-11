import React from "react"

// src
import "./App.css"

import SceneLayout from "./conponents/SceneLayout"
import CardComponent from "./conponents/CardComponent/CardComponent"

export const imageSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_G9U9095poYEIvtg8fnA2Ef3dcjLEebptQ&usqp=CAU'
export const fallbackSrc = 'https://via.placeholder.com/350x150'

const label = 'Hire Vladimir'

function App(): JSX.Element {
  const onChange = (value: boolean) => {
    console.log(value)
  }

  return (
    <SceneLayout>
      <CardComponent
        defaultChecked
        onChange={onChange}
        imageSrc={imageSrc}
        fallbackSrc={fallbackSrc}
        label={label}
      />
    </SceneLayout>
  )
}

export default App
