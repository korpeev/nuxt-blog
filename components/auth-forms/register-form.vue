<template>
  <VForm
    :validation-schema="registerInputScheme"
    class="flex flex-col items-center space-y-5 py-5"
    v-slot="{ errors }"
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
    <VField name="username" v-slot="{ field, errorMessage }">
      <app-input
        :field="field"
        :error-message="errorMessage"
        label="Username"
        name="username"
      >
        <template #prepend="{ class: className, onClickIcon }">
          <span @click="onClickIcon" :class="className" class="material-icons"
            >person</span
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
    <VField name="passwordConfirm" v-slot="{ field, errorMessage }">
      <app-input
        :field="field"
        :error-message="errorMessage"
        name="passwordConfirm"
        label="Second password"
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
      title="Register"
      type="submit"
    />
    <div>
      <span
        >Есть Аккаунт?
        <nuxt-link class="underline text-green-400" to="/login"
          >Войти</nuxt-link
        ></span
      >
    </div>
  </VForm>
</template>
<script setup lang="ts">
import { ref } from "#imports";
import AppInput from "~/components/Input.vue";
import { registerInputScheme } from "~/utils/validation.scheme";
import VBtn from "~/components/Button.vue";

const passwordIsVisible = ref(false);
const isDisabled = (errors: Record<string, string>) => {
  return Object.values(errors).length !== 0;
};

const onVisible = () => {
  passwordIsVisible.value = !passwordIsVisible.value;
};
</script>
