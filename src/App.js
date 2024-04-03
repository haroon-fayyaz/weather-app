import { Chip, Typography } from "@mui/material"
import "./App.css"

function App() {
  return (
    <>
      <Typography className="mt-24 text-center text-4xl font-bold">Hello world!</Typography>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </>
  )
}

export default App
