import { View, Text, StyleSheet } from 'react-native';

export default function CompanyTitle() {
  return (
      <Text style={styles.companyTitle}>
        SketcHome
      </Text>
  );
}

const styles = StyleSheet.create({
  companyTitle:{
    fontWeight: 'bold',
    fontSize: 50,
    color: '#003049',
    padding: 10,
    margin: 10
}
});