"use client";

import SignIn from "../components/sign-in/sign-in-empty/sign-in-empty";
import SignInMobile from "../components/sign-in/sign-in-empty-mobile/sign-in-mobile-empty";
import SignInWrapper from "../pages/sign-in-wrapper";
import SideBar from "../components/main-page/main-page-desktop/sidebar";
import Navbar from "../components/main-page/main-page-desktop/navbar";
import Mainbar from "../components/main-page/main-page-desktop/mainbar";
import Mainpage from "@/components/main-page/main-page-desktop/mainpage";
import MainpageMobile from "@/components/main-page/main-page-mobile/mainPageMobile";
import MainpageWrappper from "@/pages/main-page-wrapper";

export default function Home() {
  return (
    <>
      <MainpageWrappper />
    </>
  );
}
