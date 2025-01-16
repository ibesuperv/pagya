import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";


const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
         
         <div className="sword-man-clip-path md:scale-125">
          <img className="" src="/img/pagya.jpg" alt="pagya" />
         </div>
         
        </div>

        <div className="flex flex-col items-center  text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Get in Touch
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> cre<b>a</b>tive <b>w</b>ebsites."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" href="mailto:pragnad25@gmail.com" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;