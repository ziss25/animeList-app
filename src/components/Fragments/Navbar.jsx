import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export default function Navbar({ mode }) {
  return (
    <>
      {mode === 'desktop' ? (
        <nav>
          <ul className="hidden md:flex gap-5 text-sm md:text-md -translate-x-3 2xl:text-lg">
            <CustomLink mode={mode} to="/">
              Home
            </CustomLink>
            <CustomLink mode={mode} to="/top">
              Top
            </CustomLink>
            <CustomLink mode={mode} to="/season">
              season
            </CustomLink>
            <CustomLink mode={mode} to="/search">
              search
            </CustomLink>
            <CustomLink mode={mode} to="/userlist">
              users
            </CustomLink>
          </ul>
        </nav>
      ) : (
        <ul className=" px-1 flex flex-col gap-3">
          <CustomLink to="/">
            <i className="fa fa-home text-xl" aria-hidden="true"></i>
            <h3>Home</h3>
          </CustomLink>
          <CustomLink to="/top">
            <i className="fa fa-fire" aria-hidden="true"></i>
            <h3>Top</h3>
          </CustomLink>
          <CustomLink to="/season">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            <h3>season</h3>
          </CustomLink>
          <CustomLink to="/search">
            <i className="fa fa-search" aria-hidden="true"></i>
            <h3>search</h3>
          </CustomLink>
          <CustomLink to="/userlist">
            <PeopleAltIcon />
            <h3>Users</h3>
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
