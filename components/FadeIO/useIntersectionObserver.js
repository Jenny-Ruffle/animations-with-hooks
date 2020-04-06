import {
    useState,
    useEffect
} from 'react'

export const useIntersectionObserver = (ref, {
    threshold,
    root,
    rootMargin
}) => {
    const [state, setState] = useState({
        intersectionRatio: undefined,
        entry: undefined,
    })



    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observerInstance) => {
                // checks to see if the element is intersecting
                if (entries[0].intersectionRatio > 0 && entries[0].intersectionRatio != 1) {
                    // if it is update the state, we set triggered as to not re-observe the element
                    setState({
                        intersectionRatio: entries[0].intersectionRatio,
                        entry: observerInstance,
                    })
                }
                if (entries[0].intersectionRatio < 0) {
                    observerInstance.unobserve(ref.current)
                }
                return
            }, {
                threshold: threshold || 0,
                root: root || null,
                rootMargin: rootMargin || "0%",
            }
        )
        // check that the element exists, and has not already been triggered
        if (ref.current) {
            observer.observe(ref.current)
        }
    })

    return [state.intersectionRatio, state.entry]
}