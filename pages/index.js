import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      {JSON.stringify({ props })}
      <br /><Link href="/">Home</Link>
      <br /><Link href="/test">Test</Link>
      <p>Conclusion: Vercel can read environtment variables at build if setten before "build" command, but it will be lost at deployment</p>
    </div>
  )
}

export const getStaticProps = async context => {
  const { IS_START, IS_BUILD, IS_DEV } = process.env
  const IS_FRESH = IS_START || IS_DEV

  return {
    props: { env: { IS_START: IS_START || 'empty', IS_BUILD: IS_BUILD || 'empty', IS_DEV: IS_DEV  || 'empty' } },
    revalidate: 10,
  }
}
