import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const rootEl = document.getElementById('root');
ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	rootEl
);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', () => {
		// tslint:disable-next-line:no-require-imports
		const NextApp = require<RequireImport>('./App').default;
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>
			,
			rootEl
		);
	});
}