import { twMerge } from 'tailwind-merge';

function Button({ state = 'idle', onClick, children, ...props }) {
  // const baseStyles = '';
  const stateStyles = state == 'filled' ? 'bg-red-500'
    : state == 'disabled' ? 'bg-gray-400 text-gray-500'
    : 'bg-blue-500';

  return (
    <button onClick={onClick} className={twMerge('p-4 rounded-2xl text-white font-bold', stateStyles)} {...props}>
      {children}
    </button>
  )
}
export default Button