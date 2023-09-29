"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import MontageForm from "@/components/MontageForm";
import {Login} from "@mui/icons-material";
import Contact from "@/components/Contact";

const Premium = () => {
  return (
    <>
      <Breadcrumb pageName={"Montage Premium "} description={"Ce questionnaire vise à mieux cerner tes besoins "}/>
      <Contact/>
    </>
  );
};

export default Premium;
