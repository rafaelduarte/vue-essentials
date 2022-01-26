<template>
  <div>
    <h2 class="mb-3">Checkout</h2>

    <table class="table table-hover" v-if="cart.length">
      <caption class="text-end h3">
        <b>Total:</b>
        <price
          class="d-block text-success font-weight-light"
          :value="Number(cartTotal)"
        />
      </caption>
      <thead class="table-light">
        <tr>
          <th scope="col"></th>
          <th scope="col">Item</th>
          <th scope="col" class="text-center">Qty</th>
          <th scope="col" class="text-end">Price</th>
          <th scope="col" class="text-end pe-3">Sub-total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="item.product.id">
          <td class="text-center">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                class="btn btn-sm btn-outline-primary"
                @click="$emit('add', item.product)"
              >
                <font-awesome-icon icon="plus" />
              </button>
              <button
                class="btn btn-sm btn-outline-danger"
                @click="$emit('delete', index)"
              >
                <font-awesome-icon icon="minus" />
              </button>
            </div>
          </td>
          <th scope="row">{{ item.product.name }}</th>
          <td class="text-center">{{ item.qty }}</td>
          <td class="text-end">
            <price :value="Number(item.product.price)" />
          </td>
          <td class="text-end pe-3">
            <price :value="Number(item.qty * item.product.price)" />
          </td>
        </tr>
      </tbody>
    </table>

    <div v-else class="d-flex bg-light p-5 mb-3">
      <span class="col p-4 text-center">
        <p class="display-6">Sorry :(</p>
        <p class="lead">It seems you didn't add products to your cart yet.</p>
      </span>
    </div>

    <router-link to="/">
      <span class="btn btn-outline-primary">Keep Shopping</span>
    </router-link>
  </div>
</template>

<script>
import Price from "./Price.vue";

export default {
  name: "checkout",
  props: ["cart", "cartTotal", "cartQty"],
  components: {
    Price,
  },
};
</script>
