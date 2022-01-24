import { StyleSheet, SafeAreaView, Dimensions } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function App() {
  const width = Dimensions.get("window").width;
  const ANCHO_IMAGEN = width;
  const ALTO_IMAGEN = width;

  const escalaImg = useSharedValue(1);
  const focoX = useSharedValue(0);
  const focoY = useSharedValue(0);

  const pinchazoPantalla = Gesture.Pinch()
    .onStart((e) => {
      focoX.value = e.focalX;
      focoY.value = e.focalY;
    })
    .onUpdate((e) => {
      escalaImg.value = e.scale;
    })
    .onEnd(() => {
      escalaImg.value = withTiming(1, { duration: 500 });
    });

  const centroImagen = {
    x: ANCHO_IMAGEN / 2,
    y: ALTO_IMAGEN / 2,
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    img: {
      width: ANCHO_IMAGEN,
      height: ALTO_IMAGEN,
    },
  });

  const estiloAnimado = useAnimatedStyle(() => ({
    transform: [
      { translateX: focoX.value },
      { translateY: focoY.value },
      { translateX: -centroImagen.x },
      { translateY: -centroImagen.y },
      { scale: escalaImg.value },
      { translateX: -focoX.value },
      { translateY: -focoY.value },
      { translateX: centroImagen.x },
      { translateY: centroImagen.y },
    ],
  }));

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView>
        <GestureDetector gesture={pinchazoPantalla}>
          <Animated.Image
            style={[styles.img, estiloAnimado]}
            source={{
              uri: "https://images.unsplash.com/photo-1642880384912-2cd8371979b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
            }}
          />
        </GestureDetector>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
