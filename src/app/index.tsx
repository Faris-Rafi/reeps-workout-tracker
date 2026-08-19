import Dashboard from "@/features/dashboard/screens/dashboard";
import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider className="overflow-auto">
      <ScrollView>
        <Dashboard />
      </ScrollView>
    </SafeAreaProvider>
  );
}
