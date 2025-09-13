import Button from './components/Button'
import Button_2 from './components/Button_2'
import Button_3 from './components/Button_3';
import Button_4 from './components/Button_4';
import Form from './components/Form';
import H2 from './components/H2';
import Input from './components/Input';
import InputTruthyFalsy from './components/InputTruthyFalsy';
import { useAuthProvider } from './store/AuthStore';

function App() {
  const { auth, setAuth } = useAuthProvider();
  const camposLlenos = false;

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log('Formulario enviado.')
  }

  return (
    <div>
      <H2>Reintegros</H2>
      <Form onSubmit={handleSubmit} legend={'Datos de factura'}>
        <InputTruthyFalsy required placeholder='Ingresar nombre de usuario' label={'Nombre de usuario:'} type={'text'} />
        <InputTruthyFalsy required placeholder='Ingresa contraseña' label={'Contraseña:'} type={'password'} />
        <InputTruthyFalsy required placeholder='Ingresar CBU' label={'Nro. CBU:'} />
        <Button_2 state={camposLlenos ? 'active' : 'disabled'} disabled={ camposLlenos ? 'active' : 'disabled' } type={'submit'}>Confirmar solicitud</Button_2>
      </Form>
      {/* <Input hasLabel={true} />
      <br />
      <br />
      <Input hasLabel={true} label='Nombre de usuario:' hasError={true} errorMsg={'La contraseña ingresada es incorrecta.'} />
      <br />
      <br />
      <InputTruthyFalsy type='text' placeholder={'Contraseña'} label={'Contraseña:'} errorMsg={'Error desconocido 500'} />
      <InputTruthyFalsy type='password' placeholder={'Contraseña'} label={'Contraseña:'} errorMsg={'Error desconocido 500'} /> */}
    </div>
  )
}
export default App