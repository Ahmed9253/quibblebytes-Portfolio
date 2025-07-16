import {
  FaPalette,
  FaServer,
  FaMobileAlt,
  FaBullhorn,
  FaVideo,
  FaShieldAlt,
  FaGlobe,
  FaCloud,
  FaWordpress,
  FaNode,
  FaNodeJs,
  FaGoogle,
  FaGoogleDrive,
} from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import {
  SiSlack,
  SiSketch,
  SiAdobexd,
  SiPhp,
  SiMysql,
  SiLaravel,
  SiGoogleanalytics,
  SiLinkedin,
  SiYoutubemusic,
  SiFacebook,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiGoogleads,
  SiFig,
  SiFigma,
  SiSwift,
  SiFlutter,
  SiAndroidstudio,
  SiShopify,
  SiHubspot,
  SiTiktok,
  SiYoutube,
  SiReact,
  SiWordpress,
  SiDjango,
  SiKotlin,
  SiMeta,
  SiBlender,
  SiAdobepremierepro,
  SiSplunk,
  SiKalilinux,
  SiWireshark,
  SiHostinger,
  SiLazarus,
} from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import "react-icons/vsc";
import { VscAzure } from "react-icons/vsc";

const services = [
  {
    title: "UI/UX Design",
    icon: <FaPalette className="text-6xl text-[#32fa5b] mb-2 mt-2 z-20" />,
    tools: [<SiFigma />, <SiSketch />, <SiAdobeillustrator />],
  },
  {
    title: "Web Development",
    icon: <FiMonitor className="text-6xl text-[#32fa5b] mb-6 z-20" />,
    tools: [<SiReact />, <SiWordpress />, <SiLaravel />],
  },
  {
    title: "Mobile Apps",
    icon: <FaMobileAlt className="text-6xl text-[#32fa5b] mb-6 z-20" />,
    tools: [<SiSwift />, <SiFlutter />, <SiKotlin />],
  },
  {
    title: "Apis And Databses",
    icon: <GrSystem className="text-6xl text-[#32fa5b] mb-6 z-20" />,
    tools: [<FaNodeJs />, <SiDjango />, <SiMysql />],
  },
  {
    title: "Digital Marketing/SEO",
    icon: <FaBullhorn className="text-6xl text-[#32fa5b] mb-6 z-20" />,
    tools: [<SiMeta />, <FaGoogle />, <SiLinkedin />],
  },
  {
    title: "Google & Meta Ads",
    icon: (
      <MdOutlineDesignServices className="text-6xl text-[#32fa5b] mb-6 z-20" />
    ),
    tools: [<SiFacebook />, <SiYoutube />, <SiTiktok />],
  },
  {
    title: "Video & Animation",
    icon: <FaVideo className="text-6xl text-[#32fa5b] mb-6 z-20" />,
    tools: [<SiAdobeaftereffects />, <SiBlender />, <SiAdobepremierepro />],
  },
  {
    title: "Cyber Security",
    icon: <FaShieldAlt className="text-6xl text-[#32fa5b] mb-6 z-20" />,
    tools: [<SiSplunk />, <SiKalilinux />, <SiWireshark />],
  },
  {
    title: "Domain & Hosting",
    icon: <FaGlobe className="text-6xl text-[#32fa5b] mb-6 z-20" />,
    tools: [<SiHostinger />, <VscAzure />, <FaGoogleDrive />],
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-black to-[#18174a] py-12 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="w-full mb-12">
          <p className="text-white text-sm font-semibold uppercase tracking-widest">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#32fa5b] mt-2">
            From Vision to Value — Transform Your Business
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div key={index} className="max-w-sm w-full">
              <div
                className="relative group bg-transparent backdrop-blur-3xl border-1/2 border-white rounded-lg shadow-2xl flex flex-col items-center pt-12 pb-6 px-8 min-h-[300px] overflow-hidden light-beam"
                onMouseMove={(e) => {
                  const box = e.currentTarget;
                  const rect = box.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  box.style.setProperty("--x", `${x}px`);
                  box.style.setProperty("--y", `${y}px`);
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(200px circle at var(--x, 50%) var(--y, 50%), rgba(50,250,91,0.2), transparent 60%)",
                    transition: "opacity 0.2s ease",
                    opacity: 1,
                  }}
                ></div>
                {service.icon}
                <h4 className="text-white text-2xl font-bold mb-4 text-center z-20">
                  {service.title}
                </h4>

                <div className="flex items-center justify-between w-full mt-auto z-20">
                  <div className="flex gap-3">
                    {service.tools.map((ToolIcon, i) => (
                      <span
                        key={i}
                        className="rounded-lg shadow-md flex items-center justify-center w-10 h-10 bg-white"
                      >
                        {ToolIcon}
                      </span>
                    ))}
                  </div>
                  <button className="bg-[#32fa5b] text-black font-semibold px-6 py-2 rounded-lg hover:bg-[#28c94b] transition shadow-md ml-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
