import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
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
      <View className="flex-1 mb-6">
        <Text className="text-lg text-[#13161b] tracking-widest mb-2">
          Tuesday, Jul 28
        </Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-4xl text-[#13161b] font-black">Hey, John!</Text>
          <View className="flex-row items-center gap-1 rounded-3xl px-2 py-1 shadow-lg border border-gray-100 bg-white">
            <Ionicons name="flame" size={24} color="#ea580c" />
            <Text className="text-sm text-orange-600">12 day streak</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
