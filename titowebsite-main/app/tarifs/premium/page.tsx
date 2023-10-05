"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import MontageForm from "@/components/MontageForm";

const Premium = () => {
  return (
    <>
      <Breadcrumb pageName={"Montage Premium "} description={"Ce questionnaire vise à mieux cerner tes besoins "}/>
      <MontageForm />
    </>
  );
};

export default Premium;
