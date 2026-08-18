import { Text } from "@/components/ui/Text";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ColorValue, FlatList, View } from "react-native";

const DUMMY_EXERCISES = [
  { exercise: "Push Day", color: ["#FF5A5F", "#7A1220"] },
  { exercise: "Pull Day", color: ["#3B82F6", "#0F2A6B"] },
  { exercise: "Leg Day", color: ["#22C55E", "#0F4D2A"] },
  { exercise: "Core & Mobility", color: ["#F59E0B", "#7A3B0A"] },
];

export default function QuickStart() {
  return (
    <FlatList
      data={DUMMY_EXERCISES}
      numColumns={DUMMY_EXERCISES.length / 2}
      columnWrapperStyle={{ gap: 8 }}
      contentContainerStyle={{ gap: 8 }}
      className="w-full mt-4"
      renderItem={({ item }) => (
        <View className="flex-1 aspect-[1.3] rounded-3xl py-2 px-4 overflow-hidden">
          <LinearGradient
            colors={item.color as [ColorValue, ColorValue, ...ColorValue[]]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />

          <View className="flex-1 flex-col justify-between py-2">
            <View className="flex-row justify-between items-center">
              <View className="bg-white/20 rounded-3xl py-2 px-4">
                <Text className="text-white uppercase text-sm font-bold">
                  4 moves
                </Text>
              </View>
              <View className="bg-white/20 rounded-3xl py-2 px-2">
                <Ionicons name="play" size={18} color="#fff" />
              </View>
            </View>

            <View>
              <Text className="text-white text-xl font-extrabold">
                {item.exercise}
              </Text>
              <Text className="text-white text-sm">Tap to start</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}
