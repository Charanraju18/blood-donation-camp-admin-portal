import Login from './Login';
import SelectOption from './SelectOption';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import StudentDonor from './StudentDonor';
import StaffDonor from './StaffDonor';
import OtherDonor from './OtherDonor';
import Volunteer from './Volunteer';
import GetImages from './GetImages';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/selectoptions/' element={<SelectOption />} />
          <Route path='/student/' element={<StudentDonor />} />
          <Route path='/staff/' element={<StaffDonor />} />
          <Route path='/management/' element={<OtherDonor />} />
          <Route path='/guest/' element={<OtherDonor />} />
          <Route path='/volunteer/' element={<Volunteer />} />
          <Route path='/getimages/' element={<GetImages />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
