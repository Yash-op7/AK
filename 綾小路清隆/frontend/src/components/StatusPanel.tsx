import Skills from "./Skills";

const StatusPanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 p-3  w-11/12 border ">

      <div className="flex flex-col py-2 px-4  justify-center items-center">
        <div className="m-3 tracking-wider w-1/2 uppercase border text-center p-2 font-bold">
          Status
        </div>
        <div className="m-4">level, job, title</div>
        <div className="p-4 m-4 border flex flex-row justify-between gap-5">
          <div>hp bar</div>
          <div>mp bar</div>
          <div>fatigue pie chart</div>
        </div>
      </div>

      <div className="flex flex-col gap-5  p-3 justify-center items-center">
        <Skills />
      </div>
    </div>
  );
};

export default StatusPanel;
