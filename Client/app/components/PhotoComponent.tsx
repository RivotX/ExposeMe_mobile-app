import { BlurView } from "@react-native-community/blur";
import { View } from "react-native-animatable";
import tw from "twrnc";
import { Image, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useGameContext } from "../providers/GameContext";

function PhotoComponent({ photoUrl, isInGame = false, elementRef }: { photoUrl: string; isInGame?: boolean; elementRef: React.RefObject<View> }) {
  const { socket } = useGameContext();

  useEffect(() => {
    console.log("PhotoComponent mounted");
    return () => {
      console.log("PhotoComponent unmounted");
    };
  }, []);

  const holdButton = (mode: string) => {
    if (socket) {
      socket.emit(mode);
    }
  };

  const handlePressIn = () => {
    if (isInGame && elementRef.current) {
      elementRef.current.setNativeProps({ style: { opacity: 0 } });
      holdButton("button-pressed");
    }
  };

  const handlePressOut = () => {
    if (isInGame && elementRef.current) {
      elementRef.current.setNativeProps({ style: { opacity: 1 } });
      holdButton("button-released");
    }
  };

  return (
    <>
      <View style={tw`absolute w-full h-full`}>
        <Image source={{ uri: photoUrl }} style={tw`w-full h-full`} resizeMode="cover" />
        <BlurView style={tw`absolute w-full h-full`} blurType="dark" blurAmount={50} reducedTransparencyFallbackColor="black" />
      </View>
      <View style={tw`flex-1 justify-center items-center`}>
        <TouchableOpacity
          style={tw`w-full h-full`}
          activeOpacity={0.9}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Image source={{ uri: photoUrl }} style={tw`w-full h-full`} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default PhotoComponent;