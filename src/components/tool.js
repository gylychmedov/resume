const Tool = (props) => {
  return (
    <div className="w-full flex justify-between items-center relative">
      <img
        alt={props.name}
        src={props.img}
        className={`w-20 h-20 object-cover border-gray-100 border-4 rounded-full absolute transform hover:scale-125 duration-700  -left-5 scale-110`}
      />
      <aside
        className={`bg-white flex flex-col dark:bg-gray-800 p-5 rounded-lg shadow-lg`}
      >
        <span className="pl-16 text-black font-semibold text-md dark:text-white">
          {props.name}
        </span>

        <span className="pl-16 text-gray-500 font-light text-sm dark:text-white">
          {props.for}
        </span>
      </aside>
    </div>
  );
};

export default Tool;
