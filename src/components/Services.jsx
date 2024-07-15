import { useRef } from "react";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  const parallaxRef = useRef(null);
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Total control for fearless traders."
          text="blockboard unlocks the potential of blockchain technology"
        />
        <div className="relative">
          {/* Top bento box */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="object-cover w-full h-full md:object-right"
                src={service1}
                width={800}
                height={730}
                alt="smartest"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="mb-4 h4">Realtime Updates</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                blockboard unlocks the potential of blockchain-powered
                currencies
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute border left-4 right-4 bottom-4 border-n-1/10 lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>
          {/* end top bento box  */}

          <div className="relative grid gap-5 z-1 lg:grid-cols-2">
            {/* left bottom bento box */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="object-cover w-full h-full"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="mb-4 h4">Social Platform</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Keep up to date on the latest that is happening in the space
                  in our forum channels. Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            {/* right bottom bento box  */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="mb-4 h4">Trading Tools</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The worlds most powerful trading and infromation platform for
                  cryptocurrency traders. How rich will you become?
                </p>
                <ul className="flex justify-between item-center">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center rounded-2xl ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="object-cover w-full h-full"
                  width={520}
                  height={400}
                  alt="scary robot"
                />

                <VideoChatMessage />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;