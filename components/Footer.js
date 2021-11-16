import Link from 'next/link'
import {YEAR, TITLE, DESCRIPTION, AUTHOR} from '../lib/constants'
import styles from '../styles/Site.module.css'

export default function Footer() {
  return (
      <div className={styles.footer}>
        <p>
        {TITLE} &mdash; <i>{DESCRIPTION}</i> <Link href="/contact"><a>Contact</a></Link><br></br>
        Text &copy; {YEAR} {AUTHOR}. All rights reserved.
        </p>
      </div>
    )
}

