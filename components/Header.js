import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Header() {
  const { data: session } = useSession()

  const handleSignin = (e) => {
    e.preventDefault()
    signIn()
  }

  const handleSignout = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <div className='header'>
      <Link href='/'>
        {session && (
          <a href='#' onClick={handleSignout}>
            Sign out
          </a>
        )}
        {!session && (
          <a href='#' onClick={handleSignin}>
            Sign in
          </a>
        )}
      </Link>
    </div>
  )
}
