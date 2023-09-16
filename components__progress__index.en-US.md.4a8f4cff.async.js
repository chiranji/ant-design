"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1199],{911265:function(p,s,n){n.r(s);var m=n(502143),u=n(968521),_=n(720719),h=n(521587),g=n(759907),t=n(828089),x=n(825673),j=n(902068),v=n(574399),b=n(863942),P=n(316073),f=n(24628),y=n(719260),k=n(956140),i=n(127179),d=n(905388),w=n(245583),E=n(606965),D=n(268696),A=n(587302),c=n(424128),C=n(249706),M=n(795127),O=n(116846),T=n(720538),L=n(212039),R=n(73024),I=n(553913),o=n(830084),z=n(667294),e=n(785893);function a(){var l=(0,o.eL)(),r=l.texts;return(0,e.jsx)(o.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:r[0].value}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsxs)("p",{children:[r[1].value,(0,e.jsx)("code",{children:r[2].value}),r[3].value]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:r[4].value}),(0,e.jsx)("li",{children:r[5].value})]}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(d.Z,{items:[{demo:{id:"progress-demo-line"},previewerProps:{title:"Progress bar",filename:"components/progress/demo/line.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6","@types/jsdom":"^21.1.2",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Progress } from 'antd';
const App = () => (
  <>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </>
);
export default App;
`,description:"<p>A standard progress bar.</p>"}},{demo:{id:"progress-demo-circle"},previewerProps:{title:"Circular progress bar",filename:"components/progress/demo/circle.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6","@types/jsdom":"^21.1.2",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Progress, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </Space>
);
export default App;
`,description:"<p>A circular progress bar.</p>"}},{demo:{id:"progress-demo-line-mini"},previewerProps:{title:"Mini size progress bar",filename:"components/progress/demo/line-mini.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6","@types/jsdom":"^21.1.2",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Progress } from 'antd';
const App = () => (
  <div
    style={{
      width: 170,
    }}
  >
    <Progress percent={30} size="small" />
    <Progress percent={50} size="small" status="active" />
    <Progress percent={70} size="small" status="exception" />
    <Progress percent={100} size="small" />
  </div>
);
export default App;
`,description:"<p>Appropriate for a narrow area.</p>"}},{demo:{id:"progress-demo-circle-micro"},previewerProps:{title:"Responsive circular progress bar",filename:"components/progress/demo/circle-micro.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6","@types/jsdom":"^21.1.2",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Progress } from 'antd';
const App = () => (
  <>
    <Progress
      type="circle"
      trailColor="#e6f4ff"
      percent={60}
      strokeWidth={20}
      size={14}
      format={(number) => \`\u8FDB\u884C\u4E2D\uFF0C\u5DF2\u5B8C\u6210\${number}%\`}
    />
    <span
      style={{
        marginLeft: 8,
      }}
    >
      \u4EE3\u7801\u53D1\u5E03
    </span>
  </>
);
export default App;
`,description:"<p>Responsive circular progress bar. When <code>width</code> is smaller than 20, progress information will be displayed in Tooltip.</p>"}},{demo:{id:"progress-demo-circle-mini"},previewerProps:{title:"Mini size circular progress bar",filename:"components/progress/demo/circle-mini.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6","@types/jsdom":"^21.1.2",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Progress, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Progress type="circle" percent={30} size={80} />
    <Progress type="circle" percent={70} size={80} status="exception" />
    <Progress type="circle" percent={100} size={80} />
  </Space>
);
export default App;
`,description:"<p>A smaller circular progress bar.</p>"}},{demo:{id:"progress-demo-dynamic"},previewerProps:{title:"Dynamic",filename:"components/progress/demo/dynamic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6","@types/jsdom":"^21.1.2",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd';
const App = () => {
  const [percent, setPercent] = useState(0);
  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };
  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };
  return (
    <>
      <div
        style={{
          marginBottom: 10,
        }}
      >
        <Progress percent={percent} />
        <Progress type="circle" percent={percent} />
      </div>
      <Button.Group>
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group>
    </>
  );
};
export default App;
`,description:"<p>A dynamic progress bar is better.</p>"}},{demo:{id:"progress-demo-format"},previewerProps:{title:"Custom text format",filename:"components/progress/demo/format.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6","@types/jsdom":"^21.1.2",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Progress, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Progress type="circle" percent={75} format={(percent) => \`\${percent} Days\`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </Space>
);
export default App;
`,description:"<p>You can set a custom text by setting the <code>format</code> prop.</p>"}},{demo:{id:"progress-demo-dashboard"},previewerProps:{title:"Dashboard",filename:"components/progress/demo/dashboard.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6","@types/jsdom":"^21.1.2",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Progress, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Progress type="dashboard" percent={75} />
    <Progress type="dashboard" percent={75} gapDegree={30} />
  </Space>
);
export default App;
`,description:"<p>By setting <code>type=dashboard</code>, you can get a dashboard style of progress easily. Modify <code>gapDegree</code> to set the degree of gap.</p>"}},{demo:{id:"progress-demo-segment"},previewerProps:{title:"Progress bar with success segment",filename:"components/progress/demo/segment.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6","@types/jsdom":"^21.1.2",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Progress, Tooltip, Space } from 'antd';
const App = () => (
  <>
    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress
        percent={60}
        success={{
          percent: 30,
        }}
      />
    </Tooltip>
    <Space wrap>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress
          percent={60}
          success={{
            percent: 30,
          }}
          type="circle"
        />
      </Tooltip>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress
          percent={60}
          success={{
            percent: 30,
          }}
          type="dashboard"
        />
      </Tooltip>
    </Space>
  </>
);
export default App;
`,description:"<p>Show several parts of progress with different status.</p>"}},{demo:{id:"progress-demo-linecap"},previewerProps:{title:"Stroke Linecap",filename:"components/progress/demo/linecap.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6","@types/jsdom":"^21.1.2",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Progress, Space } from 'antd';
const App = () => (
  <>
    <Progress strokeLinecap="butt" percent={75} />
    <Space wrap>
      <Progress strokeLinecap="butt" type="circle" percent={75} />
      <Progress strokeLinecap="butt" type="dashboard" percent={75} />
    </Space>
  </>
);
export default App;
`,description:'<p>By setting <code>strokeLinecap="butt"</code>, you can change the linecaps from <code>round</code> to <code>butt</code>, see <a href="https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap">stroke-linecap</a> for more information.</p>'}},{demo:{id:"progress-demo-gradient-line"},previewerProps:{title:"Custom line gradient",filename:"components/progress/demo/gradient-line.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6","@types/jsdom":"^21.1.2",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Progress, Space } from 'antd';
const twoColors = {
  '0%': '#108ee9',
  '100%': '#87d068',
};
const conicColors = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ffccc7',
};
const App = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: 16,
    }}
  >
    <Progress percent={99.9} strokeColor={twoColors} />
    <Progress
      percent={99.9}
      status="active"
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
    />
    <Space wrap>
      <Progress type="circle" percent={90} strokeColor={twoColors} />
      <Progress type="circle" percent={100} strokeColor={twoColors} />
      <Progress type="circle" percent={93} strokeColor={conicColors} />
    </Space>
    <Space wrap>
      <Progress type="dashboard" percent={90} strokeColor={twoColors} />
      <Progress type="dashboard" percent={100} strokeColor={twoColors} />
      <Progress type="dashboard" percent={93} strokeColor={conicColors} />
    </Space>
  </div>
);
export default App;
`,description:"<p>Gradient encapsulation, <code>circle</code> and <code>dashboard</code> will ignore <code>strokeLinecap</code> when setting gradient.</p>"}},{demo:{id:"progress-demo-steps"},previewerProps:{title:"Progress bar with steps",filename:"components/progress/demo/steps.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6","@types/jsdom":"^21.1.2",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { red, green } from '@ant-design/colors';
import { Progress } from 'antd';
const App = () => (
  <>
    <Progress percent={50} steps={3} />
    <br />
    <Progress percent={30} steps={5} />
    <br />
    <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
    <br />
    <Progress percent={60} steps={5} strokeColor={[green[6], green[6], red[5]]} />
  </>
);
export default App;
`,description:"<p>A progress bar with steps.</p>"}},{demo:{id:"progress-demo-size"},previewerProps:{title:"Progress size",filename:"components/progress/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.15.6","@types/jsdom":"^21.1.2",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.16.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.0","rc-image":"~7.2.0","rc-input":"~1.1.1","rc-input-number":"~8.0.4","rc-mentions":"~2.7.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.8.1","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.0","rc-tabs":"~12.12.1","rc-textarea":"~1.3.4","rc-tooltip":"~6.0.1","rc-tree":"~5.7.10","rc-tree-select":"~5.12.1","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Progress, Space } from 'antd';
const App = () => (
  <>
    <Space direction="vertical">
      <Progress percent={50} />
      <Progress percent={50} size="small" />
      <Progress percent={50} size={[300, 20]} />
    </Space>
    <br />
    <br />
    <Space size={30}>
      <Progress type="circle" percent={50} />
      <Progress type="circle" percent={50} size="small" />
      <Progress type="circle" percent={50} size={20} />
    </Space>
    <br />
    <br />
    <Space size={30}>
      <Progress type="dashboard" percent={50} />
      <Progress type="dashboard" percent={50} size="small" />
      <Progress type="dashboard" percent={50} size={20} />
    </Space>
    <br />
    <br />
    <Space size={30} wrap>
      <Progress steps={3} percent={50} />
      <Progress steps={3} percent={50} size="small" />
      <Progress steps={3} percent={50} size={20} />
      <Progress steps={3} percent={50} size={[20, 30]} />
    </Space>
  </>
);
export default App;
`,description:"<p>The size of progress.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[r[6].value,(0,e.jsx)(c.Z,{to:"/docs/react/common-props",sourceType:"Link",children:r[7].value})]}),(0,e.jsx)("p",{children:r[8].value}),(0,e.jsxs)(t.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[9].value}),(0,e.jsx)("th",{children:r[10].value}),(0,e.jsx)("th",{children:r[11].value}),(0,e.jsx)("th",{children:r[12].value}),(0,e.jsx)("th",{children:r[13].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[14].value}),(0,e.jsx)("td",{children:r[15].value}),(0,e.jsx)("td",{children:r[16].value}),(0,e.jsxs)("td",{children:[r[17].value,(0,e.jsx)("code",{children:r[18].value})]}),(0,e.jsx)("td",{children:r[19].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[20].value}),(0,e.jsx)("td",{children:r[21].value}),(0,e.jsx)("td",{children:r[22].value}),(0,e.jsx)("td",{children:r[23].value}),(0,e.jsx)("td",{children:r[24].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[25].value}),(0,e.jsx)("td",{children:r[26].value}),(0,e.jsx)("td",{children:r[27].value}),(0,e.jsx)("td",{children:r[28].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[29].value}),(0,e.jsxs)("td",{children:[r[30].value,(0,e.jsx)("code",{children:r[31].value}),r[32].value,(0,e.jsx)("code",{children:r[33].value}),r[34].value,(0,e.jsx)("code",{children:r[35].value}),r[36].value,(0,e.jsx)("code",{children:r[37].value}),r[38].value]}),(0,e.jsx)("td",{children:r[39].value}),(0,e.jsx)("td",{children:r[40].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[41].value}),(0,e.jsx)("td",{children:r[42].value}),(0,e.jsx)("td",{children:r[43].value}),(0,e.jsx)("td",{children:r[44].value}),(0,e.jsx)("td",{children:r[45].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[46].value}),(0,e.jsx)("td",{children:r[47].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:r[48].value}),r[49].value,(0,e.jsx)("code",{children:r[50].value}),r[51].value,(0,e.jsx)("code",{children:r[52].value}),r[53].value,(0,e.jsx)(c.Z,{href:"https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap",sourceType:"a",children:r[54].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[55].value})}),(0,e.jsx)("td",{children:r[56].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[57].value}),(0,e.jsx)("td",{children:r[58].value}),(0,e.jsx)("td",{children:r[59].value}),(0,e.jsx)("td",{children:r[60].value}),(0,e.jsx)("td",{children:r[61].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[62].value}),(0,e.jsx)("td",{children:r[63].value}),(0,e.jsx)("td",{children:r[64].value}),(0,e.jsx)("td",{children:r[65].value}),(0,e.jsx)("td",{children:r[66].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[67].value}),(0,e.jsxs)("td",{children:[r[68].value,(0,e.jsx)("code",{children:r[69].value}),r[70].value,(0,e.jsx)("code",{children:r[71].value}),r[72].value,(0,e.jsx)("code",{children:r[73].value})]}),(0,e.jsx)("td",{children:r[74].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[75].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[76].value}),(0,e.jsx)("td",{children:r[77].value}),(0,e.jsx)("td",{children:r[78].value}),(0,e.jsx)("td",{children:r[79].value}),(0,e.jsx)("td",{children:r[80].value})]})]})]}),(0,e.jsxs)("h3",{id:"typeline",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#typeline",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),(0,e.jsx)("code",{children:r[81].value})]}),(0,e.jsxs)(t.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[82].value}),(0,e.jsx)("th",{children:r[83].value}),(0,e.jsx)("th",{children:r[84].value}),(0,e.jsx)("th",{children:r[85].value}),(0,e.jsx)("th",{children:r[86].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[87].value}),(0,e.jsx)("td",{children:r[88].value}),(0,e.jsx)("td",{children:r[89].value}),(0,e.jsx)("td",{children:r[90].value}),(0,e.jsx)("td",{children:r[91].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[92].value}),(0,e.jsxs)("td",{children:[r[93].value,(0,e.jsx)("code",{children:r[94].value}),r[95].value,(0,e.jsx)("code",{children:r[96].value}),r[97].value,(0,e.jsx)("code",{children:r[98].value}),r[99].value]}),(0,e.jsx)("td",{children:r[100].value}),(0,e.jsx)("td",{children:r[101].value}),(0,e.jsxs)("td",{children:[r[102].value,(0,e.jsx)("code",{children:r[103].value})]})]})]})]}),(0,e.jsxs)("h3",{id:"typecircle",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#typecircle",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),(0,e.jsx)("code",{children:r[104].value})]}),(0,e.jsxs)(t.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[105].value}),(0,e.jsx)("th",{children:r[106].value}),(0,e.jsx)("th",{children:r[107].value}),(0,e.jsx)("th",{children:r[108].value}),(0,e.jsx)("th",{children:r[109].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[110].value}),(0,e.jsx)("td",{children:r[111].value}),(0,e.jsx)("td",{children:r[112].value}),(0,e.jsx)("td",{children:r[113].value}),(0,e.jsx)("td",{children:r[114].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[115].value}),(0,e.jsx)("td",{children:r[116].value}),(0,e.jsx)("td",{children:r[117].value}),(0,e.jsx)("td",{children:r[118].value}),(0,e.jsx)("td",{children:r[119].value})]})]})]}),(0,e.jsxs)("h3",{id:"typedashboard",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#typedashboard",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),(0,e.jsx)("code",{children:r[120].value})]}),(0,e.jsxs)(t.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[121].value}),(0,e.jsx)("th",{children:r[122].value}),(0,e.jsx)("th",{children:r[123].value}),(0,e.jsx)("th",{children:r[124].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[125].value}),(0,e.jsx)("td",{children:r[126].value}),(0,e.jsx)("td",{children:r[127].value}),(0,e.jsx)("td",{children:r[128].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[129].value}),(0,e.jsxs)("td",{children:[r[130].value,(0,e.jsx)("code",{children:r[131].value}),r[132].value,(0,e.jsx)("code",{children:r[133].value}),r[134].value,(0,e.jsx)("code",{children:r[135].value}),r[136].value,(0,e.jsx)("code",{children:r[137].value})]}),(0,e.jsx)("td",{children:r[138].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[139].value})})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[140].value}),(0,e.jsx)("td",{children:r[141].value}),(0,e.jsx)("td",{children:r[142].value}),(0,e.jsx)("td",{children:r[143].value})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(i.Z,{component:"Progress"})]})})}s.default=a}}]);
