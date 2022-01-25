import { useRef, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { useTranslation } from 'react-i18next';

const Member = ({ value, editable, pre = false }) => {
  const [dirty, setDirty] = useState(false);
  const text = useRef('');
  text.current = value;

  return (
    <h3>
      {pre}
      <ContentEditable
        html={text.current}
        style={{ display: 'inline' }}
        disabled={!editable}
        onChange={(e) => {
          text.current = e.target.value;
          setDirty(true);
        }}
        onBlur={() => {
          if (dirty) {
            console.log(text.current);
            // TODO: set on db
          }
        }}
      />
    </h3>
  );
};

const MemberList = ({ members, editable = false }) => {
  const { t } = useTranslation();

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
        <div class="text-center " style={{ marginTop: 40 }}>
          <h1
            class="text-center font-windlesham"
            style={{ marginBottom: 20, fontWeight: 900 }}
          >
            {t('team advisor')}
          </h1>
          <h3>
            {}
            <Member
              pre={t('assistant professor') + ' '}
              value={members.advisor}
              editable={editable}
            />
          </h3>
        </div>

        {members.teams.map((team) => {
          const teamKey = Object.keys(team)[0];
          const members = team[teamKey];
          return (
            <div
              class="container text-center"
              style={{ marginTop: 40, marginBottom: 40 }}
            >
              <h1
                style={{ marginBottom: 20 }}
                class="text-center font-windlesham"
              >
                {t(`${teamKey} team`)}
              </h1>
              <div class="text-center">
                {members.map((member) => (
                  <Member value={member} editable={editable} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MemberList;
