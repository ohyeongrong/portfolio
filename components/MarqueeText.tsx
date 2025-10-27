import styles from './MarqueeText.module.css';

export default function MarqueeText() {

    const textContent = ' ©2025 Oh! YeongRong'
    
    return (
        <div className={styles.marqueeContainer}>
            <div className={`${styles.marqueeContent} text-[17vw] tracking-tighter leading-none`}>
                <span>{`${textContent} ${textContent}`}</span>
                <span>{`${textContent} ${textContent}`}</span>
                <span>{`${textContent} ${textContent}`}</span>
                <span>{`${textContent} ${textContent}`}</span>
            </div>
        </div>
    )
}