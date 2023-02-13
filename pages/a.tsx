import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

function A() {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    console.log('from A, router.query : ', router.query)
  }, [router.isReady]);

  return (
    <div>{!router.query.slug ? 'loading' : 'done loading'}</div>
  )
}

export default A
