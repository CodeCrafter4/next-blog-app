"use client";

import BlogList from "@/app/Components/BlogList";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}
