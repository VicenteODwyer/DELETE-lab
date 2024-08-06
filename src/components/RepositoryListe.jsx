import react from "react";
import { View, Text } from "react-native";
import repositories from '../data/repositories.js'

const ReposList = () => {
    return(
        <View>
            {repositories.map(repo =>(
                <View key={repo.id}>
                    <Text>{repo.id}</Text>
                </View>
            ))}
        </View>
    )
}