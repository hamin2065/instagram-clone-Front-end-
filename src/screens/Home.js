import { logUserOut } from "../apollo";

function Home() {
  return (
    <div>
      <hi>Home</hi>
      <button onClick={() => logUserOut()}>Log Out!</button>
    </div>
  );
}
export default Home;
