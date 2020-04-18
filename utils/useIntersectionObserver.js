import {
    useState,
    useEffect
} from 'react'
import throttle from 'lodash/fp/throttle'


export const useIntersectionObserver = (ref, {
    threshold,
    root,
    rootMargin
}) => {
    const [state, setState] = useState({
        intersectionRatio: 1,
        entry: undefined,
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            throttle(200, (entries, observerInstance) => {
                // checks to see if the element is intersecting
                if (entries[0].intersectionRatio > 0) {
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
            }), {
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