import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const CategoryPage = lazy(() => import('../pages/category/page'));
const PostPage = lazy(() => import('../pages/post/page'));
const TagPage = lazy(() => import('../pages/tag/page'));
const GuidesPage = lazy(() => import('../pages/guides/page'));
const GlossaryPage = lazy(() => import('../pages/glossary/page'));
const ToolsPage = lazy(() => import('../pages/tools/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const ResponsibleGamblingPage = lazy(() => import('../pages/responsible-gambling/page'));
const EditorialPolicyPage = lazy(() => import('../pages/editorial-policy/page'));
const PrivacyPolicyPage = lazy(() => import('../pages/privacy-policy/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/category/:slug',
    element: <CategoryPage />,
  },
  {
    path: '/post/:slug',
    element: <PostPage />,
  },
  {
    path: '/tag/:slug',
    element: <TagPage />,
  },
  {
    path: '/guides',
    element: <GuidesPage />,
  },
  {
    path: '/glossary',
    element: <GlossaryPage />,
  },
  {
    path: '/tools',
    element: <ToolsPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/responsible-gambling',
    element: <ResponsibleGamblingPage />,
  },
  {
    path: '/editorial-policy',
    element: <EditorialPolicyPage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
