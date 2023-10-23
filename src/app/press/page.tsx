import {redirect} from 'next/navigation'

export default function Press() {
  return <Redirect /> 
}


function Redirect() {
  redirect('/press/news') 
  return null
}