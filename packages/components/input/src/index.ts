import type { PropType } from "vue-demi";
import type { Config, PropTypes, EmitFn } from "~/types";

import { computed, defineComponent } from "vue-demi";

import { useSize } from "~/composables";
import { h } from "~/utils";

export type InputProps = PropTypes<typeof inputProps>;
export type InputEmits = typeof inputEmits;
export type InputEmitFn = EmitFn<InputEmits>;
export type InputInstance = InstanceType<typeof VInput>;

export const inputProps = {
  value: { type: [String, Number] },
  modelValue: { type: String },
  type: { type: String },
  size: { type: String as PropType<Config["size"]> },
  placeholder: { type: String },
  rows: { type: Number }
};

export const inputEmits = {
  input: (e: string) => typeof e === "string",
  "update:modelValue": (e: string) => typeof e === "string"
};

export const VInput = defineComponent({
  name: "VInput",
  props: inputProps,
  emits: inputEmits,
  setup(props, { emit }) {
    const size = useSize();
    const baseClass = "v-input";
    const sizeClass = computed(() => (size.value && size.value !== "default" ? ` ${baseClass}--${size.value}` : ""));
    const classes = computed(() => `${baseClass}${sizeClass.value}`);

    function onInput(e: Event & { target: HTMLInputElement }) {
      emit("input", e.target?.value);
      emit("update:modelValue", e.target?.value);
    }
    return () =>
      props.type === "textarea"
        ? h("textarea", {
            attrs: {
              value: props.value ?? props.modelValue,
              class: classes.value,
              rows: props.rows,
              placeholder: props.placeholder
            },
            on: {
              input: onInput
            }
          })
        : h("input", {
            attrs: {
              value: props.value ?? props.modelValue,
              class: classes.value,
              type: props.type,
              placeholder: props.placeholder
            },
            on: {
              input: onInput
            }
          });
  }
});
