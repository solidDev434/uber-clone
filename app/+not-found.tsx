import {Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function NotFound() {
    return (
        <SafeAreaView className="flex-1">
            <Text className={"text-lg"}>Not found</Text>
        </SafeAreaView>
    );
}