import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar({ mode }) {
  return (
    <>
      {mode === 'desktop' ? (
        <nav>
          <ul className="hidden md:flex gap-5 text-sm md:text-md -translate-x-3 2xl:text-lg">
            <CustomLink mode={mode} to="/">
              Home
            </CustomLink>
            <CustomLink mode={mode} to="/popular">
              popular
            </CustomLink>
            <CustomLink mode={mode} to="/comingSoon">
              coming Soon
            </CustomLink>
            <CustomLink mode={mode} to="/search">
              search
            </CustomLink>
          </ul>
        </nav>
      ) : (
        <ul className=" px-1 flex flex-col gap-3">
          <CustomLink to="/">
            <i className="fa fa-home text-xl" aria-hidden="true"></i>
            <h3>Home</h3>
          </CustomLink>
          <CustomLink to="/popular">
            <i className="fa fa-fire" aria-hidden="true"></i>
            <h3>popular</h3>
          </CustomLink>
          <CustomLink to="/comingSoon">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            <h3>Upcoming</h3>
          </CustomLink>
          <CustomLink to="/search">
            <i className="fa fa-search" aria-hidden="true"></i>
            <h3>search</h3>
          </CustomLink>
        </ul>
      )}
    </>
  );
}

function CustomLink({ to, children, mode, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  let classActive = 'bg-red-500 font-semibold px-3 py-1 rounded-sm';
  let classDefault = 'px-3 py-1 rounded-sm';

  let classActiveMobile = 'p-3 rounded-md overflow-hidden bg-red-600';
  let classDefaultMobile = 'p-3 rounded-md overflow-hidden';
  return (
    <>
      {mode === 'desktop' ? (
        <li className={isActive ? classActive : classDefault}>
          <Link to={to} {...props}>
            {children}
          </Link>
        </li>
      ) : (
        <li className={isActive ? classActiveMobile : classDefaultMobile}>
          <Link className="flex gap-5 items-center" to={to} {...props}>
            {children}
          </Link>
        </li>
      )}
    </>
  );
}
