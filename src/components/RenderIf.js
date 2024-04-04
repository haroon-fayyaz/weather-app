export default function RenderIf({ isTrue, children, fallback = null }) {
  return <>{isTrue ? children : fallback}</>
}
