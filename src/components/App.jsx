import { Profile } from '../components/Profile/Profile'
import userData from '../data/user.json';

export const App = () => {
  return (
   
    <div>
          <Profile props={userData} />
  </div>

    
  );
};
