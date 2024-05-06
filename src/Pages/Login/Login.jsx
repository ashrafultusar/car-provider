import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import axios from 'axios';

const Login = () => {

  const { signIn } = useContext(AuthContext);
  const location=useLocation()
const Navigate=useNavigate()

    const handelLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

      
      signIn(email, password)
        .then(result => {
          const LoggedInUser = result.user;
          console.log(LoggedInUser)
          const user={email}
          // get token
          axios.post('http://localhost:5000/jwt', user, {
            withCredentials: true
          })
            .then(res => {
              console.log(res.data)
              if (res.data.success) {
                Navigate(location?.state ? location.state : '/')

              }
          })
        })
      .catch(error=>console.log(error))
}


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-12">
                      <img src={img} alt="" />
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <h1 className="text-5xl font-bold text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email" name='email'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password" name='password'
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
             
                <input
                  className="btn w-full bg-[#FF3811]"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className='text-center pt-2'>New to Car Doctor <Link className='text-orange-500 font-semibold' to={'/signup'}>Sign Up</Link></p>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
