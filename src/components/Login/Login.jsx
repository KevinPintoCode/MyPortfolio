import { signInWithGoogle, auth } from '../../firebase';

export default function Login() {
  return (
    <>
      <div className="dashboard">
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </>
  );
}
