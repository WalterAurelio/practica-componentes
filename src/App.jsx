import Button from './components/Button'
import Button_2 from './components/Button_2'
import Button_3 from './components/Button_3';
import { useAuthProvider } from './store/AuthStore';

function App() {
  const { auth } = useAuthProvider();

  return (
    <div>
      <Button id='mi-boton'>Botón Uno</Button>
      <br />
      <br />
      <Button_2 state={ auth ? 'idle' : 'disabled' } >Botón Dos</Button_2>
      <br />
      <br />
      <Button_3>Botón Tres</Button_3>
    </div>
  )
}
export default App