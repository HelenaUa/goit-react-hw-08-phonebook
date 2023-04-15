import { useAuth } from 'hooks/useAuth';
import { HeaderApp } from './AppBar.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderApp>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderApp>
  );
};