import React from 'react'
import { View } from 'react-native'

const Logo = ({ colorCirculo, c1, c2, c3, c4, c5 }) => {
  return (
    <View>
      <View style={{ height: 80, width: 80, borderRadius: 50, backgroundColor: `${colorCirculo}` }}>
        <View>
          <View style={{ position: 'absolute', height: 12, width: 12, transform: [{ rotate: '45deg' }], backgroundColor: `${c1}`, top: 39.97, left: 16.49 }} />
          <View style={{ position: 'absolute', height: 12, width: 12, transform: [{ rotate: '45deg' }], backgroundColor: `${c2}`, top: 31.48, left: 24.97 }} />
          <View style={{ position: 'absolute', height: 12, width: 12, transform: [{ rotate: '45deg' }], backgroundColor: `${c3}`, top: 23, left: 33.46 }} />
          <View style={{ position: 'absolute', height: 12, width: 12, transform: [{ rotate: '45deg' }], backgroundColor: `${c4}`, top: 31.48, left: 41.94 }} />
          <View style={{ position: 'absolute', height: 12, width: 12, transform: [{ rotate: '45deg' }], backgroundColor: `${c5}`, top: 39.97, left: 50.43 }} />
        </View>
      </View>
    </View>
  )
}

export default Logo
