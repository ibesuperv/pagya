import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";




gsap.registerPlugin(ScrollTrigger)


function About() {

    useGSAP(() => {

        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })

    return (
        <div className="min-h-screen w-screen" id="about">
            <div className="relative mb-8 mt-36 flex flex-col">
                <h2 className="font-general text-sm uppercase md:text-[10px]"> Welcome</h2>
                <AnimatedTitle
          title="Prag<b>na</b> D the world's <br /> best Progr<b>a</b>mer"
          containerClass="mt-5 !text-black text-center"
        />


                <div className="about-subtext">
                    <p>Pragna D.
                        <br/>Computer Science Of Engineering</p>
                    <p>GAT</p>
                </div>
            </div>
            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img src="img/pagya1.jpg" alt="background" className="absolute left-0 top-0 size-full object-cover" />
                </div>
            </div>
        </div>

    );
}

export default About;