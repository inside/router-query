import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

function B() {
  const router = useRouter()
  console.log('from B, router.query : ', router.query)

  return (
    <div>{!router.query.slug ? 'loading' : 'done loading'}</div>
  )
}

B.getInitialProps = async (ctx) => {
  console.log('from getInitialProps, ctx.query', ctx.query)

  return {}
}

export default B
