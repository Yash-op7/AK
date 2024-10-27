const StatusProperty = ({ src, title, value }) => {
  return (
    <div
      id="status_properties"
      className="flex flex-col border border-gray-500 p-4 text-center"
    >
      <div className="p-2 flex flex-row justify-around items-center gap-4">
        <div>
        <img className="h-12 w-12" src={src} alt={title} />
        </div>
        <div>
          <span className="font-sans text-base" style={{ fontFamily: "Arial" }}>
            {title}
          </span>
        </div>
        <div>
          <span className="text-4xl">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default StatusProperty;
