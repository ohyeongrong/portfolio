import MarqueeText from "../ui/MarqueeText";
import ScrollToTop from "../ui/ScrollToTop";
import TextLink from "../ui/TextLink";
import HoverRevealText from "../utility/HoverRevealText";


export default function Footer() {

    const mailTextLink = <TextLink content="dhdudfhd920@gmail.com" iconName="arrowOutward" iconSize={20}/>

    return (      
            <footer>
                <div className="text-white bg-[var(--color-primary-dark)]">
                    {/* 이거 배경 라운드 부분 모바일일때 좀 조정 해야할듯? */}
                    <div className="bg-[var(--color-background)] w-full h-16 rounded-b-[6vw]">
                        <span className="rounded-l-2xl"></span>
                    </div>
                    <div className="py-6">
                        <MarqueeText textContent={
                            <>
                                <span>Oh!</span>
                                <span className="text-transparent [-webkit-text-stroke:1px_white]">Oh!</span>
                                <span>Oh!</span>
                                <span className="text-transparent [-webkit-text-stroke:1px_white]">Oh!</span>
                                <span>Oh!</span>
                                <span className="text-transparent [-webkit-text-stroke:1px_white]">Oh!</span>
                                <span>Oh!</span>
                                <span className="text-transparent [-webkit-text-stroke:1px_white]">Oh!</span>
                            </>
                        }/>
                        <div className="flex justify-between items-center px-6 text-[clamp(1rem,0.95rem+0.25vw,1.25rem)] pt-6">
                            <p className="hidden sm:block">©2025 Oh! YeongRong</p>
                            <a href="mailto:dhdudfhd920@gmailcom">
                                <HoverRevealText hoverContent={mailTextLink}>
                                    {mailTextLink}
                                </HoverRevealText>
                                </a>
                            {/* 버튼 컴포넌트 만든거 넣으면 됨 */}
                            <ScrollToTop/>
                        </div>
                    </div>
                </div>
            </footer>
    );
}