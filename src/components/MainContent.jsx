import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MainContent = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="w-full h-[100vh] bg-[#A5DBFA] relative">
      <motion.div
        style={{ y }}
        className="p-20 flex flex-col lg:flex-row lg:justify-between md:justify-center items-center  min-h-screen h-full"
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1718938789642-b850a77a1042?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-[40vh] lg:h-[70vh] lg:w-[40vw] w-full md:hidden lg:block"
          />
        </div>
        <div className="flex flex-col items-center gap-10 justify-start">
          <div className="flex flex-col lg:h-[30vh] md:h-[30vh] h-[20vh] lg:text-[80px] md:text-[60px] text-[50px]">
            <p className="font-bold text-[#45474B]">
              OPERATIONAL <br />
              <span className="font-bold text-[#225599]">
                <Typewriter words={["COFOUNDER .", "PARTNER."]} loop={false} />
              </span>
            </p>
          </div>
          <div>
          <p className="text-[#617F82] lg:text-[20px] md:text-[20px] text-[15px] lg:w-[40vw]">
              We collaborate with exceptional <span className="text-[#225599] underline underline-offset-2">&lsquo;Entrepreneurs&rsquo;</span> and{" "}
              <span className="text-[#225599] underline underline-offset-2">&lsquo;Intrapreneurs&rsquo;</span> to bring meaningful ideas to reality. We
              encourage collaboration through validation, talent, resources, and
              investment.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MainContent;
