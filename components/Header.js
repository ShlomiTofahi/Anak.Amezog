import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='header container'>
        <Link href='/' passHref>
          <h2>ענק המזגנים</h2>
        </Link>
        <img src="/images/logo2.jfif" alt="ענק המזגנים" />
      </div>
    </header>
  )
}
