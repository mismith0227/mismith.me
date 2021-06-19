import * as React from 'react'
import { Layout } from '../../components/organisms/Layout'
import { ProfileContent } from '../../components/organisms/ProfileContent'
import Seo from '../../components/seo'

const Profile = () => {
  const meta = {
    title: 'Profile',
    description: 'プロフィールページ',
    path: 'profile',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} />
      <ProfileContent />
    </Layout>
  )
}

export default Profile
