import { Link } from '../routes'

export default function Home() {
  return (
    <ul>
      <li>
        <Link legacyBehavior route='a' params={{slug: 'hello-world'}}>
          <a>Go to "a"</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior route='b' params={{slug: 'hello-world'}}>
          <a>Go to "b"</a>
        </Link>
      </li>
    </ul>
  )
}
