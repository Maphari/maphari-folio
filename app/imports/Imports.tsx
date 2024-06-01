"use client";
import React, { useState, useEffect } from "react";
import RootLayout from "../layout";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { transition } from "../utils/transition";

import LOGO from "@/app/assets/favicon/logo.ico";
import PROFILE from "@/app/assets/image/profile.jpeg";
import WEB_DEV_REQUEST_SHOWCASE from "@/app/assets/image/request-web-d.png";
import WEB_DEV_COMMUNICATEE_SHOWCASE from "@/app/assets/image/web-development.png";
import WEB_DEV_ELITE_SHOWCASE from "@/app/assets/image/elite.png";
import WEB_DEV_HELP_CONNECT_SHOWCASE from "@/app/assets/image/help-connect.png"

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


export {
  LOGO,
  PROFILE,
  WEB_DEV_COMMUNICATEE_SHOWCASE,
  WEB_DEV_REQUEST_SHOWCASE,
  WEB_DEV_ELITE_SHOWCASE,
  WEB_DEV_HELP_CONNECT_SHOWCASE
};
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

export { motion, useScroll, scroll, transition };

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
