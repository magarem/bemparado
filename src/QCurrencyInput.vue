<template>
  <q-input
    ref="inputRef"
    v-model="value"
    outlined
    :label="label"
    :error-message="errorMessage"
    :error="!!errorMessage"
  />
</template>

<script>
import { parse, useCurrencyInput } from "vue-currency-input";
import { useField } from "vee-validate";

export default {
  name: "QCurrencyInput",
  props: {
    label: String,
    modelValue: Number,
    options: Object,
  },
  setup(props) {
    const { inputRef } = useCurrencyInput(props.options);
    const validateMinValue = (value) => {
      return true
      // if (parse(value, props.options) < 1000) {
      //   return "Minimum value is 1000";
      // } else {
      //   return true;
      // }
    };
    const { errorMessage, value } = useField("amount", validateMinValue);

    return { inputRef, errorMessage, value };
  },
};
</script>