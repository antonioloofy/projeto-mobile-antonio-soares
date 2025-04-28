import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#00ced1', dark: '#353636' }}
      headerImage={
        <iframe src="https://assets.pinterest.com/ext/embed.html?id=1129840625268021321" height="552" width="236" frameborder="0" scrolling="no" ></iframe>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">referencias</ThemedText>
      </ThemedView>
      <ThemedText>obrigado pinterest e alura por contribuir para esse trabalho.</ThemedText>
      <Collapsible title="entrega">
        <ThemedText>
        na hora
          <ThemedText type="defaultSemiBold"></ThemedText> 
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
         <ThemedText type="defaultSemiBold"></ThemedText>{' '}
         
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="API LINK">
        <ThemedText>
         API, press{' '}
          <ThemedText type="entrega"></ThemedText> em cima da hora 
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
         e <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText> google e pinterest
        </ThemedText>
        <Image source={require('@/assets/images/exemple.jpg')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          
        </ExternalLink>
      </Collapsible>
      <Collapsible title="fontes de letra">
        <ThemedText>
           <ThemedText type="defaultSemiBold">nenhuma</ThemedText> 
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
         
        </ExternalLink>
      </Collapsible>
      <Collapsible title="documentação ">
        <ThemedText>
       react native 
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="tema">
        <ThemedText>
         desenho
          <ThemedText type="defaultSemiBold"></ThemedText> 
           <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#9400d3',
    bottom: -60,
    left: -15,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    
   
  },
  

});
