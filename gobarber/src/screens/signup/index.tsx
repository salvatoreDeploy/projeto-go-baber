import React, { useRef } from "react";
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {
  Container,
  Title,
  Icon,
  BackToSignIn,
  BackToSignInText,
} from "./style";

import logoImg from "../../assets/Logo.png";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

export function SignUp() {
  const { goBack } = useNavigation();
  const formRef = useRef<FormHandles>(null);

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
              <Title>Crie sua Conta</Title>
            </View>
            <Form
              ref={formRef}
              onSubmit={(data) => {
                console.log(data);
              }}
            >
              <Input name="name" placeholder="Nome">
                <Icon name="user" size={20} color="#666360" />
              </Input>
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
                Cadastrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignIn onPress={() => goBack()}>
        <Icon name="arrow-left" size={20} color="#f4ede8" />
        <BackToSignInText>Voltar para o login</BackToSignInText>
      </BackToSignIn>
    </>
  );
}
