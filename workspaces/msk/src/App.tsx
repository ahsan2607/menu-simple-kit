// import { Suspense } from 'react';
// import { useRoutes } from 'react-router-dom';
// import routes from '~react-pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { navContent } from './contents/route';

type Routes = {
	path: string;
	element: JSX.Element;
};

const routes = navContent.map((navContent) => {
	const route: Routes = {
		path: navContent.link,
		element: navContent.el,
	};

	return route;
});
const router = createBrowserRouter(routes);

export default function App() {
	// return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
	return <RouterProvider router={router} />;
}
