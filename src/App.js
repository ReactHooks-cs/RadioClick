import React, {useState, useEffect} from 'react'
import Radio from "./components/Radio"
import Table from "./components/Table"
import "h8k-components"

const title = "Birthday Records";
const people = [
  {
    name: "Rhianna Johnson",
    birth: "11/30/2011",
  },
  {
    name: "Aiden Shaw",
    birth: "09/16/1992",
  },
  {
    name: "Trevon Floyd",
    birth: "01/16/1992",
  },
  {
    name: "Melanie Yates",
    birth: "12/12/2001",
  },
  {
    name: "Chris Andrews",
    birth: "02/09/1891",
  },
  {
    name: "Jacinda Miller",
    birth: "12/01/1982",
  },
  {
    name: "Will Davis",
    birth: "11/30/2011",
  },
  {
    name: "Eliza Baxter",
    birth: "10/31/1999",
  },
];

function App() {
  const [list, setList] = useState('');
  // const [] = useState('name', 'birth');
  // const [value, setValue] = React.useState(false);

  const radioChange = (e) => {
    setList(e.target.dataset)
    console.log("Testing radio")
  };

  useEffect(() => {

    {[...people].sort((a,b) => a.name - b.name).map(names => {
      return (
        <div>
          {/* <Table people={people} /> */}
          <h2>{names.name}</h2>
        </div>
      )
    })}

    {[...people].sort((a,b) => a.birth - b.birth).map(births => {
      return (
        <div>
          {/* <Table people={people} /> */}
          <h2>{births.birth}</h2>
        </div>
      )
    })}






    // const sortItems = type => {
    //   const types = {
    //     name: 'name',
    //     birth: 'birth'
    //   };
    //   const sortType = types[type];
      // const sorted = [...people].sort((a, b) => {
      //   return a.name > b.name ? 1 : -1
      // })
        // if(a > b) return 1
        // if(b >a) return -1
      
    //     if(sortType === 'name'){
    //       return a.name.localeCompare(b.name);
    //     } else {
    //       return b[sortType] - a[sortType]
    //     }
    //   })
      // setList(sorted);
    // }
    // sortItems(sortType)
    // console.log(people)
  }, [])
    
  return (
    <div>
      <h8k-navbar header={title}>not coming through</h8k-navbar>
      {list}
      <Radio onChange={radioChange} />
      <Table people={people} />
    </div>
  )
}

export default App;
