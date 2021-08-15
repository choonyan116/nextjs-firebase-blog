import { signOut } from '@lib/firebase';
import { useAuth } from '@contexts/auth';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  const [user] = useAuth();

  return (
    <div className={styles.Layout}>
      <nav>
        <span>
          <a href="/">CupidGo</a>
        </span>
        <span>
            <a href="/create">Create</a>
          </span>
        {user && (
          <span>
            <button onClick={() => signOut()}>Sign Out</button>
          </span>
        )}
        {!user &&(
          <span>
            <a href="/signin">Login</a>
          </span>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
  }

export default Layout;
