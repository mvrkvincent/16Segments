## 16|Segments: A Consumer Spending Visualization

### Overview

Each year, the United States Bureau of Labor and Statistics (BLS) publishes data from the Consumer Expenditure Survey (CE) covering a range of consumer expenses as well as household income. This data reflects the spending habbits of millions of Americans and can be used to guage the relative importance of various goods and services. 16Segments highlights the major segments of American spending with a special focus on specific demographics and metropolitain areas.  

### Functionality & MVP  
16|Segments users are able to:

- [ ] See a broad overview of major American expenses by major category
- [ ] Refine spending by age and income demographics
- [ ] Toggle data between major metropolitain statistical areas
- [ ] View expenses as list and chart 

In addition, this project contains:

- [ ] An informational modal describing the CE methodology with links to raw data
- [ ] A production README

### Data & APIs

CE Data is freely available through API and direct download (`.xlsx`) from the [BLS](https://www.bls.gov/cex/home.htm). This visualization uses locally stored data stored as `.csv`.

### Wireframe

This visualization consists of a single screen<sub>(a)</sub> containing a primary data list<sub>(b)</sub>, interactive graph<sub>(c)</sub>, a panel to refine data by region/demographic<sub>(d)</sub>, and links to the information modal, Github and LinkedIn<sub>(e)</sub>. Footer<sub>(f)</sub> includes copywright.

![16S_wireframe](https://github.com/mrkvncnt/Toast/blob/master/assets/16S_wireframe.jpg)


### Design

![16S_design](https://github.com/mrkvncnt/16Segments/blob/master/assets/16S.jpg)

### Architecture & Technologies

16Segments is built with:

- `JavaScript` for data retrieval and computation
- `D3.js` + `HTML5` + `SVG` + `CSS3` for interactive visualization
- `Webpack` + `Babel` to bundle js files.

In addition to the entry file:

- `parse.js` handles retrieval and computation of data
- `chart.js` handles the logic for rendering visualizations

### Bonus Features

The data set provided by CE is robust, future directions can include:

- [ ] View spending subsegment breakdowns (i.e. subcategories of consumer products)
- [ ] Allow users to import their own spending data and compare to national, local, and demographic averages
