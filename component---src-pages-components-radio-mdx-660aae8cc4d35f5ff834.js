(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{960:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return i})),n.d(a,"default",(function(){return b}));n(5),n(6),n(4),n(7),n(2),n(0);var t=n(120),o=n(940),l=n(941);var i={},r={_frontmatter:i},s=o.a;function b(e){var a=e.components,n=function(e,a){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(t.b)(s,Object.assign({},r,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("h2",null,"Introduction"),Object(t.b)("p",null,"The radio and radio group are used for selecting a single option from a list.\nIf you need to have an unselected state, just add a radio button with a None option.\nBegin labels with a capital letter."),Object(t.b)("p",null,"Evergreen exports two components to create radios and radio groups:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"Radio"),": Directly maps to a ",Object(t.b)("inlineCode",{parentName:"li"},"input")," element."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"RadioGroup"),": Helps manage a group of radios. Try this first.")),Object(t.b)("h1",null,"RadioGroup"),Object(t.b)("p",null,"The ",Object(t.b)("inlineCode",{parentName:"p"},"RadioGroup")," is the preferred way to create radio groups in most use cases."),Object(t.b)("h2",null,"Default size"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Component\n  initialState={{\n    options: [\n      { label: 'Read-only', value: 'read-only' },\n      { label: 'Write', value: 'write' },\n      { label: 'Restricted', value: 'restricted' }\n    ],\n    value: 'restricted'\n  }}\n>\n  {({ state, setState }) => (\n    <RadioGroup\n      label=\"Permissions\"\n      value={state.value}\n      options={state.options}\n      onChange={value => setState({ value })}\n    />\n  )}\n</Component>\n")),Object(t.b)("h2",null,"Bigger size"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Component\n  initialState={{\n    options: [\n      { label: 'Read-only', value: 'read-only' },\n      { label: 'Write', value: 'write' },\n      { label: 'Restricted', value: 'restricted' }\n    ],\n    value: 'restricted'\n  }}\n>\n  {({ state, setState }) => (\n    <RadioGroup\n      marginTop={40}\n      size={16}\n      label=\"Permissions\"\n      value={state.value}\n      options={state.options}\n      onChange={value => setState({ value })}\n    />\n  )}\n</Component>\n")),Object(t.b)(l.a,{of:"RadioGroup",mdxType:"PropsTable"}),Object(t.b)("h1",null,"Radio"),Object(t.b)("h2",null,"Radio states"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Pane aria-label="Radio Group Label 12" role="group">\n  <Radio checked name="group" label="Radio default" />\n  <Radio name="group" checked label="Radio checked" />\n  <Radio name="group" disabled label="Radio disabled" />\n  <Radio name="group" disabled label="Radio checked disabled" />\n</Pane>\n')),Object(t.b)("h2",null,"Radio states (bigger)"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Pane aria-label="Radio Group Label 16" role="group">\n  <Radio checked size={16} name="group2" label="Radio default" />\n  <Radio size={16} name="group2" checked label="Radio checked" />\n  <Radio size={16} name="group2" disabled label="Radio disabled" />\n  <Radio\n    size={16}\n    name="group2"\n    disabled\n    label="Radio checked disabled"\n  />\n</Pane>\n')),Object(t.b)(l.a,{of:"Radio",mdxType:"PropsTable"}))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-radio-mdx-660aae8cc4d35f5ff834.js.map