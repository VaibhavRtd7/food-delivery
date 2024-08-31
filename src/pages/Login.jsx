import { Link } from "react-router-dom";

const Login = () => {

  return (

    <div className='max-w-2xl max-md:mx-10 my-10 px-3 py-5  bg-neutral-100 mx-auto rounded-md border border-neutral-200 shadow-lg'>
    <h1 className="text-center text-4xl my-2">Login</h1>
    <form
      className="flex flex-col  justify-center"
    >
      <input
        required
        type="text"
        placeholder="Username or Email"
        name="email"
        className="w-full px-3 py-1 my-3 rounded-md outline-none transition-all border dark:border-neutral-700 border-neutral-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-200"
      />
      <input
        required
        type="password"
        placeholder="Password"
        name="password"
        className="w-full px-3 py-1 my-3 rounded-md outline-none transition-all border dark:border-neutral-700 border-neutral-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-200"
      />

      <button
        type="submit"
        className="w-full px-3 py-1 my-3 text-neutral-200 rounded-md bg-violet-600 hover:bg-violet-500 transition-all duration-300"
      >
        Submit
      </button>
      <p className="text-sm">
        Do not have an account?{" "}
        <Link to={"/signup"} className="underline text-violet-400">
          SignUp
        </Link>
      </p>
    </form>
    </div>
  );
};

export default Login
