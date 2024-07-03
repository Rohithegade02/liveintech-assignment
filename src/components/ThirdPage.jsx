
import { Parallax } from 'react-scroll-parallax';

const ThirdPage = () => {
  return (
    <div className="relative z-30">
      <Parallax y={[-20, 20]}>
        <div className='h-[93vh] md:h-[90vh] lg:h-[90vh] flex flex-col md:flex-row lg:flex-row justify-between bg-[#ECECED]'>
          <div className='md:w-[45vw] gap-5 lg:gap-10 lg:w-[45vw] flex flex-col items-start p-5 lg:p-10'>
              <div>
                  <p className='text-[#45474B] font-bold lg:text-[70px] md:text-[50px] text-[50px]'>
                  COCREATE <br/> <span className='text-[#225599] '>&</span>
                      <span className='text-[#225599] underline underline-offset-4 '>{' '}COINVEST</span>
                  </p>
              </div>
              <div>
                  <p className='lg:text-[18px] text-[12px] md:text-[16px]'>
                  We provide a streamlined risk-reward framework for co-creation, encompassing validation, solutioning, risk mitigation, and capability-capitalTM, so that entrepreneurs may focus on product and market fit.
                  </p>
              </div>
              <div className="flex justify-end lg:w-[40vw] md:w-[40vw]">
                  <button className="bg-[#225599] text-white px-4 py-2 rounded-full">REACH US</button>
              </div>
          </div>
          <div>
              <img src='https://images.unsplash.com/photo-1719654872904-a586e49b413b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  className='w-full bg-cover md:w-[45vw] md:h-[90vh] lg:w-[45vw] lg:h-[90vh] h-[40vh]'
              />
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default ThirdPage;
