// import { Text } from "@/components/ui/Text";
import { Text } from "@/components/ui/Text";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WeeklyCard from "../components/WeeklyCard";

export default function Dashboard() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: 20,
          paddingRight: 20,
        },
      ]}
      className="flex-1"
    >
      <View className="mb-6">
        <Text className="text-primary tracking-widest mb-2 uppercase">
          Thursday, Jul 31
        </Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-3xl text-primary font-black w-3/5">
            Hey, John
          </Text>
          <View className="flex-row items-center gap-1 rounded-3xl px-2 py-1 shadow border border-gray-100 bg-white w-1/3">
            <Ionicons name="flame" size={24} color="#ea580c" />
            <Text className="text-sm font-bold text-warning">
              12 day streak
            </Text>
          </View>
        </View>
      </View>

      <WeeklyCard />

      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-bold text-primary">Quick start</Text>
        <Pressable>
          <Text>All workouts</Text>
        </Pressable>
      </View>

      <View className="flex-row gap-2 mt-4">
        <View className="w-1/2 rounded-3xl p-4 overflow-hidden">
          <LinearGradient
            colors={["#dc2626", "#000000"]}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />

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

          <Text className="text-white uppercase text-xl font-extrabold mt-8">
            Push Day
          </Text>
          <Text className="text-white text-sm">Tap to start</Text>
        </View>
        <View className="w-1/2 rounded-3xl p-4 overflow-hidden">
          <LinearGradient
            colors={["#dc2626", "#000000"]}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />

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

          <Text className="text-white uppercase text-xl font-extrabold mt-8">
            Push Day
          </Text>
          <Text className="text-white text-sm">Tap to start</Text>
        </View>
      </View>
    </View>
  );
}
