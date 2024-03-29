import Image from "next/image";
import Hero from "./(hero)/Hero";
import SectionContainer from "@/components/Section";
import SectionCard from "@/components/SectionCard";
import Button from "@/components/Button";
import AccordionSection from "@/components/Accordion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden flex flex-col items-center">
      <Hero />
      <SectionContainer
        buttonTitle={"Communities"}
        // biome-ignore lint/style/useSelfClosingElements: <explanation>
        buttonIcon={
          <svg
            color="rgba(42 121 155 / 100%)"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            focusable="false"
            aria-hidden="true"
          >
            <path
              fill="rgba(42 121 155 / 100%)"
              fill-rule="evenodd"
              d="M17.6 4c0-.872-.717-1.628-1.642-1.564A14.574 14.574 0 0 0 2.436 15.958C2.371 16.883 3.128 17.6 4 17.6h7c.906 0 1.536-.726 1.688-1.474a4.4 4.4 0 0 1 3.438-3.438c.748-.152 1.474-.782 1.474-1.688V4Zm-1.558-.367c.176-.012.358.135.358.367v1.416A11.6 11.6 0 0 0 5.415 16.4H4c-.232 0-.379-.181-.367-.358A13.374 13.374 0 0 1 16.042 3.633ZM6.617 16.4h1.804A8.6 8.6 0 0 1 16.4 8.421V6.617A10.4 10.4 0 0 0 6.617 16.4ZM16.4 9.624A7.4 7.4 0 0 0 9.624 16.4H11c.198 0 .444-.178.511-.513a5.6 5.6 0 0 1 4.376-4.375c.335-.068.513-.314.513-.512V9.624Z"
              clip-rule="evenodd"
            />
          </svg>
        }
        sectionTitle={"Discover your community"}
        sectionDes={
          "Find your tribe in the metaverse of truly free Status Communities."
        }
        color="#2a799b"
        bgColor={"bg-[#2a799b]/10"}
        textColor="text-[#2a799b]"
        borderColor="border-[#2a799b]/50"
      >
        <div className="relative z-[14] grid grid-flow-row gap-3 xl:gap-5">
          <SectionCard
            className="pt-6 justify-between"
            title="Send with automatic bridging. No more multi-chain hassle."
            posterLink={
              "https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1920,q_auto/Homepage/Screens/Communities%20Feature%20Section/Communities_01"
            }
            borderColor="border-[#2a799b]/50"
            imageClassName="border-t-4 border-r-4 border-l-4 rounded-t-3xl"
          />
        </div>
        <div className="relative z-[14] grid grid-flow-row gap-3 xl:gap-5">
          <SectionCard
            className="py-6"
            title="Send with automatic bridging. No more multi-chain hassle."
            posterLink={
              "https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1920,q_auto/Homepage/Illustrations/Communities%20Feature%20Section/01_Communities_Card"
            }
            reverse={true}
          />
          <SectionCard
            className="pb-6"
            title="Send with automatic bridging. No more multi-chain hassle."
            posterLink={
              "https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1920,q_auto/Homepage/Screens/Communities%20Feature%20Section/Communities_02"
            }
            borderColor="border-[#2a799b]/50"
            imageClassName="border-b-4 border-r-4 border-l-4 rounded-b-3xl"
            reverse={true}
          />
        </div>
        <div className="relative z-[14] grid grid-flow-row gap-3 xl:gap-5">
          <SectionCard
            className="px-12 py-12 items-center justify-center gap-0"
            borderColor="border-[#2a799b]/50"
            bgColor={"bg-[#2a799b]/10"}
            posterLink={
              "https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_750,q_auto/Homepage/Screens/Communities%20Feature%20Section/Communities_03_Frame"
            }
            mediaLink="https://res.cloudinary.com/dhgck7ebz/video/upload/f_auto:video,q_auto/v1/Homepage/Screens/Communities Feature Section/Communities_03"
          />
        </div>
      </SectionContainer>
      <section className="w-full px-8 py-20 bg-white">
        <div className="relative rounded-xl bg-[#09101c] p-20 flex flex-col items-center justify-center gap-4 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            height={724}
            width={1624}
            poster="https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1017,q_auto/Homepage/Animations/Frames/Create_Community_Banner_Left_Frame"
            className="hidden h-[436px] w-fit translate-x-10 sm:block lg:-translate-x-2 opacity-100 sm:opacity-50 xl:opacity-100 absolute sm:left-[-200px] xl:left-[-120px] xl:translate-x-0 2xl:left-[-80px]"
          >
            <source
              src="https://res.cloudinary.com/dhgck7ebz/video/upload/v1/Homepage/Animations/Create_Community_Banner_Left_HEVC.mov"
              type="video/mp4;codecs=hvc1"
            />
            <source
              src="https://res.cloudinary.com/dhgck7ebz/video/upload/f_auto:video,q_auto/v1/Homepage/Animations/Create_Community_Banner_Left"
              type="video/mp4"
            />
            <source
              src="https://res.cloudinary.com/dhgck7ebz/video/upload/f_auto:video,q_auto/v1/Homepage/Animations/Create_Community_Banner_Left"
              type="video/webm"
            />
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            height={1063}
            width={776}
            poster="https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1063,q_auto/Homepage/Animations/Frames/Create_Community_Banner_Right_Frame"
            className="h-[436px] w-fit translate-x-0 scale-150 sm:scale-100 sm:right-[-250px] opacity-100 sm:opacity-50 xl:opacity-100 lg:-translate-x-28 absolute xl:right-[-140px] xl:m-0 xl:translate-x-0 2xl:right-[-100px]"
          >
            <source
              src="https://res.cloudinary.com/dhgck7ebz/video/upload/v1/Homepage/Animations/Create_Community_Banner_Right_HEVC.mov"
              type="video/mp4;codecs=hvc1"
            />
            <source
              src="https://res.cloudinary.com/dhgck7ebz/video/upload/f_auto:video,q_auto/v1/Homepage/Animations/Create_Community_Banner_Right"
              type="video/mp4"
            />
            <source
              src="https://res.cloudinary.com/dhgck7ebz/video/upload/f_auto:video,q_auto/v1/Homepage/Animations/Create_Community_Banner_Right"
              type="video/webm"
            />
          </video>
          <h3 className="text-white text-7xl font-bold text-center tracking-tight z-10">
            Take back control
          </h3>
          <p className="text-white text-lg font-light text-center tracking-tight z-10">
            Don’t give Discord or Telegram power over your community.
          </p>
          <Button
            type="button"
            title="Set your community free"
            variant="text-white mt-6 border rounded-xl py-2 text-sm font-regular border-slate-600 z-10"
          />
        </div>
      </section>
      <SectionContainer
        buttonTitle={"Messenger"}
        buttonIcon={
          <svg
            color="rgba(113 64 253 / 100%)"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            focusable="false"
            aria-hidden="true"
          >
            <path
              fill="rgba(113 64 253 / 100%)"
              fill-rule="evenodd"
              d="M1.9 8.5a6.6 6.6 0 0 1 6.6-6.6h2.638a6.962 6.962 0 0 1 3.53 12.962l-5.364 3.155-.904.532V15.1a6.6 6.6 0 0 1-6.5-6.6Zm6.6-5.4a5.4 5.4 0 0 0 0 10.8h1.1v2.551l4.46-2.623A5.761 5.761 0 0 0 11.138 3.1H8.5ZM7 6.4h6v1.2H7V6.4Zm4.5 3H7v1.2h4.5V9.4Z"
              clip-rule="evenodd"
            />
          </svg>
        }
        sectionTitle={"Chat privately with friends"}
        sectionDes={
          "Protect your right to free speech with decentralized messaging, metadata privacy and e2e encryption."
        }
        color="#7140fd"
        bgColor={"bg-[#7140fd]/10"}
        textColor="text-[#7140fd]"
        borderColor="border-[#7140fd]/50"
      >
        <div className="relative z-[14] grid grid-flow-row gap-3 xl:gap-5">
          <SectionCard
            className="px-12 py-12 items-center justify-center gap-0"
            borderColor="border-[#7140fd]/50"
            bgColor={"bg-[#7140fd]/10"}
            posterLink={
              "https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_750,q_auto/Homepage/Screens/Messenger%20Feature%20Section/Messenger_01_Frame"
            }
            mediaLink="https://res.cloudinary.com/dhgck7ebz/video/upload/f_auto:video,q_auto/v1/Homepage/Screens/Messenger Feature Section/Messenger_01"
          />
        </div>
        <div className="relative z-[14] grid grid-flow-row gap-3 xl:gap-5">
          <SectionCard
            className="py-6"
            title="Send with automatic bridging. No more multi-chain hassle."
            posterLink={
              "https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_3840,q_auto/Homepage/Illustrations/Messenger%20Feature%20Section/01_Messenger_Card"
            }
            reverse={true}
          />
          <SectionCard
            className="pb-6"
            title="Send with automatic bridging. No more multi-chain hassle."
            posterLink={
              "https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1920,q_auto/Homepage/Screens/Messenger%20Feature%20Section/Messenger_02"
            }
            borderColor="border-[#7140fd]/50"
            imageClassName="border-b-4 border-r-4 border-l-4 rounded-b-3xl"
            reverse={true}
          />
        </div>

        <div className="relative z-[14] grid grid-flow-row gap-3 xl:gap-5">
          <SectionCard
            className="pt-6 justify-between"
            title="Send with automatic bridging. No more multi-chain hassle."
            posterLink={
              "https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1920,q_auto/Homepage/Screens/Messenger%20Feature%20Section/Messenger_03"
            }
            borderColor="border-[#7140fd]/50"
            imageClassName="border-t-4 border-r-4 border-l-4 rounded-t-3xl"
          />
        </div>
      </SectionContainer>
      <SectionContainer
        buttonTitle={"Wallet"}
        buttonIcon={
          <svg
            color="rgba(246 176 60 / 100%)"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            focusable="false"
            aria-hidden="true"
          >
            <path
              fill="rgba(246 176 60 / 100%)"
              fill-rule="evenodd"
              d="M1.9 10a60.55 60.55 0 0 0 0 .5h.002c0 .1.002.198.004.295A3.7 3.7 0 0 0 1.9 11h.01c.023 1.185.096 2.188.259 3.028.208 1.074.572 1.937 1.22 2.584.646.647 1.509 1.011 2.583 1.22 1.067.206 2.397.268 4.028.268 1.63 0 2.96-.062 4.028-.269 1.074-.208 1.937-.572 2.584-1.22.646-.646 1.011-1.51 1.22-2.583.162-.84.235-1.843.259-3.028h.009c0-.069-.002-.137-.006-.206l.004-.294h.002V10c0-1.631-.062-2.96-.269-4.028-.208-1.074-.573-1.937-1.22-2.584-.646-.646-1.51-1.011-2.583-1.22C12.961 1.963 11.631 1.9 10 1.9c-1.631 0-2.96.062-4.028.269-1.074.208-1.937.573-2.584 1.22-.647.646-1.011 1.51-1.22 2.583C1.963 7.039 1.9 8.369 1.9 10Zm14.88-1.309c-.146-.837-.438-1.347-.939-1.7-.423-.3-1.054-.53-2.02-.68C12.86 6.164 11.616 6.1 10 6.1c-1.615 0-2.86.063-3.822.212-.965.15-1.596.38-2.02.678-.5.354-.792.864-.938 1.701l.058-.032C4.23 8.147 5.735 7.9 8 7.9h.6v.6c0 .41.104.757.298.99.179.215.496.41 1.102.41.606 0 .923-.195 1.101-.41.195-.233.299-.58.299-.99v-.6h.6c2.265 0 3.77.247 4.722.76l.058.031ZM3.106 10.823c.02 1.223.09 2.196.24 2.977.183.942.475 1.547.89 1.963.417.416 1.022.708 1.964.89.948.184 2.18.247 3.8.247 1.619 0 2.852-.063 3.8-.247.942-.182 1.547-.474 1.963-.89.416-.416.708-1.021.89-1.963.151-.78.22-1.755.24-2.978a1.375 1.375 0 0 0-.148-.561c-.1-.186-.273-.373-.592-.545-.616-.332-1.712-.572-3.607-.61-.076.405-.236.81-.523 1.153-.446.536-1.129.841-2.023.841-.894 0-1.577-.305-2.023-.84a2.494 2.494 0 0 1-.523-1.155c-1.895.039-2.991.28-3.607.61-.32.173-.492.36-.592.546a1.376 1.376 0 0 0-.149.562Zm12.657-6.586c.398.398.682.97.866 1.843a3.613 3.613 0 0 0-.096-.07c-.639-.451-1.477-.721-2.527-.884C12.952 4.962 11.634 4.9 10 4.9c-1.635 0-2.953.062-4.006.226-1.05.163-1.889.433-2.528.884a3.459 3.459 0 0 0-.095.07c.184-.874.468-1.445.866-1.843.415-.416 1.021-.708 1.963-.89.948-.184 2.18-.247 3.8-.247 1.619 0 2.852.063 3.8.247.942.182 1.547.474 1.963.89Z"
              clip-rule="evenodd"
            />
          </svg>
        }
        sectionTitle={"The future is multi-chain"}
        sectionDes={
          "L2s made simple - send and manage your crypto easily and safely across multiple networks."
        }
        color="#f6b03c"
        bgColor={"bg-[#f6b03c]/10"}
        textColor="text-[#f6b03c]"
        borderColor="border-[#f6b03c]/50"
      >
        <div className="relative z-[14] grid grid-flow-row gap-3 xl:gap-5">
          <SectionCard
            className="px-12 py-12 items-center justify-center gap-0"
            borderColor="border-[#f6b03c]/50"
            bgColor={"bg-[#f6b03c]/10"}
            posterLink={
              "https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_750,q_auto/Homepage/Screens/Messenger%20Feature%20Section/Messenger_01_Frame"
            }
            mediaLink="https://res.cloudinary.com/dhgck7ebz/video/upload/f_auto:video,q_auto/v1/Homepage/Screens/Messenger Feature Section/Messenger_01"
          />
        </div>
        <div className="relative z-[14] grid grid-flow-row gap-3 xl:gap-5">
          <SectionCard
            className="py-6"
            title="Send with automatic bridging. No more multi-chain hassle."
            posterLink={
              "https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_3840,q_auto/Homepage/Illustrations/Wallet%20Feature%20Section/01_Wallet_Card"
            }
          />
          <SectionCard
            className="pt-6 justify-between"
            title="Send with automatic bridging. No more multi-chain hassle."
            posterLink={
              "https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1920,q_auto/Homepage/Screens/Wallet%20Feature%20Section/Wallet_02"
            }
            borderColor="border-[#f6b03c]/50"
            imageClassName="border-t-4 border-r-4 border-l-4 rounded-t-3xl"
          />
        </div>

        <div className="relative z-[14] grid grid-flow-row gap-3 xl:gap-5">
          <SectionCard
            className="pt-6 justify-between"
            title="Send with automatic bridging. No more multi-chain hassle."
            posterLink={
              "https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1920,q_auto/Homepage/Screens/Wallet%20Feature%20Section/Wallet_01"
            }
            borderColor="border-[#f6b03c]/50"
            imageClassName="border-t-4 border-r-4 border-l-4 rounded-t-3xl"
          />
        </div>
      </SectionContainer>
      <AccordionSection />
      <section className="w-full flex flex-col items-center justify-center px-8 pt-28 pb-16 bg-[#09101c] gap-4">
        <Link href={"/"} className="">
          <Image
            src="https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1080,q_auto/Brand/Logo%20Section/Mark/Mark_01"
            alt={"logo"}
            width={480}
            height={480}
            className="w-20 h-20 mb-2"
          />
        </Link>
        <h3 className="text-white text-8xl font-bold tracking-tight text-center">
          Be unstoppable
        </h3>
        <p className="text-white text-xl font-light tracking-normal text-center">
          Use the open source, decentralized crypto communication super app.
        </p>
        <Button
          title="Sign up for early access"
          type="button"
          icon={
            <svg
              color="rgba(255 255 255 / 100%)"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              focusable="false"
              aria-hidden="true"
            >
              <g clip-path="url(#confetti-icon_svg__a)">
                <path
                  stroke="rgba(255 255 255 / 100%)"
                  stroke-width="1.2"
                  d="M7.646 5.782c-.353.354-4.242 11.314-4.242 11.314s10.96-3.889 11.313-4.242c.354-.354.354-2.475-2.12-4.95C10.12 5.429 8 5.429 7.646 5.782Z"
                />
                <path
                  stroke="rgba(255 255 255 / 100%)"
                  stroke-width="1.2"
                  d="M7.646 5.782s-.353 2.475 2.122 4.95c2.475 2.475 4.95 2.122 4.95 2.122"
                />
                <path
                  fill="rgba(255 255 255 / 100%)"
                  fill-rule="evenodd"
                  d="M10.546 14.197 6.303 9.954l-.848.849 4.242 4.242.849-.848Zm-2.475 1.06L5.242 12.43l-.848.849 2.828 2.828.849-.848Z"
                  clip-rule="evenodd"
                />
                <circle
                  cx="14.362"
                  cy="10.312"
                  r="1"
                  fill="rgba(255 255 255 / 100%)"
                  opacity="0.8"
                />
                <circle
                  cx="8.787"
                  cy="3.165"
                  r="1.5"
                  fill="rgba(255 255 255 / 100%)"
                  opacity="0.4"
                />
                <circle
                  cx="16.545"
                  cy="4.165"
                  r="1"
                  fill="rgba(255 255 255 / 100%)"
                  opacity="0.6"
                />
                <circle
                  cx="11.751"
                  cy="7.031"
                  r="1.5"
                  fill="rgba(255 255 255 / 100%)"
                  opacity="0.8"
                />
                <circle
                  cx="12.47"
                  cy="3.446"
                  r="1"
                  fill="rgba(255 255 255 / 100%)"
                  opacity="0.4"
                />
                <circle
                  cx="16.715"
                  cy="7.897"
                  r="1.5"
                  fill="rgba(255 255 255 / 100%)"
                  opacity="0.6"
                />
              </g>
              <defs>
                <clipPath id="confetti-icon_svg__a">
                  <path fill="#fff" d="M0 0h20v20H0z" />
                </clipPath>
              </defs>
            </svg>
          }
          variant={"bg-blue-600 text-white px-4 py-2 rounded-xl mt-4"}
        />
        <p className="font-light text-slate-400 text-xs text-center">
          Betas for Mac, Windows, Linux
          <br />
          Alphas for iOS & Android
        </p>
      </section>
    </main>
  );
}
