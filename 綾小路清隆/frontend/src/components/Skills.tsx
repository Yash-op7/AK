import src_INT from "@/assets/icons/status/INT.svg";
import src_DISP from "@/assets/icons/status/DISP.svg";
import src_STR from "@/assets/icons/status/STR.svg";
import src_CNST from "@/assets/icons/status/CNST.svg";
import src_FOCS from "@/assets/icons/status/FOCS.svg";
import src_ALL from "@/assets/icons/status/ALL3.svg";
import upgrade_icon from "@/assets/icons/status/upgrade.svg";
import StatusProperty from "./StatusProperty";

interface Status {
  _id: string;
  updatedOn: string; // You can change this to Date if you parse it later
  INTG: number;
  STRN: number;
  DISP: number;
  ALLR: number;
  FOCS: number;
  CNST: number;
  AP: number;
}

const   Skills = () => {
  const status: Status = {
    _id: "66f100d2f087ab3b87cfb38d",
    updatedOn: "2024-09-23T05:46:58.394Z",
    INTG: 0,
    STRN: 0,
    DISP: 0,
    ALLR: 0,
    FOCS: 2,
    CNST: 0,
    AP: 0,
  };
  return (
    <div className="flex flex-col py-2 px-4 border w-3/4 items-center">
      <div className="m-3 tracking-wider w-1/2 uppercase border text-center p-2 font-bold">
        Skills
      </div>
      
      <div className="grid grid-cols-2 gap-12">
        <StatusProperty src={src_INT} title={"INT"} value={status.INTG} />
        <StatusProperty src={src_DISP} title={"DISP"} value={status.DISP} />
        <StatusProperty src={src_STR} title={"STR"} value={status.STRN} />
        <StatusProperty src={src_ALL} title={"ALL"} value={status.ALLR} />
        <StatusProperty src={src_CNST} title={"CNST"} value={status.CNST} />
        <StatusProperty src={src_FOCS} title={"FOCS"} value={status.FOCS} />
      </div>

      <div className="flex flex-row gap-10">
        <button
          className="border p-2 mt-8 font-bold font-mono bg-white text-black"
        >
          <div className="flex flex-row  text-lg justify-center items-center gap-2">
            Use AP <img className="h-6 w-6" src={upgrade_icon} alt="Upgrade" />
          </div>
        </button>
      </div>

      {/* date element */}
      <span className="p-3 text-md rounded-lg shadow-md">
        Last Updated On:{" "}
        {new Date(status.updatedOn).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        at{" "}
        {new Date(status.updatedOn).toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </span>
    </div>
  );
};

export default Skills;
