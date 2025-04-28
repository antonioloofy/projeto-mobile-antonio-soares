import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { red } from 'react-native-reanimated/lib/typescript/Colors';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#8a2be2', dark: '#5F3C3C' }}
      headerImage={
        <Image
          source={require('@/assets/images/exemple.jpg')}
          style={styles.reactLogo}
        />
      }>
        
        <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">desenho e tipografia</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">realismo estilizado</ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold">
            aqui temos um exemplo de um realismo não tão classico mas com somente linhas é possivel chegar na mesma intenção de se reconhecer o objeto de desenho. 
           <iframe src="https://assets.pinterest.com/ext/embed.html?id=1129840625258725086" height="336" width="236" frameborder="0" scrolling="no" ></iframe>
            
           <iframe src="https://assets.pinterest.com/ext/embed.html?id=1129840625258556676" height="443" width="236" frameborder="0" scrolling="no" ></iframe>
           <iframe src="https://assets.pinterest.com/ext/embed.html?id=1129840625258556690" height="397" width="236" frameborder="0" scrolling="no" ></iframe>
            </ThemedText> 
          
          <ThemedText type="defaultSemiBold">
           
            </ThemedText>{' '}
                
                </ThemedText>
              </ThemedView>
              <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">desenho estilo cartoon </ThemedText>
                <ThemedText>
                  aqui temos um estilo de desenho mais limpo e cartoonizado é uma marca super interessante para jogos de rpg.

                  <iframe src="https://assets.pinterest.com/ext/embed.html?id=1129840625258556706" height="333" width="236" frameborder="0" scrolling="no" ></iframe>
                  <iframe src="https://assets.pinterest.com/ext/embed.html?id=1129840625258556648" height="443" width="236" frameborder="0" scrolling="no" ></iframe>
                 <iframe src="https://assets.pinterest.com/ext/embed.html?id=1129840625258556700" height="395" width="236" frameborder="0" scrolling="no" ></iframe>

                </ThemedText>
              </ThemedView>
              <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">simbolos </ThemedText>
                <ThemedText>
 aqui é possível a implementação de uma arquitetura nos desenhos e promover uma assinatura única.
  <iframe src="https://assets.pinterest.com/ext/embed.html?id=1129840625258557289" height="440" width="236" frameborder="0" scrolling="no" ></iframe>




                </ThemedText>
              </ThemedView>
            </ParallaxScrollView>
          );
        }


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
    
  },
  stepContainer: {
    backgroundColor: '#00ced1',
    gap: 8,
    marginBottom: 8,
    borderRadius:18,
  
    
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
    
    
  },
  ParallaxScrollView: {
    backgroundColor: '#00ced1',
  },
 


});
  