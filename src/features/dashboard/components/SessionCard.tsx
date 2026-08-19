import { Text } from "@/components/ui/Text";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

interface SessionCardProps {
  name: string;
  last_activity: string;
  time: string;
  exercise_count: number;
}

export default function SessionCard({
  name,
  last_activity,
  time,
  exercise_count,
}: SessionCardProps) {
  return (
    <View className="mt-4 rounded-3xl shadow border border-gray-200 bg-white p-4 overflow-hidden">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-4">
          <View className="rounded-full py-3 px-3 overflow-hidden">
            <LinearGradient
              colors={["#232933", "#343b45"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />
            <Ionicons
              name="barbell-sharp"
              size={18}
              color="#fff"
              className="transform -rotate-45"
            />
          </View>
          <View className="w-10/12">
            <Text className="font-semibold">{name}</Text>
            <View className="flex-row gap-3 mt-0.5 items-center">
              <Text className="text-xs text-muted">{last_activity}</Text>
              <Text className="text-xs text-muted">
                <Ionicons name="time" size={12} color="#5f636a" /> {time}
              </Text>
              <Text className="text-xs text-muted">
                {exercise_count} exercises
              </Text>
            </View>
          </View>
        </View>

        <Ionicons name="chevron-forward" size={18} color="#5f636a" />
      </View>
    </View>
  );
}
