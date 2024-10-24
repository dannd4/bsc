export default function TodoFilter() {
  return (
    <section className="flex justify-center gap-5 rounded-md bg-white p-4">
      <button type="button" className={`font-bold text-slate-700 transition-all duration-700 hover:text-orange-600`}>
        All
      </button>
      <button type="button" className={`font-bold text-slate-700 transition-all duration-700 hover:text-orange-600`}>
        Active
      </button>
      <button type="button" className={`font-bold text-slate-700 transition-all duration-700 hover:text-orange-600`}>
        Completed
      </button>
    </section>
  );
}
