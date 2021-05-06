const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      sizes : ["34-36","37-40","41-44"],
      variants: [
        { id: 34, color: " green" },
        { id: 35, color: " blue" },
      ],
    };
  },
});
