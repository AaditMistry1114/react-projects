import { IoIosCheckmarkCircle } from "react-icons/io";
import './SaveStatus.css'

export default function SaveStatus({ status }) {
  return (
    <div className={`save-status ${status}`}>
      {status === "saved" ? (
        <>
          Saved <IoIosCheckmarkCircle color="#4ADE80" />
        </>
      ) : (
        <>Saving...</>
      )}
    </div>
  );
}