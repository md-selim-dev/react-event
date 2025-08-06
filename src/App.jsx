import React from "react"
import Button from "./Button"
import TextBox from "./TextBox"
import CrazyButton from "./CrazyButton"
import ToolBar from "./ToolBar"
import Register from "./Register"

function App() {

  return (
    <>
      <div>
        <h1 className="text-3xl text-red-600 font-bold text-center bg-green-500 p-4">Mastering React Event</h1>
      </div>
      <div className="my-16">
        <Button></Button>
        <TextBox></TextBox>
        <CrazyButton></CrazyButton>
        <ToolBar></ToolBar>
        <Register></Register>
      </div>
    </>
  )
}

export default App
