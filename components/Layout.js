import { Outlet, Link } from "react-router-dom";

const Links = () =>[
  {
name: "Display",
href:  "/display",
  },

  {
    name: "Views",
    href:  "/views",
      },

      {
        name: "Search",
        href:  "/search",
          },

]


const Layout = () =>{
  return <div>

{Links.map(x =>(


        <Link to={x.href}>{x.name}</Link>


))} 

<>

<h1>Pastel de papa</h1>




    </>

  </div>;

  <Outlet />

}
  export default Layout;