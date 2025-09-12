import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge';

const variants = cva([
  'p-4',
  'rounded-2xl',
  'text-white',
  'font-bold'
], {
  variants: {
    state: {
      idle: ['bg-blue-500'],
      filled: ['bg-red-500'],
      disabled: ['bg-gray-400 text-gray-500']
    }
  },
  defaultVariants: {
    state: 'idle'
  }
});

function Button_2({ state, onClick, children, ...props }) {
  return (
    <button onClick={onClick} className={twMerge(variants({ state }))} {...props}>
      {children}
    </button>
  )
}
export default Button_2