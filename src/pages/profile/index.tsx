import * as React from 'react'
import { Layout } from '../../components/organisms/Layout'
import { ProfileContent } from '../../components/organisms/ProfileContent'
import Seo from '../../components/seo'

const Profile = () => (
  <Layout>
    <Seo title="Profile" description="Profile" />
    <ProfileContent />
  </Layout>
)

export default Profile
