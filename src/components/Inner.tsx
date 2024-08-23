import React from "react";
import VBanner from "./PageTransitions/VBanner";
import { anton } from "@/lib/fonts/index";
function Inner({ children }: { children: React.ReactNode }) {
  return <VBanner>{children}</VBanner>;
}

export default Inner;
