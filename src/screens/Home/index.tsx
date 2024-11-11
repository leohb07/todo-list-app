import { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Tasks } from "../../components/Tasks";
import { ProgressTask } from "../../components/ProgressTask";

import uuid from "react-native-uuid";

import Logo from "../../../assets/logo.svg";
import Clipboard from "../../../assets/clipboard.svg";

import { styles } from "./styles";

type Task = {
  id: string;
  name: string;
  finishedAt: Date | null;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState<string>("");

  const handleTaskAdd = () => {
    if (!taskName) return;

    const payload: Task = {
      id: uuid.v4() as string,
      name: taskName,
      finishedAt: null,
    };

    setTasks((prevState) => [...prevState, payload]);
    setTaskName("");
    Keyboard.dismiss();
  };

  const handleTaskRemove = (taskId: string) => {
    Alert.alert("Atenção!", "Deseja remover essa tarefa?", [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) =>
            prevState.filter((item) => item.id !== taskId)
          );
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  const handleTaskFinished = (taskId: string) => {
    setTasks((prevState) =>
      prevState.map((item) => {
        if (item.id === taskId && item.finishedAt) {
          item.finishedAt = null;
          return item;
        }

        if (item.id === taskId) {
          item.finishedAt = new Date();
        }

        return item;
      })
    );
  };

  const finishedTaskCount = tasks.reduce((acc, item) => {
    if (item.finishedAt) {
      acc += 1;
    }

    return acc;
  }, 0);

  return (
    <SafeAreaView style={styles.safaAreaViewContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Logo width={132} height={70} />
        </View>

        <View style={styles.form}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            style={styles.input}
            value={taskName}
            onChangeText={setTaskName}
          />

          <TouchableOpacity style={styles.buttonAdd} onPress={handleTaskAdd}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.progressContainer}>
          <ProgressTask name="Criadas" value={tasks.length} color="#4EA8DE" />

          <ProgressTask
            name="Concluídas"
            value={finishedTaskCount}
            color="#8284FA"
          />
        </View>

        <FlatList
          style={{ marginTop: 20 }}
          data={tasks}
          renderItem={({ item }) => {
            const isFinished = !!item.finishedAt;

            return (
              <Tasks
                name={item.name}
                isFinished={isFinished}
                onFinish={() => handleTaskFinished(item.id)}
                onRemove={() => handleTaskRemove(item.id)}
              />
            );
          }}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <View style={styles.listEmptyContainer}>
              <Clipboard />

              <View style={{ marginTop: 16 }}>
                <Text style={styles.textListEmpty}>
                  Você ainda não tem tarefas cadastradas
                </Text>

                <Text style={[styles.textListEmpty, { fontWeight: "normal" }]}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
