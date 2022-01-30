import Footer from '../components/Footer';
import MemberList from '../components/MemberList';
import Navbar from '../components/Navbar';
import { AdminPill } from '../components/Pill';
import { SeperatorDown } from '../components/seperators';

const Members = ({ editable = false }) => {
  return (
    <>
      <Navbar />
      <MemberList editable={editable} />
      <Footer Seperator={SeperatorDown} />
      {editable && <AdminPill />}
    </>
  );
};

export default Members;
