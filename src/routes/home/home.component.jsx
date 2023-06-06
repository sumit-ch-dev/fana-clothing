import { Outlet } from "react-router-dom";
import CategoryMenu from "../../components/category-menu/category-menu.component";


function Home() {
  return (
    <div className="App">
      
      <CategoryMenu />
      <Outlet />
    </div>
  );
}

export default Home;
