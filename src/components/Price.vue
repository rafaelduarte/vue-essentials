<template>
  <span> {{ currencyFormattedNumber }}</span>
</template>

<script>
export default {
  props: {
    value: Number,
    prefix: {
      type: String,
      default: "$",
    },
    precision: {
      type: Number,
      default: 2,
    },
    conversion: {
      type: Number,
      default: 1,
    },
    currency: {
      type: String,
      default: "CAD",
    },
  },
  computed: {
    currencyFormattedNumber: function () {
      // return (
      //   this.prefix +
      //   Number.parseFloat(this.value * this.conversion).toFixed(this.precision)
      // );
      return (this.value * this.conversion).toLocaleString(undefined, {
        style: "currency",
        currency: this.currency,
      });
    },
  },
};
</script>
