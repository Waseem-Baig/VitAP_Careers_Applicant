"use client";

import SignIn from "../components/sign-in/sign-in-empty/sign-in-empty";
import SignInMobile from "../components/sign-in/sign-in-empty-mobile/sign-in-mobile-empty";
import SignInWrapper from "../pages/sign-in-wrapper";
import SideBar from "../components/main-page/main-page-desktop/sidebar";
import Navbar from "../components/main-page/main-page-desktop/main-page-navbar";
import Mainbar from "../components/main-page/main-page-desktop/mainbar";
import Mainpage from "@/components/main-page/main-page-desktop/mainpage";
import MainpageMobile from "@/components/main-page/main-page-mobile/mainPageMobile";
import MainpageWrappper from "@/pages/main-page-wrapper";
import Personal from "@/components/personal-information/personal-information-desktop/personal-information";
import PersonalInformationMobile from "@/components/personal-information/personal-information-mobile/personal-information-mobile";
import PersonalInformationWrapper from "@/pages/personal-information-wrapper";
import EducationPage from "@/components/education/education-desktop/education-page";
import EducationMobilePage from "@/components/education/education-mobile/education-mobile";
import EducationWrapper from "@/pages/education-wrapper";
import ExperienceDesktop from "@/components/experience/experience-desktop/experience-page";
import ExperienceMobile from "@/components/experience/experience-mobile/experience-mobile";
import ExperienceWrapper from "@/pages/experience-wrapper";
import ResearchDesktop from "@/components/research/research-desktop/research-desktop";

export default function Home() {
  return (
    <>
      <ResearchDesktop />
    </>
  );
}
