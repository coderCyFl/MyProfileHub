import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillWechat,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillFileMusicFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/anya_bk.jpg";
import code from "../public/wordpress.png";
import design from "../public/web_dev_icon.png";
import consulting from "../public/security_icon_sub.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import useSound from "use-sound";
import backgroundMusic from "../music/sukidakara.mp3";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(backgroundMusic, { volume: 1 });

  const backgroundMusicClick = () => {
    setIsPlaying(!isPlaying); // Toggle the play state
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  return (
    <div className={`transition-all ${darkMode ? "dark" : ""}`}>
      <Head>
        <title>Cyrus Chan</title>
        <meta name="description" content="Created By Cyrus Chan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">codercy</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl mr-5"
                />
              </li>
              <div className="flex">
                <li>
                  <BsFillFileMusicFill
                    className={`cursor-pointer text-2xl ${
                      isPlaying ? "text-green-500" : ""
                    }`}
                    onClick={backgroundMusicClick}
                  />
                </li>
              </div>
              <li>
                <a
                  className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://api.whatsapp.com/send?phone=65329803"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Cyrus Chan
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Backend Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I'm Cyrus Chan, a dedicated C# backend developer with a passion
              for crafting efficient and reliable solutions. With two years of
              experience in the field, I've had the privilege of working on a
              range of projects that have honed my skills and deepened my
              understanding of software development.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com" target="_blank">
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://www.instagram.com/__coder_cy_1112/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                target="_blank"
              >
                <AiFillInstagram />
              </a>
              <a href="https://youtube.com" target="_blank">
                <AiFillYoutube />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Services I provide
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Step into a world of digital possibilities with my "Services I
              Offer" section. I'm your partner for striking designs, expert web
              and app development, and seamless{" "}
              <span className="text-teal-500"> WordPress </span>support. Let's
              turn your ideas into a captivating online reality.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Nothing Come From Nothing . Contact Me !
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Website Development
              </h3>
              <p className="py-2">
                Crafting Digital Excellence: Elevate Your Brand with Expert
                Website Developmen
              </p>
              <h4 className="py-4 text-teal-600">
                Custom Solutions for Unique Needs
              </h4>
              <p className="text-gray-800 py-1">Responsive Design Excellence</p>
              <p className="text-gray-800 py-1">E-Commerce Powerhouses</p>
              <p className="text-gray-800 py-1">Digital Brand Identity</p>
              <p className="text-gray-800 py-1">
                Performance and Speed Optimization
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                WordPress Expertise and Content Management
              </h3>
              <p className="py-2">
                Empower Your Online Presence: Seamless WordPress Solutions for
                Dynamic Digital Succes
              </p>
              <h4 className="py-4 text-teal-600">Striking Visual Identity</h4>
              <p className="text-gray-800 py-1">
                Effortless Content Management
              </p>
              <p className="text-gray-800 py-1">
                E-Commerce Excellence with WooCommerce
              </p>
              <p className="text-gray-800 py-1">
                Optimized Performance and SEO
              </p>
              <p className="text-gray-800 py-1">
                Tailored Plugins and Functionality
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Website Security
              </h3>
              <p className="py-2">
                Digital Mastery and Security Synergy: Crafting, Protecting, and
                Elevating Your Online Presence
              </p>
              <h4 className="py-4 text-teal-600">
                Fortifying Digital Defenses
              </h4>
              <p className="text-gray-800 py-1">
                Data Protection and Privacy Compliance
              </p>
              <p className="text-gray-800 py-1">
                Regular Updates and Patch Management
              </p>
              <p className="text-gray-800 py-1">
                Emergency Response and Disaster Recovery
              </p>
              <p className="text-gray-800 py-1"></p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              A versatile web professional specializing in WordPress{" "}
              <span className="text-teal-500"> WordPress </span> wizardry,
              hands-on coding, and captivating design. With a knack for
              user-centered interfaces and a passion for teaching, I'm also your
              go-to for{" "}
              <span className="text-teal-500"> Notion Tutorials </span>. Let's
              bring your <span className="text-teal-500"> digital vision </span>{" "}
              to life!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My expertise covers a diverse spectrum of services: brand design,
              programming, and educational solutions.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
