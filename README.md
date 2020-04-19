# animations-library

A library for animations, built using React hooks, Intersection Observer and Bounding Client Rect etc. & making use of Fela styling to easily drive style changes through props.

| Routes                    | Content                                                                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| /                         | The Navigation/Homepage                                                                                                                                                                          |
| /fade-scroll-io           | Demonstration of fade in/out of image controlled by the intersection ratio - with a hook that utilises the intersection observer API                                                             |
| /fade-scroll-bc           | Demonstration of fade in/out on scroll using hooks that getBoundingRect and Screen Height to calculate on screen ratio                                                                           |
| /size-scroll-io           | Demonstration of grow/shrink of image controlled by the intersection ratio - with a the hook that utilises the intersection observer API                                                         |
| /size-scroll-bc           | Demonstration of grow/shrink on scroll using hooks that getBoundingRect and Screen Height to calculate on screen ratio                                                                           |
| /parallax-image           | One example of Parallax/shifting behaviour of image on scroll - In Progress                                                                                                                      |
| /slide-gallery            | Overlapping slideshow effect vertically using sticky positioning and scroll snapping behaviour in the CSS                                                                                        |
| /sticky-vertical-carousel | Incomplete - Two column component with sticky content and scrolling carousel content with numbered slides in the other. Using sticky css and React useRef and useEffect to update the numbering. |
