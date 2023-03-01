import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { CgMenuGridR } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'
import { GrTechnology } from 'react-icons/gr'

const NavBarItem = ({ title, classprops, link }) => (
  <li
    className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 cursor-pointer ${classprops}`}
  >
    <Link href={`${link}`}>{title}</Link>
  </li>
)

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        <Link
          href='/'
          aria-label='LOGIC'
          title='LOGIC'
          className='inline-flex items-center'
        >
          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
            LOGIC
          </span>
        </Link>
        <ul className='flex items-center hidden space-x-8 lg:flex'>
          {[
            { title: 'Home', link: '/' },

            { title: 'NFTs', link: '/nfts' },
            { title: 'About us', link: '/aboutus' },
          ].map((item, index) => (
            <NavBarItem
              key={item.title + index}
              title={item.title}
              link={item.link}
            />
          ))}
          <li>
            {session && (
              <Link
                href='/'
                className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-purple transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                aria-label='Sign out'
                title='Sign out'
                onClick={handleSignout}
              >
                Sign out
              </Link>
            )}
            {!session && (
              <Link
                href='/'
                className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-purple transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                aria-label='Sign in'
                title='Sign in'
                onClick={handleSignin}
              >
                Sign in
              </Link>
            )}
          </li>
        </ul>
        <div className='lg:hidden'>
          {/* ============================ */}
          {!isMenuOpen && (
            <CgMenuGridR
              fontSize={50}
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 cursor-pointer'
              onClick={() => setIsMenuOpen(true)}
            />
          )}

          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link
                      href='/'
                      aria-label='LOGIC'
                      title='LOGIC'
                      className='inline-flex items-center'
                    >
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        LOGIC
                      </span>
                    </Link>
                  </div>
                  <div>
                    <AiOutlineClose
                      fontSize={28}
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer'
                      onClick={() => setIsMenuOpen(false)}
                    />
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    {[
                      { title: `Home`, link: '/' },
                      { title: 'Beauty pageant', link: '/missafricanpride' },
                      { title: 'NFTs', link: '/nfts' },
                      { title: 'Pageant voting', link: '/voting' },
                      { title: 'Gallery', link: '/gallery' },
                      { title: 'Vote Here', link: '/vote' },
                      { title: 'About us', link: '/aboutus' },
                      { title: 'Wallets', link: '/wallets' },
                      { title: 'Wallets', link: '/wallets' },
                    ].map((item, index) => (
                      <NavBarItem
                        key={item.title + index}
                        title={item.title}
                        link={item.link}
                      />
                    ))}
                    <li>
                      {session && (
                        <Link
                          href='/'
                          className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                          aria-label='Sign up'
                          title='Sign up'
                          onClick={handleSignout}
                        >
                          Sign out
                        </Link>
                      )}
                      {!session && (
                        <Link
                          href='/'
                          className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                          aria-label='Sign up'
                          title='Sign up'
                          onClick={handleSignin}
                        >
                          Sign in
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
