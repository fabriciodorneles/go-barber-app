import React from 'react';
import {
    Image,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.png';

import {
    Container,
    Title,
    CreateAccountButton,
    CreateAccountButtonText,
} from './styles';

interface SignInFormData {
    email: string;
    password: string;
}

const Dashboard: React.FC = () => {
    const navigation = useNavigation();
    const { signOut } = useAuth();
    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>
                        <Image source={logoImg} />
                        <View>
                            <Title>Dashboard</Title>
                        </View>
                        <View>
                            <Title>Você está logado.</Title>
                        </View>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
            <CreateAccountButton onPress={signOut}>
                <Icon name="arrow-left" size={20} color="#ff9000" />
                <CreateAccountButtonText>Logout</CreateAccountButtonText>
            </CreateAccountButton>
        </>
    );
};

export default Dashboard;
