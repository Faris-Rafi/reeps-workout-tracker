import Dashboard from "@/features/dashboard/screens/dashboard";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <Dashboard />
    </SafeAreaProvider>
  );
}
