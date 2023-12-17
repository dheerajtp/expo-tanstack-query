import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { getPosts } from "../api";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const renderItem = ({ item }) => {
    return <Text>{item.title}</Text>;
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar />
      <Text>Home Page</Text>
      {isLoading && <ActivityIndicator size="large" />}
      {data && (
        <FlatList
          data={data.result}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default App;
