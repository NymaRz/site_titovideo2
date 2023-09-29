"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import MontageForm from "@/components/MontageForm";

const Youtube = () => {
    //enregistrement le choix du tarifs
    localStorage.setItem("tarif", "youtube");


  return (
    <>
      <Breadcrumb pageName={"Montage Youtube"} description={"Ce questionnaire vise à mieux cerner tes besoins "}/>
      <MontageForm />
    </>
  );
};

export default Youtube;
