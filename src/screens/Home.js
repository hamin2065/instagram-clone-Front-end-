import { isLoggedInVar } from "../apollo";

function Home() {
  return (
    <div>
      <hi>Home</hi>
      <button onClick={() => isLoggedInVar(false)}>Log Out!</button>
    </div>
  );
}
export default Home;
