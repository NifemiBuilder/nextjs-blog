import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oluwanifemi Dahunsi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Oluwanifemi <a href="https://nextjs.org/conf/speakers/oluwanifemi">Dahunsi!</a>
        </h1>

        <p className={styles.description}>
          The 17 Year Old Nigerian changing the world, One Community At A Time{' '}
          <code className={styles.code}></code>
        </p>

        <div className={styles.grid}>
          <a href="https://www.youtube.com/watch?v=xs5TFL64PFI" className={styles.card}>
            <h3>The Story &rarr;</h3>
            <p>Get to know why and how Oluwanifemi Started.</p>
          </a>

          <a href="https://socialshifters.co/social-shifters-login/?ssgroup=TeensWorldEmpowerment" className={styles.card}>
            <h3>Unlock The Greatness In You &rarr;</h3>
            <p>Get access to learning materials!</p>
          </a>

          <a
            href="https://agilitycms.com/resources/posts/nextjs-conference-agilitycms"
            className={styles.card}
          >
            <h3>Life Of A Genz &rarr;</h3>
            <p>How a 17-Year-Old from Nigeria Changes Kids' Lives With Next.js and Agility CMS.</p>
          </a>

          <a
            href="https://web.facebook.com/nifemibuilder/?_rdc=1&_rdr"
            className={styles.card}
          >
            <h3>Connect With NifemiBuilder &rarr;</h3>
            <p>
              The 17 Year Old Mortal Making Immortal Impact.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/nifemibuilder"
          target="_blank"
          rel="noopener noreferrer"
        >
          NifemiBuilder{' '}
          
        </a>
      </footer> 
    </div>
  )
}
