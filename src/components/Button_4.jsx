function Button_4({ style='fill' , state='active' ,onClick, children }) {
  const activeStyles = 'bg-menta-600 text-white hover:bg-menta-200';
  const disabledStyles = 'bg-gris-placeholder text-gris-border';
  const outlineStyles = 'bg-transparent border border-gris-placeholder text-negro-principal hover:border-menta-200 hover:text-menta-200';

  const states = state == 'disabled' ? disabledStyles : activeStyles;

  const styles = style == 'outline' ? outlineStyles : activeStyles;

  return (
    <button className={`flex w-full lg:w-fit min-h-13 px-4 py-3 justify-center items-center rounded-lg text-base font-semibold ${styles} ${states}`} onClick={onClick} >
      {children}
    </button>
  )
}
export default Button_4