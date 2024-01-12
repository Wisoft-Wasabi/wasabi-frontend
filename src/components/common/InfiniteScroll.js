import {useEffect, useRef} from "react";

const InfiniteScroll = ({onIntersect}) => {
    const ref = useRef();

    useEffect(() => {
        let observer
        if(ref.current) {
            observer = new IntersectionObserver(
                ([entry], observer) => {
                    // 스크롤이 바닥에 닿은 경우에만 onIntersect 함수를 실행
                    if (entry.isIntersecting) {
                        observer.unobserve(entry.target);
                        onIntersect();
                        observer.observe(entry.target);
                        console.log('바닥에 닿았음');
                    }
                },
                { threshold: 1 } // viewport의 100%가 보일 때 콜백 함수를 실행
            );
            observer.observe(ref.current);
        };
        return () => observer && observer.disconnect();
    }, [ref, onIntersect]);


    return (
        <div ref={ref}></div>
    );
};

export default InfiniteScroll;