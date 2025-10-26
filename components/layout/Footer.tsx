import ScrollToTop from "../ui/ScrollToTop";

export default function Footer() {

    return (      
            <footer>
                <div className="text-white bg-[var(--color-primary-dark)]">
                    {/* 이거 배경 라운드 부분 모바일일때 좀 조정 해야할듯? */}
                    <div className="bg-[var(--color-background)] w-full h-16 rounded-b-[64px]">
                        <span className="rounded-l-2xl"></span>
                    </div>
                    <div className="py-6">
                        <div aria-hidden="true" className="flex overflow-hidden justify-between items-center text-center text-[17vw] tracking-tighter leading-none">
                            <div className="flex-1">Oh!</div>
                            <div className="flex-1">Oh!</div>
                            <div className="flex-1">Oh!</div>
                            <div className="flex-1 text-transparent [-webkit-text-stroke:1px_white]">Oh!</div>
                        </div>
                        <div className="flex justify-between items-center px-6 sm:text-base md:text-lg lg:text-xl">
                            <p>©2025 Oh! YeongRong</p>
                            <a href="mailto:dhdudfhd920@gmailcom" className="relative z-10">
                                <div className="flex justify-center items-center gap-2">
                                    dhdudfhd920@gmail.com 
                                    <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#fff">
                                        <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
                                    </svg>
                                </div>
                                <div className="border-b pt-1"></div>
                            </a>
                            {/* 버튼 컴포넌트 만든거 넣으면 됨 */}
                            <ScrollToTop/>
                        </div>
                    </div>
                </div>
            </footer>
    );
}