import React from 'react';
import AllList from './components/TodoList/TodoList';

export default function AppAllList() {
    return (
      <>
      <AllList text={Shopping}/>
      <AllList text={Studying} />
      </>
    );
}

