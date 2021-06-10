import React, { lazy, useContext } from 'react';
import { Context as AuthContext } from '../../context/auth/auth.context';
import { Context as LocaleContext } from '../../context/locale/locale.context';
import { metadata as templateMetadata } from 'vfs-data-tool-template'
import { metadata as dacMetadata } from 'vfs-dac-interface'
import { convertToKebabCase } from '../../utils/general/_general.util';
import 'vfs-data-tool-template/dist/index.css'
import 'vfs-dac-interface/dist/index.css'

const DataToolTemplate = lazy(() => import('vfs-data-tool-template'))
const DACInterface = lazy(() => import('vfs-dac-interface'))

export const useGetDataTools = () => {
  const { state: { user: { idToken } } } = useContext(AuthContext)
  const { state: { locale }, setLocale } = useContext(LocaleContext)

  const dataToolState = {
    locale,
    changeLocale: setLocale,
    idToken
  }

  const listOfLibraries = [templateMetadata, dacMetadata]

  const DASHBOARDS = (name) => ({
    APP_1: <DataToolTemplate state={dataToolState} />,
    APP_2: <DACInterface state={dataToolState} />
  })[name]

  const appsList = listOfLibraries.map((dashboard, index) => ({
    title: dashboard.title,
    description: dashboard.description,
    icon: dashboard.icon,
    slug: `/${convertToKebabCase(dashboard.title)}`,
    component: DASHBOARDS([`APP_${index + 1 }`])
  }));

  return { appsList  }
}