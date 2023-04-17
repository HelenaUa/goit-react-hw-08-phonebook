import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
      <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <p style={{ fontWeight: '700' }}>Welcome, {user.name}</p>
          <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
      </div>
  );
};