import { useEffect, useState } from 'react';
import {
  DirectedGraph,
  GraphViewMode,
  emptyStage,
  registerVoteMachine,
} from 'components-directedgraph/index';
import { SingleChoice } from 'votemachines-singlevote-singlevotefe';
import { fakeVersion } from './mockData/fakeVersion';
import { Layout } from 'antd';

function App() {
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
    <>
      {isVoteMachineRegistered && (
        <Layout className='relative items-center w-full h-screen'>
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
    </>
  );
}

export default App;
