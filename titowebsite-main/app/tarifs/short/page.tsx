"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import MontageForm from "@/components/MontageForm";

const Short = () => {
  return (
    <>
      <Breadcrumb pageName={"Montage Short "} description={"Ce questionnaire vise à mieux cerner tes besoins "}/>
      <MontageForm />
    </>
  );
};

export default Short;
