import { SafeAreaProvider } from "react-native-safe-area-context";
import Dashboard from "./dashboad";

export default function Index() {
  return (
    <SafeAreaProvider>
      <Dashboard />
    </SafeAreaProvider>
  );
}
