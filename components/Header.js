import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='header container'>
        <Link href='/' passHref>
          <h2>ענק המיזוג</h2>
        </Link>
        <img src="/images/logo2.jfif" alt="ענק המיזוג" />
      </div>
    </header>
  )
}
