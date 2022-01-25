import Footer from '../components/Footer';
import MemberList from '../components/MemberList';
import Navbar from '../components/Navbar';
import { AdminPill } from '../components/Pill';
import { SeperatorDown } from '../components/seperators';

const members = {
  advisor: 'Recep Önler',
  teams: [
    {
      electronics: [
        'Alpcan Soydaş',
        'Yusuf Günan',
        'Jwan Hussain',
        'Muhammed Cemal Eryiğit',
        'Alperen Ürey',
        'Muhammet Fatih Keskin',
        'Alperen Karataş'
      ]
    },
    {
      software: [
        'Fatih Kaan Salgır',
        'Ömer Faruk Sayar',
        'Halil İbrahim İlhan',
        'Ozan Yıldız'
      ]
    },
    {
      mechanical: ['Yunus Emre Eyüboğlu', 'Bilal Akdağ', 'Emre Şentürk']
    },
    {
      science: [
        'Buse Aktürk',
        'Reyhan Bolat',
        'Zenne Merdan Tutar',
        'Atahan Evcen',
        'Eyüp Tunahan Ünal',
        'Asuman Sare Ergut',
        'Toprak Alp'
      ]
    },
    {
      sponsorship: [
        'Ruken Yaşlı',
        'Emir Topaç',
        'Mehmet Berkay Avcı',
        'İrem Dinç',
        'Mehmet Köse'
      ]
    }
  ]
};

const Members = ({ editable = false }) => (
  <>
    <Navbar />
    <MemberList members={members} editable={editable} />
    <Footer Seperator={SeperatorDown} />
    {editable && <AdminPill />}
  </>
);

export default Members;
