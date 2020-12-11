import { NavLink } from "react-router-dom";
/* import { SocialIcon } from "react-social-icons"; */

export default function NavBar() {
  return (
    <header className="bg-gray-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inline-flex items-center py-6 px-3 mr-4 rounded-md text-gray-300 hover:text-white text-4xl font-bold cursive tracking-widest"
            activeClassName="text-white"
          >
            Gaylon
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            activeClassName="bg-gray-900 text-white"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            activeClassName="bg-gray-900 text-white"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            activeClassName="bg-gray-900 text-white"
          >
            About me!
          </NavLink>
        </nav>
        {/* <div className="inline-flex py-3 px-3 my-6"> */}
        {/*   <SocialIcon */}
        {/*     url="https://twitter.com/gaylonalfano" */}
        {/*     className="mr-4" */}
        {/*     target="_blank" */}
        {/*     fgColor="#fff" */}
        {/*     style={{ height: 35, width: 35 }} */}
        {/*   /> */}
        {/* </div> */}
      </div>
    </header>
  );
}
