'use client';

import HoverFillBtn from "./HoverFillBtn";


export default function ScrollToTop() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
            // 나중에 버튼 컴포넌트 만들어야할듯?
            <button className="cursor-pointer" type="button" aria-label="페이지 맨 위로 이동" 
                onClick={ scrollToTop }>
                    <div className="hidden md:block">
                        <HoverFillBtn
                            content="Back Top"
                            iconName="arrowUp"
                            iconSize={20}
                            initialTextColor={'#fff'}
                            hoverTextColor={'var(--color-primary-dark)'}
                            initialBgColor={'var(--color-gray-900)'}
                            hoverBgColor={'var(--color-gray-200)'}
                            sizeClassName={'text-lg md:text-xl px-4 py-1.5 md:px-5 md:py-2'}
                        />
                    </div>
                    <div className="block md:hidden">
                        <HoverFillBtn
                            iconName="arrowUp"
                            iconSize={20}
                            initialTextColor={'#fff'}
                            hoverTextColor={'var(--color-primary-dark)'}
                            initialBgColor={'var(--color-gray-900)'}
                            hoverBgColor={'var(--color-gray-200)'}
                            sizeClassName={'p-4'}
                        />
                    </div>
            </button>
    )
}
