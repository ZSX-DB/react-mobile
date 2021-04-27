import styles from '@/style/notFound.module.scss'

const NotFound = () => (
    <div className={styles['not-found-box']}>
        <div className={styles.status}>
            Error 404
        </div>
        <div className={styles.introduce}>
            Can not find the page !!!
        </div>
    </div>
)

export default NotFound
