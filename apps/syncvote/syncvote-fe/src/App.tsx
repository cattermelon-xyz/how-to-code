import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import WorkflowCard from 'components-cards-workflowcard/src/WorkflowCard';
import {
  DirectedGraph,
  GraphViewMode,
  emptyStage,
  registerVoteMachine,
} from 'components-directedgraph/index';
import { Icon, TextEditor } from 'common/index';
import { SingleChoice } from 'votemachines-singlevote-singlevotefe';
import { fakeVersion } from './fakeVersion';
import { Layout } from 'antd';

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

  const [shouldDownloadImage, setShouldDownloadImage] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState('');
  const [dataHasChanged, setDataHasChanged] = useState(false);
  const [version, setVersion] = useState<any>(fakeVersion);
  const [centerPos, setCenterPos] = useState({ x: 0, y: 0 });
  const [isVoteMachineRegistered, setIsVoteMachineRegistered] = useState(false);

  useEffect(() => {
    registerVoteMachine(SingleChoice);
    setIsVoteMachineRegistered(true);
  }, []);

  return (
    <div className='App'>
      {/* <WorkflowCard
        img={{
          src: 'https://plus.unsplash.com/premium_photo-1690522531276-24c679f29b6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
          alt: 'Sample Image',
        }}
        title='Hello world'
      >
        This is sample content inside the WorkflowCard.
      </WorkflowCard> */}
      {/* <Icon presetIcon={presetIcons} iconUrl={avatarUrl} editable={true} /> */}
      {/* <TextEditor /> */}
      {isVoteMachineRegistered && (
        <Layout className='relative flex items-center'>
          <DirectedGraph
            viewMode={GraphViewMode.VIEW_ONLY}
            shouldExportImage={shouldDownloadImage}
            setExportImage={setShouldDownloadImage}
            data={version?.data || emptyStage}
            selectedNodeId={selectedNodeId}
            selectedLayoutId={
              version?.data?.cosmetic?.defaultLayout?.horizontal
            }
            onChange={(newData) => {}}
            onChangeLayout={(newData) => {}}
            onDeleteNode={(nodeId) => {}}
            onConfigEdgePanelClose={() => {}}
            onConfigPanelClose={() => setSelectedNodeId('')}
            onNodeChanged={(changedNodes) => {
              const newData = structuredClone(version?.data);
              newData?.checkpoints?.forEach((v: any, index: number) => {
                const changedNode = changedNodes.find(
                  (cN: any) => cN.id === v.id
                );
                if (changedNode && changedNode.position) {
                  newData.checkpoints[index].position = changedNode.position;
                }
              });
              setVersion({
                ...version,
                data: newData,
              });
              if (selectedNodeId) {
                setDataHasChanged(true);
              }
            }}
            onNodeClick={(_event, node) => {
              setSelectedNodeId(node.id);
            }}
            onPaneClick={() => {
              setSelectedNodeId('');
            }}
            onResetPosition={() => {}}
            onAddNewNode={() => {}}
            onViewPortChange={(viewport) => {
              setCenterPos({
                x: (-viewport.x + 600) / viewport.zoom,
                y: (-viewport.y + 250) / viewport.zoom,
              });
            }}
          />
        </Layout>
      )}
    </div>
  );
}

export default App;
