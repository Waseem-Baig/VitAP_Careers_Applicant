import Image from "next/image";
import { useState } from "react";

const OTPInput = ({ count }) => {
  return (
    <div className="flex justify-between gap-4">
      {[...Array(count)].map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          className="w-[26px] h-[26px] border border-[rgba(140,35,46,0.25)] bg-[#FAFAFA] text-center font-montserrat text-[20px] font-bold focus:outline-none focus:border-[#650010]"
          placeholder="0"
        />
      ))}
    </div>
  );
};

const SignInMobile = () => {
  const [isMailSent, setIsMailSent] = useState(false);

  const handleSendMail = () => {
    setIsMailSent(true);
  };

  const logoSrc =
    "https://s3-alpha-sig.figma.com/img/0aa6/e4cb/4892bb3c77e837c57c302d14ed1d280c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HbJ0wQjp2fGKVtQ4QzIoSbBlKJGaHSjSQn6sEfoJPnZhpMOFv8Uh3Pn-QLW20l73AJRxJOs7Vmu1e1EboMQYM~RJkqeMVy3cAXuQVjXfNQHfKsA5D17LIa6EBSAYZXiPHzLewqanHzNGFJg0yxvGXQ0L06IYiUuhag-HhI33sl-ARxWhXh0g3SMTMDp0JGyYD3W4rP6KwHoETS5Uxf6wS5PAuswpYTajA0sgnCVNejSQ74v8P1bTWxx0qnlq0rzP-TWARZhTSu5mWQGarQWYW5M76CTH5rcNxTWugBmzpFKueU6xqBHMRHGhW2QeB~Ti6y7sg-13D5Gtk5xmJ-UrwA__";
  const logo =
    "https://s3-alpha-sig.figma.com/img/0de7/cd9d/bd08b05603698e0c38c8eb4b41bf2b7d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ph4xZYg-8aitj87saeNyVxotpblTwAoRHxs8SgFs6CE-VQsuwuP5RpY3lBC9FVZnr~Iq4HumIDWXs9-kHqH5wOR6tpkBIMVLu~CDgedN6zvt8c0QlRheiBgbSSd2zDuyJLHtc~k06yYq4v9lC6B-jLgixCUxVoAiZrchQvegc6auFrp~Vq3T-eSaQnYGTlY1seCoqUTxhHDDjP3kfI-Hk69P1pqNQ41AWLrwgKveYWTO6lI2tD5v19TDf2xGEdP6NW6E-J-PsOUObyelEaiEsc~uIiN61OoY~JCfeOrlLiMmBUGSpgPHgH--f9DMacn~RTsLAS33ivxbTBKuWTRaoA__";

  return (
    <div className="w-full h-screen flex flex-col gap-1">
      <header className="w-full h-[8vh] bg-[#650010] flex justify-between items-center p-2">
        <img src={logoSrc} alt="Logo" width="100vw" height="40vh" />
        <nav className="flex gap-5 pr-4">
          <button className="bg-transparent" aria-label="Search">
            <svg
              width="19"
              height="18"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 19L15.4158 14.657C16.1999 13.9142 16.8219 13.0322 17.2463 12.0616C17.6707 11.091 17.8891 10.0507 17.8891 9.00011C17.8891 7.94952 17.6707 6.90922 17.2463 5.9386C16.8219 4.96798 16.1999 4.08606 15.4158 3.34318C14.6316 2.6003 13.7007 2.01102 12.6762 1.60897C11.6516 1.20693 10.5535 1 9.44457 1C8.33561 1 7.23751 1.20693 6.21297 1.60897C5.18843 2.01102 4.25751 2.6003 3.47336 3.34318C1.88969 4.84349 1 6.87835 1 9.00011C1 11.1219 1.88969 13.1567 3.47336 14.657C5.05702 16.1574 7.20493 17.0002 9.44457 17.0002C11.6842 17.0002 13.8321 16.1574 15.4158 14.657Z"
                stroke="#FDFEFF"
                width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="bg-transparent" aria-label="Menu">
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H18M1 8H18M1 15H18"
                stroke="#FDFEFF"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>
      </header>
      <div className="pl-5 flex items-center w-full h-10 gap-2">
        <button className="text-black font-montserrat text-xs font-medium">
          Home
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3"
          height="5"
          viewBox="0 0 4 5"
          fill="none"
        >
          <path
            d="M1.26322 0L0.859375 0.416667L2.99399 2.5L0.859375 4.58333L1.26322 5L3.85937 2.5L1.26322 0Z"
            fill="black"
          />
        </svg>
        <button className="text-black font-montserrat text-xs font-medium">
          Career
        </button>
      </div>
      {isMailSent ? (
        <main className="flex flex-col justify-center items-center w-full h-screen">
          <div className="flex flex-col items-center w-[273px] h-[246px]">
            <div className="flex flex-col w-[247px] h-[50px] gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-montserrat font-bold text-[14px] text-[#000000]">
                  Enter verification code
                </label>
                <label className="font-montserrat text-[10px] text-[#718096]">
                  We have just sent a verification code to saichar*****@mail.com
                </label>
              </div>
              <OTPInput count={6} />
              <div className="flex w-full h-auto">
                <button className="font-montserrat text-[10px] font-bold text-[#741D26]">
                  Send the code again
                </button>
              </div>
              <button
                className="font-montserrat text-[10px] text-[#FFFFFF] w-full font-bold h-[28px] p-2 bg-[#650010]"
                onClick={handleSendMail}
              >
                Verify
              </button>
            </div>
          </div>
        </main>
      ) : (
        <main className="flex flex-col justify-center items-center w-full h-screen">
          <div className="flex flex-col items-center w-[273px] h-[246px] gap-4">
            <div className="flex flex-col items-center pb-4">
              <img
                src={logo}
                alt="Login Logo"
                width="118px"
                height="37px"
                className="pb-2"
              />
              <p className="font-montserrat w-full h-[16px] text-[12px] font-semibold text-center text-[#000000]">
                Login to apply for a Job
              </p>
            </div>
            <div className="flex flex-col w-[247px] h-[50px] gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-montserrat text-[14px] text-[#000000]">
                  Email Address<span className="text-[#E03137]">*</span>
                </label>
                <input
                  className="border border-[#BBBBBB] w-full h-[28.71px] p-[16px_20px] placeholder:text-[#A0AEC0] placeholder:font-montserrat placeholder:text-[14px] placeholder:font-normal"
                  type="email"
                  placeholder="Input your registered email"
                  required
                />
              </div>
              <button
                className="font-montserrat text-[10px] text-[#FFFFFF] w-full h-[28px] p-2 bg-[#650010]"
                onClick={handleSendMail}
              >
                Generate OTP
              </button>
              <div className="flex items-center gap-2">
                <button className="opacity-50" aria-label="Back to Careers">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#000000]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="12" x2="6" y2="12"></line>
                    <polyline points="12 6 6 12 12 18"></polyline>
                  </svg>
                </button>
                <p className="font-manrope text-[10px] text-[#00000080]">
                  Back to careers homepage
                </p>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default SignInMobile;
