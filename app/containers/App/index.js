import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import CodeEditor from '../../components/Editor/CodeEditor';

import withClearCache from "./ClearCache";

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function MainApp() {
  const intl = useIntl();
  console.log(intl.formatMessage({ id: 'test' }));
  console.log(intl.formatMessage({ id: 'other' }, { these: 'A' }));

  return (
      <CodeEditor />
  );
}

const ClearCacheComponent = withClearCache(MainApp);

function App() {
  return <ClearCacheComponent />;
}

export default App;
