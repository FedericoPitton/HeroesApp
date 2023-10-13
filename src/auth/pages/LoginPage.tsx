import { useContext, } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext,  } from '../context';
import  { useState } from 'react';

export const LoginPage = () => {
  const [name, setName] = useState('');
  const { login }: any = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login(name);
    navigate(lastPath, {
      replace: true,
    });
  };

  const isNameValid = name.trim() !== ''; 

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Ingrese su Nombre</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Nombre Usuario"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>
      <hr />
      <button
        onClick={onLogin}
        className='btn btn-primary'
        disabled={!isNameValid}
      >
        Login
      </button>
    </div>
  );
};
