import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
    Container,
    Header,
    HeaderTitle,
    UserName,
    ProfileButton,
    UserAvatar,
    ProvidersList,
} from './styles';

interface SignInFormData {
    email: string;
    password: string;
}

export interface Provider {
    id: string;
    name: string;
    avatar: string;
}

const Dashboard: React.FC = () => {
    const [providers, setProviders] = useState<Provider[]>([]);
    const { navigate } = useNavigation();
    const { signOut, user } = useAuth();

    const navigateToProfile = useCallback(() => {
        // navigate('Profile');
        signOut();
    }, []);

    useEffect(() => {
        api.get('providers').then(response => {
            setProviders(response.data);
        });
    }, []);
    return (
        <Container>
            <Header>
                <HeaderTitle>
                    Bem Vindo, {'\n'}
                    <UserName>{user.name}</UserName>
                </HeaderTitle>

                <ProfileButton onPress={navigateToProfile}>
                    <UserAvatar source={{ uri: user.avatar_url }} />
                </ProfileButton>
            </Header>
            <ProvidersList
                data={providers}
                keyExtractor={provider => provider.id}
                renderItem={({ item }) => <UserName>{item.name}</UserName>}
            />
        </Container>
    );
};

export default Dashboard;
