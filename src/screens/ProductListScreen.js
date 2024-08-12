import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>BIENVENIDOS AL CORTE INGLES</Text>
      </View>

      <View style={styles.productContainer}>
        <View style={styles.productCard}>
          <Text style={styles.productTitle}>Producto 1</Text>
          <Text>Camisa de verano - Marca: Zara - Precio: $50</Text>
        </View>
        <View style={styles.productCard}>
          <Text style={styles.productTitle}>Producto 2</Text>
          <Text>Pantalones de invierno - Marca: H&M - Precio: $80</Text>
        </View>
        <View style={styles.productCard}>
          <Text style={styles.productTitle}>Producto 3</Text>
          <Text>Abrigo de otoño - Marca: Uniqlo - Precio: $120</Text>
        </View>
        <View style={styles.productCard}>
          <Text style={styles.productTitle}>Producto 4</Text>
          <Text>Zapatillas deportivas - Marca: Nike - Precio: $90</Text>
        </View>
        <View style={styles.productCard}>
          <Text style={styles.productTitle}>Producto 5</Text>
          <Text>Sombrero de verano - Marca: Adidas - Precio: $25</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>Email: corteingles@hotmail.com</Text>
        <Text>Teléfono: +34 602 54 19 65</Text>
        <Text>Dirección: Calle LUIS PORTONES - España, Madrid</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    width: '80%',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    marginTop: 20,
  },
});

export default ProductListScreen;



