import React from 'react';
import Button from './components/ui/Button';
import StudentList from './components/StudentList';


function App() {
const studentList = [
  {id:'1', name:'syrttan'},
  {id:'2', name:'aidana'},
  {id:'3', name:'beks'},
  {id:'4', name:'nurs'},
]

  return (
    <div>
      <StudentList students={studentList}/>
      <Button>delete todo</Button>
      <Button>add todo</Button>
      <Button>check todo</Button>
    </div>
  );
}

export default App;
