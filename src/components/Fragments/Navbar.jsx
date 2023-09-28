import { Link, useMatch, useParams, useResolvedPath } from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useContext } from 'react';
import { Context } from '../../context/myContext';

export default function Navbar({ mode }) {
  const { darkMode } = useContext(Context);

  return (
    <>
      {mode === 'desktop' ? (
        <nav>
          <ul className={`hidden font-bold md:flex gap-5 text-sm md:text-md -translate-x-3 2xl:text-lg ${!darkMode ? 'text-black' : null}`}>
            <CustomLink mode={mode} to="/" darkMode={darkMode}>
              Home
            </CustomLink>
            <CustomLink mode={mode} to="/top" darkMode={darkMode}>
              Top
            </CustomLink>
            <CustomLink mode={mode} to="/season" darkMode={darkMode}>
              season
            </CustomLink>
            <CustomLink mode={mode} to="/search" darkMode={darkMode}>
              search
            </CustomLink>
            <CustomLink mode={mode} to="/users" darkMode={darkMode}>
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
          <CustomLink to="/users">
            <PeopleAltIcon />
            <h3>Users</h3>
          </CustomLink>
        </ul>
      )}
    </>
  );
}

function CustomLink({ to, children, mode, darkMode, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  let classActive = `font-semibold px-3 py-1 rounded-sm bg-[var(--primary)] ${!darkMode ? 'text-white' : null}`;
  let classDefault = `px-3 py-1 rounded-sm`;
  let classActiveMobile = `p-3 rounded-md overflow-hidden bg-[var(--primary)] ${!darkMode ? 'text-white' : null}`;
  let classDefaultMobile = `p-3 rounded-md overflow-hidden`;
  return (
    <>
      {mode === 'desktop' ? (
        isActive ? (
          <li className={classActive}>
            <Link to={to} {...props}>
              {children}
            </Link>
          </li>
        ) : (
          <li className={classDefault}>
            <Link to={to} {...props}>
              {children}
            </Link>
          </li>
        )
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
