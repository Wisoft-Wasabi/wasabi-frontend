import {useEffect, useRef} from "react";

const InfiniteScroll = ({onIntersect}) => {
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // 스크롤이 바닥에 닿은 경우에만 onIntersect 함수를 실행
                if (entry.isIntersecting) {
                    onIntersect();
                }
            },
            { threshold: 1 } // viewport의 100%가 보일 때 콜백 함수를 실행
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, onIntersect]);

    return (
            <div ref={ref}></div>
    );
};

export default InfiniteScroll;
