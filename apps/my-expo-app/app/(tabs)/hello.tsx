import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Button } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { trpcReact } from '@/clients/trpc';
import { useState } from 'react';
import { TextInput } from 'react-native';

export default function TabTrpcScreen() {
  const [currentGreeting, setCurrentGreeting] = useState("World");
  const { data, isLoading } = trpcReact.hello.useQuery(currentGreeting);
  const [inputValue, setInputValue] = useState("");
  const utils = trpcReact.useUtils();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">tRPC Demo</ThemedText>
      </ThemedView>
      <ThemedText>This app includes example code to help you get started.</ThemedText>

        <ThemedText>
          {data}
        </ThemedText>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter your name"
        />
        <Button
          title="Click Me"
          onPress={async () => {
            setCurrentGreeting(inputValue);
            await utils.hello.invalidate();
          }}
        />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
