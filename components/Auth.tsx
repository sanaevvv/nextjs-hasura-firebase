import { VFC } from 'react'
import Link from 'next/link'
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'
import { auth } from '../firebaseConfig'

export const Auth: VFC = () => {
  const user = auth.currentUser
  const {
    isLogin,
    email,
    password,
    emailChange,
    pwChange,
    authUser,
    toggleMode,
  } = useFirebaseAuth()

  return (
    <>
      <form onSubmit={authUser}>
        <label htmlFor="">
          Email:
          <input
            type="text"
            placeholder="email?"
            value={email}
            onChange={emailChange}
          />
        </label>
        <label htmlFor="">
          Password:
          <input
            type="password"
            placeholder="password?"
            value={password}
            onChange={pwChange}
          />
        </label>
        
        <button onClick={toggleMode} disabled={!email || !password}>
          {isLogin ? 'Login' : 'Register'}
        </button>

        {user && (
          <Link href="/tasks" passHref>
            <span>to tasks page</span>
          </Link>
        )}
      </form>
    </>
  )
}
