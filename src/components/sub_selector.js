import React, { useState, useEffect } from 'react';
import { renderGraph } from '../graph/graph';
import { s2017, sIncome2017, metro2017, metroIncome2017 } from '../data/data';


export const SubDemoSelectors = props => {
  const [selectedSubDemo, setSelectedSubDemo] = useState();
  const [subDemoSelectors, setSubDemoSelectors] = useState();
  const dataSet = (props.demo === 'Metro Area' ? metro2017 : s2017);

  const generateSubDemoSelectors = (subDemoData) => {
    
    let selectors = [];
    let subDemos = subDemoData[0];
    let subDemoIncomes = subDemoData[1];
    for (let i = 0; i < subDemos.length; i++) {
      let subDemo = subDemos[i][0];
      let subDemoDataIndex = subDemos[i][1];
      let subDemoIncome = subDemoIncomes[i];
      selectors.push(<a key={i} onClick={() => selectData({subDemo, subDemoDataIndex, subDemoIncome})}>{subDemo}</a>);
    }
    setSelectedSubDemo('Demographic');
    return setSubDemoSelectors(selectors);
  };

  const generateSubDemoData = () => {
    const subSelectors = s2017.map((cat, i) => [cat[0], i]);
    const householdSize = [subSelectors.slice(2, 7), sIncome2017.slice(1, 6)];
    const ageGroup = [subSelectors.slice(7, 13), sIncome2017.slice(6, 12)];
    const incomeLevel = [subSelectors.slice(13, 21), sIncome2017.slice(12, 20)];
    const metroArea = [metro2017.map((cat, i) => [cat[0], i]).slice(1), metroIncome2017];

    if (props.demo === 'Age Group') {
      generateSubDemoSelectors(ageGroup);

    } else if (props.demo === 'Household Size') {
      generateSubDemoSelectors(householdSize);

    } else if (props.demo === 'Income Level') {
      generateSubDemoSelectors(incomeLevel);

    } else if (props.demo === 'Metro Area') {
      generateSubDemoSelectors(metroArea);

    } else if (props.demo === 'National Average') {
      document.getElementById("graph").innerHTML = 1;
      renderGraph();
    }

  };

  const selectData = ({ subDemo, subDemoDataIndex, subDemoIncome }) => {
    setSelectedSubDemo(subDemo)
    document.getElementById("graph").innerHTML = subDemoDataIndex;
    renderGraph({ dataSet, subDemoDataIndex, subDemoIncome});
  };


  useEffect(() => {
    generateSubDemoData();
  }, [props.demo]);

  return(
    <div id="subSelector" class="data-selector">
      <button id="sub" class="select">
        {(props.demo === 'National Average') ? '' : `${selectedSubDemo} ⌄` }
      </button>
      <div id="opt2" class="sub-opt">
        {subDemoSelectors}
      </div>
    </div>
  )
};






