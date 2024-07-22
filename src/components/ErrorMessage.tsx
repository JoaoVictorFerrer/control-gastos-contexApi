import { ReactNode } from "react"
// import { PropsWithChildren } from "react"
//se puede utilizar los dos tipos para children tanto raeactNode PropsWhithChildren
type ErrorMessageProps = {
    children: ReactNode
}

export default function ErrorMessage({children} : ErrorMessageProps) {
  return (
      <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
        {children}
     </p>
  )
}
