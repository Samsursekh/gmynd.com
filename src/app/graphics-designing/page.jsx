// "use client";

import React from "react";
import animationData from "@/Images/all-svg-animations/app-development.json";
import { MdOutlineDone } from "react-icons/md";
import WebDevTools from "@/Components/WebDevTools";
import appDev from "@/Images/app-development-services-images/app-dev.jpg";
import Image from "next/image";
import LottieAnimation from "@/utils/LotteiFiles/LottieAnimation";
import LetsConnectButton from "@/utils/LetsConnectButton/LetsConnectButton";
import { StickyScrollForAppDev } from "@/Components/ui/sticky-scroll-for-appdev";

export default function AppDevelopment() {
  const content = [
    {
      title: "Hosting",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
    {
      title: "Responsive Layout",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
    {
      title: "Web content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
    {
      title: "CRM",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
    {
      title: "Payment Getway Integration",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    },
    {
      title: "SSL",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    },
  ];
  return (
    <section className="pt-14">
      <div className=" bg-black p-10 flex-row md:flex md:justify-between justify-center items-center">
        <div className=" lg:w-[60%] md:w-full w-full pl-3">
          <h1 className="text-4xl py-4 font-roboto font-bold animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] rounded-r-full px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            GRAPHICS DESIGNING
          </h1>
          <p className="text-xl font-sans animate-shimmer items-center justify-center px-6 font-medium text-slate-400 ">
            {/* PERSONALIZED APP SOLUTIONS WITH REFRESHING UI CONCEPTS */}
            Personalized app solutions with refreshing ui concepts
          </p>
          <div className="px-6">
            <LetsConnectButton />
          </div>
        </div>
        <div className=" lg:w-[40%] md:w-full w-full">
          <LottieAnimation animationData={animationData} />
        </div>
      </div>
      {/* second section */}
      <div className="font-roboto  flex-row md:flex px-6 py-3 m-auto items-center justify-center">
        <div className=" md:w-[35%] lg:w-[35%] w-full">
          <Image
            src={appDev}
            alt="GRAPHICS"
            width={400}
            height={400}
            priority
            loading="eager"
          />
        </div>
        <div className=" lg:w-[60%] md:w-full w-full pl-3">
          <h1 className="text-4xl py-4 font-roboto font-bold animate-shimmer items-center justify-center text-slate-600">
            GRAPHICS DESIGNING
          </h1>
          <p className="text-[14px] font-sans animate-shimmer items-center justify-center font-medium text-slate-400 ">
            Android is amongst one of the most significantly dominating mobile
            platforms which are making waves and ensuring that our generation is
            getting the most refined set of advanced solutions that are out
            there. Android applications have been instrumental in offering an
            enhanced interface for the Smart Phone Industry and are used by most
            prestigious branded smart phone developing companies such as
            Samsung, Lenovo, Asus & more.
          </p>
          <br />
          <p className="text-[14px] font-sans animate-shimmer items-center justify-center font-medium text-slate-400 ">
            Gmynd is a reliable & competent GRAPHIC DESIGNING company that is
            known for offering excellent and exclusive solutions developed after
            extensive research regarding the app's practical use & feasibility
            for targeted users. We have a dedicated team of app developers on
            board who are adept in offering you solutions customized to the
            bone.
          </p>

          <div className="mt-3">
            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Cross-Platform Development</p>
              </div>
            </div>

            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>App Re-engineering</p>
              </div>
            </div>

            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>App Customization Services</p>
              </div>
            </div>
            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Support & Maintenance </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third section */}

      <StickyScrollForAppDev content={content} />
      <WebDevTools />
    </section>
  );
}
