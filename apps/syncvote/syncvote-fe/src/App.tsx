import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import WorkflowCard from 'components-cards-workflowcard/src/WorkflowCard';
import SingleVote from 'votemachines-singlevote-singlevotefe/src/SingleVote';
import DirectedGraph from 'components-directedgraph/src/DirectedGraph';
import { Icon, TextEditor } from 'common/index';

function App() {
  const [avatarUrl, setAvatarUrl] = useState('preset:glasses_happy.svg');
  const [presetIcons, setpresetIcons] = useState([
    'angel.svg',
    'big_frown.svg',
    'blank.svg',
    'cat.svg',
    'cheeky.svg',
    'cry.svg',
    'dead_tongue.svg',
    'dribble.svg',
    'erm.svg',
    'excited.svg',
    'frazzled.svg',
    'frown_1.svg',
    'frown_2.svg',
    'frown_3.svg',
    'glasses_frown.svg',
    'glasses_happy.svg',
    'glasses_kiss.svg',
    'glasses_laugh.svg',
    'glasses_moustache.svg',
    'glasses_shocked.svg',
    'glasses_smile.svg',
    'glasses_smirk.svg',
    'glasses_tongue.svg',
    'glasses_unhappy.svg',
    'glasses_unsure.svg',
    'happy.svg',
    'happy_smile.svg',
    'heart.svg',
    'injured.svg',
    'kiss.svg',
    'lazy.svg',
    'love.svg',
    'money.svg',
    'moustache.svg',
    'moustache_content.svg',
    'moustache_happy.svg',
    'moustache_loved.svg',
    'moustache_shocked.svg',
    'nervous.svg',
    'normal.svg',
    'ok.svg',
    'sad.svg',
    'shame.svg',
    'shifty.svg',
    'shifty_moustache.svg',
    'shock.svg',
    'shocked.svg',
    'silent.svg',
    'smile.svg',
    'smirk.svg',
    'smooch.svg',
    'starstruck.svg',
    'tears.svg',
    'tongue.svg',
    'tongue_closed_eyes.svg',
    'tongue_open.svg',
    'unready.svg',
    'unsure.svg',
    'upset.svg',
    'what.svg',
    'wondering.svg',
  ]);

  return (
    <div className='App'>
      <WorkflowCard
        img={{
          src: 'https://plus.unsplash.com/premium_photo-1690522531276-24c679f29b6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
          alt: 'Sample Image',
        }}
        title='Hello world'
      >
        This is sample content inside the WorkflowCard.
      </WorkflowCard>
      {/* <SingleVote /> */}
      {/* <DirectedGraph /> */}
      <Icon presetIcon={presetIcons} iconUrl={avatarUrl} editable={true} />
      <TextEditor />
    </div>
  );
}

export default App;
