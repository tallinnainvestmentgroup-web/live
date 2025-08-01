document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".customBuyBtn");

  if (!btn) {
    console.warn("Custom buy button (.customBuyBtn) not found.");
    return;
  }

  btn.addEventListener("click", function () {
    // Get customer's name input
    const nameInput = document.querySelector('input[name="properties[Your name]"]');
    const firstName = nameInput ? nameInput.value.trim() : "";

    // Get selected variant (color)
    const selectedLabel = document.querySelector("label.option-item-active");
    const variantLabel = selectedLabel?.querySelector("[option-value]")?.getAttribute("option-value") || "";

    if (!variantLabel) {
      alert("Please choose an accessory color.");
      return;
    }

    // Compose product name
    const productName = firstName
      ? ${firstName} Water Bottle + ${variantLabel} Accessory
      : Personalised Water Bottle + ${variantLabel} Accessory;

    // Image URL mapping
    const productImageMap = {
      Blue: "https://cdn.shopify.com/s/files/1/0958/0625/9546/files/blue_bottom.png?v=1751373666",
      Pink: "https://cdn.shopify.com/s/files/1/0958/0625/9546/files/pink_bottom.png?v=1751373666",
      Orange: "https://cdn.shopify.com/s/files/1/0958/0625/9546/files/orange_bottom.png?v=1751373666",
      White: "https://cdn.shopify.com/s/files/1/0958/0625/9546/files/white_bottom.png?v=1751373668"
    };

    const imageUrl = productImageMap[variantLabel];
    const adv1 = encodeURIComponent(productName);
    const adv2 = encodeURIComponent(imageUrl);

    const checkoutUrl = https://www.molipy8trk.com/4784JN/42Q2FGQ/?adv1=${adv1}___${adv2};

    // Redirect
    window.location.href = checkoutUrl;
  });
});
