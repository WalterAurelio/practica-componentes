import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import { useAuthProvider } from '../store/AuthStore';

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

function Button_3({ state, onClick, children, ...props }) {
  const { auth } = useAuthProvider();

  return (
    <button onClick={onClick} className={twMerge(variants({ state }), clsx({
      'text-red-500': !auth,
      'text-white': auth
    }))} {...props}>
      {children}
    </button>
  )
}
export default Button_3