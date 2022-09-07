<template>
  <VForm
    :validation-schema="loginInputScheme"
    class="flex flex-col items-center space-y-5 py-5"
    v-slot="{ errors }"
    @submit="onSubmit"
  >
    <VField name="email" v-slot="{ field, errorMessage }">
      <app-input
        :field="field"
        :error-message="errorMessage"
        label="Email"
        name="email"
      >
        <template #prepend="{ class: className, onClickIcon }">
          <span @click="onClickIcon" :class="className" class="material-icons"
            >mail</span
          >
        </template>
      </app-input>
    </VField>
    <VField name="password" v-slot="{ field, errorMessage }">
      <app-input
        :field="field"
        :error-message="errorMessage"
        name="password"
        label="Password"
        :type="passwordIsVisible ? 'text' : 'password'"
      >
        <template #prepend="{ class: className, onClickIcon }">
          <span class="material-icons" :class="className" @click="onClickIcon"
            >lock</span
          >
        </template>
        <template #append="{ class: className }">
          <span class="material-icons" :class="className" @click="onVisible">{{
            passwordIsVisible ? "visibility_off" : "visibility"
          }}</span>
        </template>
      </app-input>
    </VField>
    <v-btn
      :disabled="isDisabled(errors)"
      :class="{ 'cursor-auto bg-emerald-400/40': isDisabled(errors) }"
      type="submit"
    >
      Login
    </v-btn>
    <div>
      <span
        >Нет аккаунта?
        <nuxt-link class="underline text-green-400" to="/register"
          >Регистрация</nuxt-link
        ></span
      >
    </div>
  </VForm>
</template>
<script lang="ts" setup>
import { ref, useRouter } from "#imports";
import AppInput from "~/components/Input.vue";
import { loginInputScheme } from "~/utils/validation.scheme";
import VBtn from "~/components/Button.vue";
import { ILoginInput } from "~/components/auth-forms/model";
import { useMutation } from "@vue/apollo-composable";
import { userLoginMutation } from "~/graphql/user";
import { IUserResponse } from "~/types";
import { useUserStore } from "~/store/useUserStore";

const userStore = useUserStore();
const router = useRouter();
const passwordIsVisible = ref(false);
const isDisabled = (errors: Record<string, string>) => {
  return Object.values(errors).length !== 0;
};
const onVisible = () => {
  passwordIsVisible.value = !passwordIsVisible.value;
};

const { mutate: loginMutate } = useMutation<
  IUserResponse,
  { loginData: ILoginInput }
>(userLoginMutation);
const onSubmit = async (values: ILoginInput) => {
  try {
    const { data } = await loginMutate({
      loginData: values,
    });
    const { accessToken, ...userData } = data.login;
    localStorage.setItem("token", accessToken);
    userStore.setUser(userData);
    await router.push("/");
  } catch (e) {
    console.log(e.message);
  }
};
</script>
