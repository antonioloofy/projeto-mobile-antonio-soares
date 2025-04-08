import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { red } from 'react-native-reanimated/lib/typescript/Colors';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A2CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/d-imagem.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">desenho e tipografia</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">estilos e traço</ThemedText>
        <ThemedText>
          relação <ThemedText type="defaultSemiBold">são muitos os estilos de desenho(realismo,cartoon,animação entre outros) 
            é importante consideralos para que possa-se desenvolver um estilo de traço coerente e consistente 
            além de atender as suas expectativas de arte finalização</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">tipografia e desing </ThemedText>
        <ThemedText>
          A tipografia nasceu da necessidade de reproduzir a escrita manual de forma mais eficiente, diferenciando-se da caligrafia por ser um processo de repetição em vez de uma criação individual. O termo “tipografia” vem do grego Týpos (impressão) e Graphía (escrita), remetendo à escrita impressa.

          O avanço decisivo ocorreu com os tipos móveis, que permitiram a organização de caracteres individuais em palavras, frases e parágrafos, possibilitando a impressão em grande escala. O primeiro grande livro tipográfico foi a Bíblia de Gutenberg, impressa por volta de 1450, revolucionando a produção de textos ao substituir o trabalho manual dos escribas.

          Os primeiros estilos tipográficos seguiram a escrita gótica, refletindo a caligrafia da época. No século XV, estudiosos e escritores migraram para um estilo mais leve, chamado lettera antica, que influenciaria os tipos humanistas. Com o tempo, surgiram variações como as letras itálicas, mais rápidas e econômicas.

          Durante o Renascimento, a tipografia começou a incorporar proporções humanas, como nos estudos de Geoffroy Tory. A inclusão das serifas proporcionou um acabamento diferenciado aos caracteres. Avanços como os tipos Transicionais, criados por Caslon e Baskerville, trouxeram variações de espessura nas letras.

          No século XIX, Bodoni e Didot enfatizaram contrastes marcantes entre traços finos e espessos, dando origem aos tipos Modernos. Paralelamente, a Revolução Industrial impulsionou a criação das fontes Display, usadas em anúncios por seu impacto visual exagerado.

          No século XX, houve uma reação contra esses excessos, promovendo uma busca por formas geométricas puras. Movimentos como os de Theo von Doesburg e Herbert Bayer criaram alfabetos simplificados. Paul Renner desenvolveu a tipografia Futura, baseada em formas geométricas perfeitas.

          Atualmente, a tipografia não depende mais de tipos móveis, mas sua evolução moldou os estilos usados na computação gráfica e na impressão moderna. Esse panorama nos prepara para uma análise mais profunda das propriedades e famílias tipográficas.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">criação e fundamentos</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
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
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '10%',
    bottom: 0,
    left: 0,
    position: 'absolute',
    
    
  },
});
