import { Partytown } from '@builder.io/partytown/react'
import React from 'react'

function PartytownApp() {
  return <Partytown debug forward={['fibonacci']} />
}

export { PartytownApp as Partytown }
