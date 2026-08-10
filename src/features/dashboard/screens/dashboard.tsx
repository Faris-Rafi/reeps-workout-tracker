// import { Text } from "@/components/ui/Text";
import CircularProgress from "@/components/ui/CircularProgress";
import { Text } from "@/components/ui/Text";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
        <Text className="text-lg text-primary tracking-widest mb-2">
          Tuesday, Jul 28
        </Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-4xl text-primary font-black">Hey, John!</Text>
          <View className="flex-row items-center gap-1 rounded-3xl px-2 py-1 shadow-lg border border-gray-100 bg-white/90">
            <Ionicons name="flame" size={24} color="#ea580c" />
            <Text className="text-sm text-warning">12 day streak</Text>
          </View>
        </View>
      </View>

      <View className="mb-6 bg-gray-50 rounded-2xl shadow border border-gray-100 p-4">
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

        <View className="flex-1 absolute top-4 bottom-100 right-4 rounded-full bg-white shadow border border-gray-100 p-2">
          <Ionicons name="create" size={20} />
        </View>
      </View>
    </View>
  );
}
