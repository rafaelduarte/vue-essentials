<template>
  <nav class="navbar fixed-top navbar-light pe-2" :class="navGradientState">
    <div class="navbar-text ms-auto d-flex align-items-center">
      <button
        type="button"
        class="btn btn-sm btn-outline-success"
        @click="$parent.$emit('toggle')"
      >
        <font-awesome-icon icon="dollar-sign" />
      </button>

      <div class="dropdown ms-2" v-if="cart.length > 0">
        <button
          type="button"
          class="btn btn-sm btn-success dropdown-toggle"
          id="cartDropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="badge rounded-pill bg-light text-dark">
            {{ cartQty }}
          </span>
          <font-awesome-icon class="mx-2" icon="shopping-cart" />
          <price :value="cartTotal" />
        </button>

        <div
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="cartDropdown"
        >
          <div class="" v-for="(item, index) in cart" :key="index">
            <div
              class="d-flex dropdown-item-text text-nowrap text-end align-items-center justify-content-end"
            >
              <span
                class="badge rounded-pill bg-warning align-text-top px-2 me-1"
              >
                {{ item.qty }}
              </span>
              <span class="px-1">
                {{ item.product.name }}
              </span>
              <span class="px-1">
                <price class="fw-bold" :value="item.qty * item.product.price" />
              </span>
              <a
                href="#"
                class="badge bg-danger text-white text-decoration-none ms-1"
                @click.stop="$parent.$emit('delete', index)"
              >
                <font-awesome-icon icon="minus" />
              </a>
            </div>
          </div>
          <router-link to="/checkout">
            <span class="btn btn-sm btn-outline-primary float-end me-3">
              Checkout
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Price from "./Price.vue";

export default {
  name: "navbar",
  // props: ["cart", "cartQty", "cartTotal"],
  props: {
    cart: Array,
    cartQty: Number,
    cartTotal: Number,
  },
  components: {
    Price,
  },
  computed: {
    navGradientState: function () {
      return this.cart.length > 0 ? "nav-gradient" : "";
    },
  },
};
</script>

<style scoped>
.nav-gradient {
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 85%,
    rgba(255, 255, 255, 1) 88%
  );
}
</style>
