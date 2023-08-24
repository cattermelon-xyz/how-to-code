import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import WorkflowCard from 'components-cards-workflowcard/src/WorkflowCard';
import SingleVote from 'votemachines-singlevote-singlevotefe/src/SingleVote';
import DirectedGraph from 'components-directedgraph/src/DirectedGraph';

function App() {
  return (
    <div className='App'>
      <WorkflowCard
        img={{
          src: 'https://plus.unsplash.com/premium_photo-1690522531276-24c679f29b6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          alt: 'Sample Image',
        }}
        title='Hello world'
      >
        This is sample content inside the WorkflowCard.
      </WorkflowCard>
      <SingleVote />
      <DirectedGraph />
    </div>
  );
}

export default App;
