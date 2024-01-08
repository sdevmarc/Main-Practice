import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity, Alert } from 'react-native'
import { Button } from '@rneui/base';
import * as FileSystem from 'expo-file-system';


const CreateTab = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [products, setProducts] = useState([]);

    const getFilePath = () => {
        return `${FileSystem.documentDirectory}products.json`;
    };

    const loadProducts = async () => {
        try {
            const filePath = getFilePath();
            const fileExists = await FileSystem.getInfoAsync(filePath);

            if (fileExists.exists) {
                const fileContent = await FileSystem.readAsStringAsync(filePath);
                const parsedProducts = JSON.parse(fileContent);
                console.log(parsedProducts)
                // setProducts(parsedProducts);
            }
        } catch (error) {
            console.error('Error loading products:', error);
        }
    };

    const saveProduct = async () => {
        try {
            const newProduct = { name: productName, price: productPrice };
            const newProducts = [...products, newProduct];
            const filePath = getFilePath();

            
            await FileSystem.writeAsStringAsync(filePath, JSON.stringify(newProducts), {
                encoding: FileSystem.EncodingType.UTF8,
            });

            setProducts(newProducts);
            setProductName('');
            setProductPrice('');
            Alert.alert('Yay!', 'Product saved successfully.');
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };


    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.SafeView}>
                <View style={styles.formInput}>
                    <View style={styles.viewInput}>
                        <Text>
                            Product name
                        </Text>
                        <TextInput
                            placeholder='Message'
                            style={styles.textInput}
                            value={productName}
                            onChangeText={(text) => setProductName(text)}
                        />
                    </View>
                    <View style={styles.viewInput}>
                        <Text>
                            Price
                        </Text>
                        <TextInput
                            placeholder='Price'
                            style={styles.textInput}
                            value={productPrice}
                            onChangeText={(text) => setProductPrice(text)}
                            keyboardType="numeric"
                        />
                    </View>
                    <Button title='Submit'
                        onPress={() => {
                            saveProduct()
                            loadProducts()
                        }}
                        buttonStyle={{
                            width: 250,
                            borderRadius: 15

                        }} />
                </View>
            </SafeAreaView>
        </>

    )
}

export default CreateTab

const styles = StyleSheet.create({
    SafeView: {
        flex: 1,
        backgroundColor: "#e3e3e3"
    },
    formInput: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    viewInput: {
        gap: 10
    },
    textInput: {
        width: 300,
        height: 40,
        padding: 10,
        borderWidth: 0,
        borderRadius: 17,
        backgroundColor: "white"
    },
    submitButton: {
        width: 10
    }
})