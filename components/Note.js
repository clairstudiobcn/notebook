import Clock from 'react-live-clock';
import { todayDate } from "./TodayDate.js";
import styles from '../styles/Site.module.css'

export default function Note() {
  return (
    <div className={styles.note}>
      <p>Paris, France<br></br>{todayDate()} &mdash; <Clock format={'h:mm:ssa'} ticking={true} timezone={'CET'} /></p>
    </div>
  )
}
