import { useEffect, useRef, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { useTranslation } from 'react-i18next';
import { Button } from 'rebass';
import { addNewMember, fetchMembers, setMember, sortMembers } from './utils';

import { useSnackbar } from 'react-simple-snackbar';

const Member = ({ data, editable }) => {
  const { t } = useTranslation();
  const dirty = useRef(false);
  const pre = t(data.pre) + ' ';
  const text = useRef('');
  text.current = data.name;

  return (
    <h3>
      {pre}{' '}
      <ContentEditable
        html={text.current}
        style={{ display: 'inline' }}
        disabled={!editable}
        onChange={(e) => {
          if (text.current !== e.target.value) {
            dirty.current = true;
          }
          text.current = e.target.value;
        }}
        onBlur={() => {
          if (dirty.current) {
            console.log({ ...data, name: text.current });
            setMember({ ...data, name: text.current });
          }
        }}
      />
    </h3>
  );
};

const MemberList = ({ editable = false }) => {
  const { t } = useTranslation();
  const [members, setMembers] = useState([]);
  const [openSnackbar, closeSnackbar] = useSnackbar();

  useEffect(() => {
    const getData = async () => {
      const membersFromDb = await fetchMembers();
      setMembers(membersFromDb.filter((m) => m.name !== ''));
    };
    getData();
  }, []);

  const groupedMembers = [];
  for (const m of members) {
    const group = m.team;
    if (!groupedMembers[group]) {
      groupedMembers[group] = [];
    }
    groupedMembers[group].push(m);
  }

  const sortedMembers = sortMembers(groupedMembers);

  return (
    <section
      id="fifth-div"
      class="jumbotron jumbotron-fluid align-content-center"
      style={{ marginBottom: 0 }}
    >
      <div class="container">
        <h1
          class="text-center display-4 font-windlesham"
          style={{ marginTop: 70 }}
        >
          {t('members')}
        </h1>
        {Object.keys(sortedMembers)?.map((team) => {
          const teamMembers = sortedMembers[team];
          return (
            <div
              class="container text-center"
              style={{ marginTop: 40, marginBottom: 40 }}
            >
              <h1
                style={{ marginBottom: 20 }}
                class="text-center font-windlesham"
              >
                {t(`${team} team`)}
              </h1>
              <div class="text-center">
                {teamMembers?.map((member) => (
                  <Member data={member} editable={editable} />
                ))}
                {editable && (
                  <Button
                    sx={{ bg: '#07c' }}
                    onClick={() => {
                      openSnackbar('Adding...');
                      addNewMember({
                        team: team,
                        name: '&nbsp;&nbsp;&nbsp;'
                      }).then((m) => {
                        setMembers([...members, m]);
                        closeSnackbar();
                      });
                    }}
                  >
                    + Add
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MemberList;
