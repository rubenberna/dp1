import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl';
import { Context as AuthContext } from '../../context/auth/auth.context';
import { useGetDataTools } from '../../hooks/dashboards/useGetDataTools';
import { CardDataTool } from './CardDataTool';
import { NothingToSeeCard } from './NothingToSeeCard';
import { colors } from '../../consts/home/card.consts';

export const Home = () => {
  const { state: { user: { account }} } = useContext(AuthContext)
  const { appsList } = useGetDataTools();

  const renderAppsList = () => {
    if (appsList) {
      return (
        <div className="home__dashboard">
          <h1 className="home__dashboard__title">
            <span className="home__dashboard__title--1"><FormattedMessage id="home.title_1"/>&nbsp;</span>
            <span className="home__dashboard__title--2"><FormattedMessage id="home.title_2"/></span>
          </h1>
          <div className="home__dashboard__app-gallery">
            { appsList.map((app, idx) => {
              const metadata = {
                title: app.title,
                description: app.description,
                slug: app.slug
              }
              return <CardDataTool key={app.slug} metadata={metadata} color={Object.values(colors)[idx]}/>
            })}
          </div>
        </div>

      )
    }
    return <NothingToSeeCard text={<FormattedMessage id="home.noApps"/>}/>
  }

  return (
    <div className="home">
      {
        account ?
          renderAppsList()
          :
          <NothingToSeeCard text={<FormattedMessage id="home.notLoggedIn"/>}/>
      }
    </div>
  )
}
