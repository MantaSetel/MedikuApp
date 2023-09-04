import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    useWindowDimensions,
} from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import FetchAdapter from '../../use-cases/FetchAdapter';
import { COLORS } from '../../constants';
import Loader from '../../components/Loader';
import * as ImageManipulator from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker

const LoadingSection = () => {
    return (
        <View
            style={{
                width: '100%',
                height: '110%',
                position: 'absolute',
                zIndex: 999,
                backgroundColor: COLORS.background,
            }}
        >
            <Loader />
        </View>
    );
};

const AICamera = ({ navigation, route }) => {
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [cameraRef, setCameraRef] = useState(null);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const malnutritionResultId = route.params?.malnutritionResultId || null;

    const { width } = useWindowDimensions();
    const height = Math.round((width * 16) / 9);

    useEffect(() => {
        requestPermission();
    }, []);

    const sendPredict = async (photoUri) => {
        const formData = new FormData();

        formData.append('image', {
            uri: photoUri,
            type: 'image/jpeg', // Adjust the type if needed
            name: 'photo.jpg', // Adjust the file name if needed
        });

        if (malnutritionResultId)
            formData.append('malnutritionResultId', malnutritionResultId);

        try {
            const response = await FetchAdapter.post(
                'food-nutrition/detect',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            // Handle the response as needed
            return response;
        } catch (error) {
            // Handle errors
            console.error('Error uploading photo:', error);
        }
    };

    const takePhoto = async () => {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            setLoading(true);
            const compressedPhoto = await ImageManipulator.manipulateAsync(
                photo.uri,
                [],
                { compress: 0.3 } // Adjust the compression level as needed (0.5 means 50% compression)
            );
            const response = await sendPredict(compressedPhoto.uri);
            setLoading(false);
            return navigation.navigate('AIResult', {
                photoUri: compressedPhoto.uri,
                results: response.data,
                malnutritionResultId,
            });
        }
    };

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3], // You can adjust the aspect ratio as needed
                quality: 0.5, // Adjust the image quality as needed
            });

            if (!result.cancelled) {
                console.log('Selected image URI:', result.uri);
            }
            setLoading(true);
            const response = await sendPredict(result.assets[0].uri);

            return navigation.navigate('AIResult', {
                photoUri: result.assets[0].uri,
                results: response.data,
                malnutritionResultId,
            });
        } catch (error) {
            console.error('Error picking an image from gallery:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        console.log('Flash:', flash);
    }, [flash]);

    const toggleFlash = () => {
        setFlash(
            flash === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off
        );
    };

    const toggleCameraType = () => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    if (permission === null) {
        return <View />;
    }

    if (permission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            {loading ? <LoadingSection /> : ''}
            <View style={styles.cameraWrapper}>
                <View style={styles.actionHeaderWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        {/* close camera */}
                        <Ionicons name="close" size={32} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleFlash}>
                        {/* flash */}
                        <Ionicons
                            name={
                                flash === Camera.Constants.FlashMode.off
                                    ? 'flash-off'
                                    : 'flash'
                            }
                            size={32}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
                <Camera
                    style={{ ...styles.camera, width: '100%', height }}
                    ratio="16:9"
                    ref={(ref) => setCameraRef(ref)}
                    autoFocus={Camera.Constants.AutoFocus.on}
                    flashMode={flash}
                    type={type}
                />
            </View>

            <View style={styles.actionBottomWrapper}>
                <TouchableOpacity onPress={pickImage}>
                    {/* gallery */}
                    <Ionicons name="images" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={takePhoto}>
                    <Ionicons name="camera" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleCameraType}>
                    {/* switch camera type */}
                    <Ionicons name="camera-reverse" size={32} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    cameraWrapper: {
        flex: 0.86,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
    },
    actionHeaderWrapper: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        position: 'absolute',
        top: 20,
        left: 0,
        zIndex: 1,
    },
    actionBottomWrapper: {
        flex: 0.14,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#3498db',
        borderRadius: 50,
        padding: 15,
    },
});

export default AICamera;
