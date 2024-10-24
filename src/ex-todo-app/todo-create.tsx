export default function TodoCreate() {
  return (
    <div className="flex items-center bg-white rounded-full">
      <input
        className="bg-transparent text-slate-700 border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        type="text"
        placeholder="Add your task"
      />
      <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-bold cursor-pointer">
        ADD +
      </button>
    </div>
  );
}
