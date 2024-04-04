import { CircularProgress } from "@mui/material"

export default function Loader(props) {
  return (
    <div className={`flex w-full justify-center mt-20`}>
      <CircularProgress {...props} color="warning" />
    </div>
  )
}
