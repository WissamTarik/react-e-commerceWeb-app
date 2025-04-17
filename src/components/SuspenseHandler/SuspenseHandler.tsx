import React, { Suspense } from 'react'
import LazyLoading from '../LazyLoading/LazyLoading'

type SuspenseProps={
    children:React.ReactNode,
    message?:string
}
const SuspenseHandler = ({children,message}:SuspenseProps) => {
  return <Suspense fallback={<LazyLoading message={message}/>}>{children}</Suspense>
}

export default SuspenseHandler