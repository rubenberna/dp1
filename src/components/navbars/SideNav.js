import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context as AuthContext } from '../../context/auth/auth.context';
import { useGetDataTools } from '../../hooks/dashboards/useGetDataTools';

export const SideNav = () => {
  const { appsList } = useGetDataTools()
  const { state: { user: { account }}} = useContext(AuthContext)

  return (
    <div className="sidenav">
      <Link to="/">
        <h3 className="sidenav__title">Volvo</h3>
      </Link>
      <h4 className="sidenav__sub-title">Financial Services</h4>
      { account && appsList?.map(dataTool => {
        const Icon = dataTool.icon
        return (
          <div key={dataTool.slug} className="sidenav__icon">
            <Link to={dataTool.slug}>
              <Icon/>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
