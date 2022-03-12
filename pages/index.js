import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Social from "../components/Social"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ענק המזגנים</title>
        <meta name="description" content="ענק המזגנים תיקון מזגנים התקנת מזגנים" />
        <meta name="keywords" content="ענק המזגנים" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:image" content="/logo.png" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" sizes="192x192" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" sizes="512x512" />
      </Head>
      <Social />
      <main className={styles.main}>
        <div className="main-header">
          <div className='bg-text-color'>
            <h1 className={styles.title}>
              ענק המזגנים
            </h1>
            <p className={styles.description}>
              תיקון | התקנה | שירות | מקצועיות
            </p>
          </div>
          <img className="main-heaer-img" src="/images/header2.png" alt="מזגן" />
        </div>
        <div className="about">
          <div className='about-card'>
          <h2 className="text-center">מי אנחנו</h2>
                    <p>העסק קיים כבר 10 שנים, מתחייבים לשרות ברמה גבוה, זמינות ואחריות על העבודה, העובדים בחברה בעלי תעודת טכנאי מיזוג וקירור</p>
        </div>
          </div>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            
            <h2>מערכות וי אר אף &rarr;</h2>
            <p> מערכת רב מאיידים המתאימה לקירור חללים גדולים או מחולקים.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>מיני מרכזי &rarr;</h2>
            <p>  פתרון מושלם למיזוג כל הדירה. הוא יודע לפזר באופן שווה את האוויר וכתוצאה, מעניק מיזוג אחיד ונעים בכל החלל.</p>
          </a>

          <a
           href="#"
            className={styles.card}
          >
            <h2>מערכות מולטי &rarr;</h2>
            <p>מערכת מיזוג מולטי מפוצלת, מאפשרת לחבר יחידה חיצונית אחת למספר יחידות פנימיות וכך ניתן למזג מספר חדרים.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>תשתיות למיזוג אוויר &rarr;</h2>
            <p>
            תכנון תשתיות מיזוג האויר כבר בשלב התכניות של הבית, כולל מיקומן של נקודות חשמל וניקוז בסמוך למיקום הרצוי של המזגנים.
            </p>
          </a>
          <a
            href="#"
            className={styles.card}
          >
            <h2>תיקון מזגנים &rarr;</h2>
            <p>
            עבודה מקצועית ומהירה לכל סוגי המזגנים - מוניטין שמדבר בעד עצמו.
            </p>
          </a>
          <a
            href="#"
            className={styles.card}
          >
            <h2>התקנת מזגנים &rarr;</h2>
            <p>
            התקנה ותחזוקה למזגנים במחירים אטרקטיביים.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>

        <Contact />
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" />
          </span>
        </a> */}
      </footer>
    </div>
  )
}
