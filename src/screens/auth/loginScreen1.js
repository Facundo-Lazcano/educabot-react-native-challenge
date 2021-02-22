import React, { useState, useRef } from 'react'
import { Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import Logo from '../../components/Logo'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselItem, { ITEM_WIDTH, SLIDER_WIDTH } from '../../components/CarouselItem'
import { data } from '../../components/data'
import Formulario from '../../components/Formulario'

const { height } = Dimensions.get('window')

const LoginScreen1 = ({ navigation }) => {
  const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)

  const renderCarousel = () => {
    return (
      <ScrollView contentContainerStyle={{ justifyContent: 'center' }}>
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={CarouselItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView
          inactiveSlideOpacity={0.0}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots
        />
      </ScrollView>
    )
  }

  return (

    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <View style={{ marginRight: 16 }}>
          <Logo c1='#FF6428' c2='#FFB800' c3='#4F36D6' c4='#27A8FF' c5='#23202E' colorCirculo='#FFFFFF' />
        </View>
        <View>
          <Text style={styles.titulo}>Aula</Text>
          <Text style={styles.titulo}>En Casa</Text>
          <Text style={styles.titulo2}>Familias</Text>
        </View>
      </View>
      <View>
        <View>{renderCarousel()}</View>

        <View style={styles.fondoBlanco}>
          <Formulario
            boton='Continuar'
            onButtonPress={() => navigation.navigate('password')}
            label='Ingresá tu dni' secureTextEntry={false}
            textContentType='username'
          />
        </View>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: '#27A8FF',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  row: {
    marginTop: 48,
    marginLeft: 84,
    flexDirection: 'row'
  },
  titulo: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '700',
    color: '#ffffff',
    textTransform: 'uppercase'
  },
  titulo2: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 4,
    color: '#ffffff'
  },
  fondoBlanco: {
    backgroundColor: '#F8F8F6',
    alignItems: 'center',
    height: height * 0.25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  }
})

export default LoginScreen1
