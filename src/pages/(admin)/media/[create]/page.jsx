import Partial from "../../../../components/layouts/admin/partial";
import FileUpload from "./_components/file-upload";

const Create = () => {
    return (
        <div>
            <Partial page="Media" section="Create" link="/admin/media" />  
            <FileUpload />      
        </div>
    );
}


export default Create;
