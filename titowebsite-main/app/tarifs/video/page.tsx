"use client"

import Breadcrumb from "@/components/Common/Breadcrumb";
import MontageForm from "@/components/MontageForm";

const video = () => {
    return (
        <>
        <Breadcrumb pageName={"Montage vidéo"} description={"Ce questionnaire vise à mieux cerner tes besoins "}/>
        <MontageForm />
        </>
    );
}

export default video;