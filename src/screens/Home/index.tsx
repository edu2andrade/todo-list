import { View } from 'react-native';
import Logo from '../../../assets/Logo.svg';

import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  )
}