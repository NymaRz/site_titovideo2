import Breadcrumb from "@/components/Common/Breadcrumb";
import MontageForm from "@/components/MontageForm";

const photos = () => {
    return (
        <>
        <Breadcrumb pageName={"Pack Photos"} description={"Ce questionnaire vise à mieux cerner tes besoins "}/>
        <MontageForm />
        </>
    );
}

export default photos;