import Breadcrumb from "@/components/Common/Breadcrumb";
import MontageForm from "@/components/MontageForm";


const complet = () => {
    return (
        <>
        <Breadcrumb pageName={"Pack complet"} description={"Ce questionnaire vise à mieux cerner tes besoins "}/>
        <MontageForm />
        </>
    );
}

export default complet;