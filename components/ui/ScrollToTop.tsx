'use client';

import Badge from "./Badge";


export default function ScrollToTop() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
            // 나중에 버튼 컴포넌트 만들어야할듯?
            <button type="button" aria-label="페이지 맨 위로 이동" 
                onClick={ scrollToTop }>
                    <Badge content="Back Top" color="darkGray" size="md" iconName="arrowUp" iconSize={22}/>
            </button>
    )
}
