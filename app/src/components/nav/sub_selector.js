import React, { useState, useEffect } from 'react';
import { renderGraph } from '../graph/render_graph';
import { s2017, sIncome2017, metro2017, metroIncome2017 } from '../../data/data';


export const SubDemoSelectors = props => {
  const [subDemoSelectors, setSubDemoSelectors] = useState();
  const dataSet = (props.demo === 'Metro Area') ? metro2017 : s2017;
  const [demoData, setDemoData] = useState({
    subDemo: null,
    dataIndex: 1,
    income: sIncome2017[0]
  });

  const setSubDemo = (subDemo, dataIndex, income) => {
    setDemoData({
      subDemo: subDemo,
      dataIndex: dataIndex,
      income: income
    });
  };

  const generateSubDemoSelectors = (subDemoData) => {
    let selectors = [];
    let subDemos = subDemoData[0];
    let incomes = subDemoData[1];
    for (let i = 0; i < subDemos.length; i++) {
      let subDemo = subDemos[i][0];
      let dataIndex = subDemos[i][1];
      let income = incomes[i];
      selectors.push(<a key={i} onClick={() => setSubDemo(subDemo, dataIndex, income)}>{subDemo}</a>);
    }
    setDemoData({
      ...demoData,
      subDemo: 'Demographic'
    });
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
    }
  };

  useEffect(() => {
    generateSubDemoData();
  }, [props.demo]);

  useEffect(() => {
    debugger
    props.setDataIndex(demoData.dataIndex);
    renderGraph(dataSet, demoData.income);
  }, [demoData]);

  return(
    <div id="subSelector" class="data-selector">
      <button id="sub" class="select">
        {demoData.subDemo}
      </button>
      <div id="opt2" class="sub-opt">
        {subDemoSelectors}
      </div>
    </div>
  )
};






