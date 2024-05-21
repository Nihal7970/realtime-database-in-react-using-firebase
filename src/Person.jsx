import React, { useState } from 'react';

function Person() {
   const [people, setPeople] = useState({
      p1: { name: 'nihal', age: 90 },
      p2: { name: 'ghaynsam', age: 89 }
    });
    function update(key, newName) {
      setPeople(prevPeople => ({
        ...prevPeople,
        [key]: {
          ...prevPeople[key],
          name: newName
        }
      }));
    }

  return (
    <>
      <p>Hello</p>
      <p className='pp1'>Name: {people.p1.name}</p>
      <p>Age: {people.p1.age}</p>
      <br />
      <p className='pp2'>Name: {people.p2.name}</p>
      <p>Age: {people.p2.age}</p>
      <br />
      <button onClick={()=>update('p1','ram')} className='c1'>Update1</button>
      <button onClick={() => update('p2', 'krishna')} className='c2'>Update 2</button>
    </>
  );
}

export default Person;
