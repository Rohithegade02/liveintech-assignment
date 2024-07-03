import { Parallax } from 'react-scroll-parallax';


const NextPage = () => {
  return (
    <div className="relative mt-[100vh] z-20 ">
       <Parallax y={[-20,20]}>
        <div className="h-[90vh] flex flex-col md:flex-row lg:flex-row justify-between bg-white ">
          <div className="md:w-[45vw]  lg:w-[45vw] flex flex-col items-start p-5 lg:p-10">
            <div>
              <p className="text-[#45474B] font-bold lg:text-[70px] md:text-[50px] text-[50px]">
                TOGETHER <br />
                FROM IDEA TO
                <span className="text-[#225599] underline underline-offset-4 ">
                  {" "}
                  ICONIC
                </span>
              </p>
            </div>
            <div>
              <p className="lg:text-[18px] text-[12px] md:text-[16px]">
                We believe in an outcome-driven process to test assumptions, eliminate
                confirmation biases, and operate with passion. We reduce a process
                that could take years to months. We ensure that you are pursuing the
                right market, that you are fully validated, and that you are
                surrounded by incredible teammates.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1719654872904-a586e49b413b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full bg-cover md:w-[45vw] md:h-[90vh] lg:w-[45vw] lg:h-[90vh] h-[40vh] "
            />
          </div>
      </div>
      </Parallax>
   </div>
  );
}

export default NextPage;
