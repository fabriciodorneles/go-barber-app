import React, { useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    Title,
    Container,
    AppointmentCreatedInfo,
    OkButton,
    OkButtonText,
} from './styles';

interface RouteParams {
    date: number;
}

const AppointmentCreated: React.FC = () => {
    const { reset } = useNavigation();
    const { params } = useRoute();

    const routeParams = params as RouteParams;

    const formattedDate = useMemo(() => {
        return format();
    }, []);

    const handleOkPressed = useCallback(() => {
        reset({
            routes: [{ name: 'Dashboard' }],
            index: 0,
        });
    }, [reset]);
    return (
        <Container>
            <Icon name="check" size={80} color="#04d361" />
            <Title>Agendamento Concluído</Title>
            <AppointmentCreatedInfo>
                Terça, dia 14 de março de 2020 às 12:00
            </AppointmentCreatedInfo>
            <AppointmentCreatedInfo>com Diego Fernandes</AppointmentCreatedInfo>
            <OkButton onPress={handleOkPressed}>
                <OkButtonText>Ok</OkButtonText>
            </OkButton>
        </Container>
    );
};

export default AppointmentCreated;
