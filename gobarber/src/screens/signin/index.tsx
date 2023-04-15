import React, { useCallback, useRef } from "react";
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile";

import {
  Container,
  Title,
  Icon,
  ForgotPassword,
  ForgorPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from "./style";

import logoImg from "../../assets/Logo.png";
import { FormHandles } from "@unform/core";

export function SignIn() {
  const { navigate } = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Faça seu Login</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input name="email" placeholder="E-mail">
                <Icon name="mail" size={20} color="#666360" />
              </Input>
              <Input name="password" placeholder="Password">
                <Icon name="lock" size={20} color="#666360" />
              </Input>
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>
            <ForgotPassword>
              <ForgorPasswordText>Esqueci Minha Senha</ForgorPasswordText>
            </ForgotPassword>
          </Container>
          <CreateAccountButton onPress={() => navigate("Signup")}>
            <Icon name="log-in" size={20} color="#ff9000" />
            <CreateAccountButtonText>Criar uma Conta</CreateAccountButtonText>
          </CreateAccountButton>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
