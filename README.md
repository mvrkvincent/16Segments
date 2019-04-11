## Toast: A Consumer Spending Visualization

### Overview

Each year, the United States Bureau of Labor and Statistics (BLS) publishes data from the Consumer Expenditure Survey (CE) covering a range of consumer expenses as well as household income. This data reflects the spending habbits of millions of Americans and can be used to guage the relative importance of various goods and services. Toast highlights the major segments of American spending with a special focus on specific demographics and metropolitain areas.  

### Functionality & MVP  
Toast usurs will be able to:

- [ ] See a broad overview of major American expenses by major category
- [ ] Refine spending by age and income demographics
- [ ] Toggle data between major metropolitain statistical areas
- [ ] View expenses as list and chart 

In addition, this project will include:

- [ ] An informational modal describing the CE methodology with links to raw data
- [ ] A production README

### Wireframes

This visualization consists of a single screen<sub>(a)</sub> containing a primary data list<sub>(b)</sub>, interactive graph<sub>(c)</sub>, a panel to refine data by region/demographic<sub>(d)</sub>, and links to the information modal, Github and LinkedIn<sub>(e)</sub>. Footer<sub>(f)</sub> includes copywright.

![toast_wireframe](https://github.com/mrkvncnt/Toast/blob/master/toast_wireframe.jpg)

### Architecture and Technologies

Toast is built with:

- `JavaScript` for data retrieval and computation
- `D3.js` + `HTML5` + `SVG` + `CSS` for interactive visualization
- `Webpack` + `Babel` to bundle js files.

In addition to the entry file:

- `data.js` will handle retrieval and computation of data
- `chart.js` will handle the logic for rendering visualizations


### Implementation Timeline

**Day 1**: Setup modules, `Webpack`, and `D3.js`. Export CE data from BLS as `.xlsx`

TODO: 
- Format `.xlsx` data and convert to `.csv`
- Create skeleton for necessary js components.

**Day 2**: Review `D3.js` documentation and select appropriate chart type. Begin work on data retrieval tool.

TODO: 
- Build `data.js`
- Make successful data requests to `.csv`

**Day 3**: Build out `chart.js`

TODO:
- Create chart using overview data
- Implement functionality for data refinement based on demographics and metropolitain area


**Day 4**: Build out UI

TODO: 
- Create toggle links for data refinement
- Build modal for additional information


### Bonus features

The data set provided by CE is robust, future directions can include:

- [ ] View spending subsegment breakdowns (i.e. subcategories of consumer products)
- [ ] Allow users to import their own spending data and compare to national, local, and demographic averages
