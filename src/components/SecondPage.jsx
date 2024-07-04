
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";



const SecondPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const section = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);




  return (
    <section ref={ref} className=" h-[90vh] relative">
      <motion.div
        style={{ y: section }}
        className=" flex flex-col md:flex-row lg:flex-row  justify-between bg-white h-full"
      >
        <div className="md:w-[45vw]  lg:w-[45vw] gap-5 lg:gap-10 flex flex-col items-start p-5 lg:p-10">
          <div>
            <p className="text-[#45474B] font-bold lg:text-[70px] md:text-[50px] text-[25px]">
              TOGETHER <br />
              FROM IDEA TO
              <span className="text-[#225599] underline decoration-2 underline-offset-8 ">
                {" "}
                ICONIC
              </span>
            </p>
          </div>
          <div>
            <p className="lg:text-[18px] text-[12px] md:text-[16px]">
              We believe in an outcome-driven process to test assumptions,
              eliminate confirmation biases, and operate with passion. We reduce
              a process that could take years to months. We ensure that you are
              pursuing the right market, that you are fully validated, and that
              you are surrounded by incredible teammates.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1719654872904-a586e49b413b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full bg-cover md:w-[45vw] md:h-full lg:w-[45vw] lg:h-full h-[40vh] "
          />
        </div>
      </motion.div>
    </section>
  );
}

export default SecondPage;
