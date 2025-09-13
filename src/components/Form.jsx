function Form({ onSubmit, legend, children }) {
  return (
    <form onSubmit={onSubmit} className='p-4 flex w-max-135 max-h-[592px] flex-col items-start gap-4 rounded-lg border border-gris-border bg-white shadow-lg'>
      {
        legend && <legend className='font-bold text-negro-principal'>{legend}</legend>
      }
      {children}
    </form>
  )
}
export default Form