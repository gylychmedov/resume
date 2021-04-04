import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Home() {
  let navbar = useRef(null);
  useEffect(() => {
    gsap.from([navbar], { y: -200, rotate: "20deg", opacity: 0, duration: 1 });
  }, [navbar]);
  return (
    <div>
      <div
        ref={(el) => (navbar = el)}
        className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
      >
        testik
      </div>
    </div>
  );
}

// let line1 = useRef(null)
// useEffect(() => {
//   gsap.from([line1], 0.6, {
//     delay: 0.9,
//     ease: 'power3.out',
//     y: 24,
//     stagger: {
//       amount: 0.15,
//     },
//   })
// }, [line1])

// return (
//   <p ref={(el) => (line1 = el)} className="line">
//     A Simple example using{' '}
//     <a
//       href="https://greensock.com/gsap/"
//       style={{ fontWeight: 'bold', textDecoration: 'none' }}
//     >
//       GSAP
//     </a>{' '}
//     &{' '}
//     <a
//       href="https://www.npmjs.com/package/react-transition-group"
//       style={{ fontWeight: 'bold', textDecoration: 'none' }}
//     >
//       react-transition-group
//     </a>
//   </p>
