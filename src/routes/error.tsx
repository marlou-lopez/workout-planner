import { useRouteError } from "react-router-dom"

export default function Error() {
  // TODO: Add narrow type checking
  const error = useRouteError() as any;

  return (
    <div>
     <h1> Oops! </h1>
      <p> An unexpected error has occured. </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
