"use client";

import React, { useState, useEffect } from "react";
import RootLayout from "../layout";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import LOGO from "@/app/assets/favicon/logo.ico";
import PROFILE from "@/app/assets/image/profile.jpeg";
import WEB_DEV_REQUEST_SHOWCASE from "@/app/assets/image/request-web-d.png";
import WEB_DEV_COMMUNICATEE_SHOWCASE from "@/app/assets/image/web-development.png";
import WEB_DEV_ELITE_SHOWCASE from "@/app/assets/image/elite.png";
import WEB_DEV_WEFIND_SHOWCASE from "@/app/assets/image/wefind.png";
import UIUX_COMMUNICATEE_SHOWCASE from "@/app/assets/image/ux-communicatee.png";
import UIUX_RENTAL_SHOWCASE from "@/app/assets/image/ux-rental.png";
import UIUX_WEFIND_SHOWCASE from "@/app/assets/image/ux-wefind.png";
import UIUX_WEFIND_MOBILE_SHOWCASE from "@/app/assets/image/mobile.png";
import UIUX_REQUEST_MOBILE_SHOWCASE from "@/app/assets/image/mobile-request.png";
import DKT_LOGIN_SHOWCASE from "@/app/assets/image/dkt-dev.png";

import { BiRightArrowAlt, BiLogoFigma } from "react-icons/bi";
import { HiDocumentDownload } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";

import { motion, useScroll, scroll } from "framer-motion";
import { Navigation } from "../navigation-section/Navigation";
import { NavLink } from "../components/NavLink";
import { HeroSection } from "../hero-section/HeroSection";
import { About } from "../about-section/About";
import { Projects } from "../projects-section/Projects";
import MoreProjects from "../more-projects/page";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectCardMore } from "../components/ProjectCardMore";
import { Skills } from "../skills-section/Skills";
import { Education } from "../education-section/Education";
import { Contact } from "../contact-section/Contact";
import { Footer } from "../footer-section/Footer";

// assets exports
export {
  LOGO,
  PROFILE,
  WEB_DEV_COMMUNICATEE_SHOWCASE,
  WEB_DEV_REQUEST_SHOWCASE,
  WEB_DEV_ELITE_SHOWCASE,
  WEB_DEV_WEFIND_SHOWCASE,
  UIUX_COMMUNICATEE_SHOWCASE,
  UIUX_RENTAL_SHOWCASE,
  UIUX_WEFIND_SHOWCASE,
  UIUX_WEFIND_MOBILE_SHOWCASE,
  UIUX_REQUEST_MOBILE_SHOWCASE,
  DKT_LOGIN_SHOWCASE,
};

// Reactjs | nextjs exports
export {
  React,
  RootLayout,
  usePathname,
  useState,
  useEffect,
  useRouter,
  Link,
  Image,
};

// Components imports
export {
  Navigation,
  NavLink,
  HeroSection,
  About,
  Projects,
  MoreProjects,
  ProjectCard,
  ProjectCardMore,
  Skills,
  Education,
  Contact,
  Footer,
};

// third party exports
export { motion, useScroll, scroll };

// icon exports
export {
  BiRightArrowAlt,
  FaLinkedinIn,
  BsGithub,
  MdEmail,
  HiDocumentDownload,
  RiMailSendLine,
  IoLogoWhatsapp,
  FiMoreVertical,
  BiLogoFigma,
};
