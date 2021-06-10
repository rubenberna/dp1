import React, { Suspense, useContext, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl'
import { PrivateRoute } from './generic/PrivateRoute';
import { Context as AuthContext } from '../context/auth/auth.context';
import { Context as LocaleContext } from '../context/locale/locale.context';
import { useGetDataTools } from '../hooks/dashboards/useGetDataTools';
import { Home } from './home/Home';
import { SideNav } from './navbars/SideNav';
import { TopNavbar } from './navbars/TopNavbar';
import language_en from '../lang/en.json'
import language_nl from '../lang/nl.json'
import '../styles/main.scss'


const App = () => {
  const { login, setLoading } = useContext(AuthContext)
  const { state: { locale } } = useContext(LocaleContext)
  const { appsList } = useGetDataTools();

  const languages = {
    en: language_en,
    nl: language_nl
  }

  useEffect(() => {
    (async () => {
      setLoading(true)
      await login()
      setLoading(false)
    })()
  }, [])


  return (
    <BrowserRouter>
      <IntlProvider locale={locale} messages={languages[locale]}>
        <TopNavbar/>
        <SideNav/>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <main>
              <Route exact path="/" component={Home}/>
              { appsList?.map(app => (
                <PrivateRoute
                  path={app.slug}
                  exact
                  key={app.slug}
                  component={app.component}
                />
              ))}
            </main>
          </Suspense>
        </Switch>
      </IntlProvider>
    </BrowserRouter>
  )
}

export default App

