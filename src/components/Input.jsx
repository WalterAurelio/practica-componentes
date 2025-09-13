function Input({ hasLabel, hasError, label='Label:', errorMsg='Error desconocido', ...props }) {
  return (
    <div className='flex w-full flex-col items-start gap-2'>
      {
        hasLabel && <label className='text-negro-principal font-bold'>{label}</label>
      }
      <input className='flex min-w-40 min-h-[43px] py-3 pr-3 pl-4 items-center self-stretch rounded-lg border border-gris-border bg-white outline-none' {...props} />
      {
        hasError && <p className='text-crimson-red text-sm font-medium'>{errorMsg}</p>
      }
    </div>
  )
}
export default Input