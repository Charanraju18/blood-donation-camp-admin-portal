import Login from './Login';
import SelectOption from './SelectOption';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import StudentDonor from './StudentDonor';
import StaffDonor from './StaffDonor';
import OtherDonor from './OtherDonor';
import Volunteer from './Volunteer';
import GetImages from './GetImages';
import ChangeVolunteers from './Volunteers/ChangeVolunteers';
import AddVolunteers from './Volunteers/AddVolunteers';
import EditVolunteers from './Volunteers/EditVolunteers';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          {/* <Route path='/volunteer/' element={<Volunteer />} /> */}
          <Route path='/getimages/' element={<GetImages />} />
          <Route path='/change_volunteer/' element={<ChangeVolunteers/>}/>
          <Route path='/add_volunteer/' element={<AddVolunteers />} />
          <Route path='/update_volunteer/' element={<EditVolunteers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
