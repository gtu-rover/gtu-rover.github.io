import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'rebass';
import {
  addNewMember,
  deleteMember,
  fetchMembers,
  setMember,
  sortMembers
} from './utils';

import { useSnackbar } from 'react-simple-snackbar';
import { Input } from '@rebass/forms';

const Member = ({ data, editable, dbPath }) => {
  const { t } = useTranslation();
  const dirty = useRef(false);
  const pre = t(data.pre) + ' ';
  const [value, setValue] = useState(data.name);
  const [hide, setHide] = useState(false);

  return editable ? (
    !hide && (
      <Input
        style={{ width: 300, margin: 'auto' }}
        defaultValue={value}
        onChange={(e) => {
          if (value !== e.target.value) {
            dirty.current = true;
          }
          setValue(e.target.value);
        }}
        onBlur={() => {
          if (dirty.current) {
            console.log({ ...data, name: value });
            if (value === '') {
              deleteMember(data.id, dbPath);
              setHide(true);
              return;
            }
            setMember({ ...data, name: value }, dbPath);
          }
        }}
      />
    )
  ) : (
    <h3>
      {pre} {data.name}
    </h3>
  );
};

const MemberList = ({ editable = false, dbPath = 'members' }) => {
  const { t } = useTranslation();
  const [members, setMembers] = useState([]);
  const [openSnackbar, closeSnackbar] = useSnackbar();

  useEffect(() => {
    const getData = async () => {
      const membersFromDb = await fetchMembers(dbPath);
      setMembers(membersFromDb);
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
                  <Member data={member} editable={editable} dbPath={dbPath} />
                ))}
                {editable && (
                  <Button
                    sx={{ bg: '#07c' }}
                    onClick={() => {
                      openSnackbar('Adding...');
                      addNewMember(
                        {
                          team: team,
                          name: ' '
                        },
                        dbPath
                      ).then((m) => {
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
