import {MdOutlineEmail, MdOutlineLaptopMac} from "react-icons/md";
import {IoIosLink} from "react-icons/io";
import {FaRegBuilding} from "react-icons/fa";
import {TiPencil} from "react-icons/ti";

const WriterViewer = ({writer}) => {
    const {email, referenceUrl, part, organization, motto} = writer;

    return (
        <div>
            <div className='flex flex-row items-center gap-1'>
                <MdOutlineEmail/>
                <p>{email}</p>
            </div>
            <div className='flex flex-row items-center gap-1'>
                <IoIosLink className='font-semibold'/>
                <a href={referenceUrl}>{referenceUrl}</a>
            </div>
            <div className='flex flex-row items-center gap-1'>
                <MdOutlineLaptopMac/>
                <p>{part}</p>
            </div>
            <div className='flex flex-row items-center gap-1'>
                <FaRegBuilding/>
                <p>{organization}</p>
            </div>
            <div className='flex flex-row items-center gap-1'>
                <TiPencil/>
                <p>{motto}</p>
            </div>
        </div>
    );
};

export default WriterViewer;