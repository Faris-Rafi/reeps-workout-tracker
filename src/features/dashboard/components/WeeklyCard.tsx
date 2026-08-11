import CircularProgress from "@/components/ui/CircularProgress";
import { Text } from "@/components/ui/Text";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export default function WeeklyCard() {
  return (
    <View className="mb-6 rounded-[2rem] shadow border border-gray-200 bg-white p-4 overflow-hidden">
      <LinearGradient
        colors={["#ffffff", "#f3f4f6"]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <View className="flex-row items-center gap-4 mb-2">
        <CircularProgress
          radius={70}
          strokeWidth={15}
          value={3}
          max={5}
          color="#232933"
          textColor="#232933"
        />
        <View className="flex-1 gap-1">
          <Text className="font-medium tracking-widest text-primary uppercase">
            Weekly Goal
          </Text>
          <Text className="text-2xl font-bold text-primary">
            2 workouts to go
          </Text>
          <Text className="text-primary">
            You're 60% of the way there. Keep pushing.
          </Text>
        </View>
      </View>

      <View className="border-b border-gray-200 my-4" />

      <View className="flex-row items-center justify-evenly gap-4">
        <View className="flex-col items-center gap-2">
          <Text className="text-sm font-bold text-primary">S</Text>
          <Text className="text-lg font-semibold text-primary px-2.5 py-1.5">
            27
          </Text>
        </View>
        <View className="flex-col items-center gap-2">
          <Text className="text-sm font-bold text-primary">M</Text>
          <Text className="text-lg font-semibold text-primary px-2.5 py-1.5">
            28
          </Text>
        </View>
        <View className="flex-col items-center gap-2">
          <Text className="text-sm font-bold text-primary">T</Text>
          <Text className="text-lg font-semibold text-primary px-2.5 py-1.5">
            29
          </Text>
        </View>
        <View className="flex-col items-center gap-2">
          <Text className="text-sm font-bold text-primary">W</Text>
          <Text className="text-lg font-semibold text-primary px-2.5 py-1.5">
            30
          </Text>
        </View>
        <View className="flex-col items-center gap-2">
          <Text className="text-sm font-bold text-primary">T</Text>
          <Text className="text-lg font-semibold text-primary border border-gray-400/80 rounded-full px-2.5 py-1.5">
            31
          </Text>
        </View>
        <View className="flex-col items-center gap-2">
          <Text className="text-sm font-bold text-primary">F</Text>
          <Text className="text-lg font-semibold text-primary px-2.5 py-1.5">
            01
          </Text>
        </View>
        <View className="flex-col items-center gap-2">
          <Text className="text-sm font-bold text-primary">S</Text>
          <Text className="text-lg font-semibold text-primary px-2.5 py-1.5">
            02
          </Text>
        </View>
      </View>

      <View className="flex-1 absolute top-4 bottom-100 right-4 rounded-full bg-white shadow border border-gray-100 p-2">
        <Ionicons name="create" size={20} />
      </View>
    </View>
  );
}
