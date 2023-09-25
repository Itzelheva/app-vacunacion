import { Text, View } from 'react-native';
import { Header } from '../../components';

const Details = ({route}) => {

  const vaccine = route.params.vaccine;

  return (
    <View style={styles.container}>
      <Header title="Detalle" />
      <Text>{vaccine.title}</Text>
      <Text>{vaccine.description}</Text>
    </View>
  );

}

export default Details;