import { useAuth } from 'hooks/useAuth';
import { Nav } from './Navigation.styled';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Nav to="/">Home</Nav>
      {isLoggedIn && <Nav to="/contacts">Contacts</Nav>}
    </div>
  );
};