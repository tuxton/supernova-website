// Simple add-to-cart helper for theme: listens for clicks on .sn-add-to-cart
// and adds the variant via AJAX, then redirects to /cart
(function () {
  if (typeof document === 'undefined') return;

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.sn-add-to-cart');
    if (!btn) return;

    var variantId = btn.getAttribute('data-variant-id');
    if (!variantId) {
      console.warn('sn-add-to-cart clicked but no data-variant-id');
      return;
    }

    e.preventDefault();
    btn.setAttribute('disabled', 'true');

    fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: variantId, quantity: 1 })
    }).then(function (r) { return r.json(); })
      .then(function () {
        // If the button requested no redirect, show an inline confirmation instead
        if (btn.getAttribute && btn.getAttribute('data-no-redirect') === 'true') {
          showConfirmation('El eBook fue agregado al carrito');
          btn.removeAttribute('disabled');
          return;
        }
        window.location.href = '/cart';
      })
      .catch(function (err) {
        console.error('Add to cart failed', err);
        btn.removeAttribute('disabled');
        alert('No se pudo agregar el producto al carrito. Intenta de nuevo.');
      });
  }, false);

  // Handle product forms with class .sn-product-form
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form.classList || !form.classList.contains('sn-product-form')) return;
    e.preventDefault();

    var submitBtn = form.querySelector('.sn-add-to-cart');
    if (submitBtn) submitBtn.setAttribute('disabled', 'true');

    var formData = new FormData(form);
    var id = formData.get('id');
    var quantity = parseInt(formData.get('quantity') || '1', 10);

    fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id, quantity: quantity })
    }).then(function (r) { return r.json(); })
      .then(function () {
        // If the form requested no redirect, show inline confirmation instead
        if (form.getAttribute && form.getAttribute('data-redirect') === 'false') {
          var conf = document.getElementById('sn-product-confirm');
          if (conf) {
            conf.style.display = 'block';
          } else {
            showConfirmation('El eBook fue agregado al carrito');
          }
          if (submitBtn) submitBtn.removeAttribute('disabled');
          return;
        }
        window.location.href = '/cart';
      })
      .catch(function (err) {
        console.error('Add to cart (form) failed', err);
        if (submitBtn) submitBtn.removeAttribute('disabled');
        alert('No se pudo agregar el producto al carrito. Intenta de nuevo.');
      });
  }, false);

  // Small utility to show a temporary confirmation toast
  function showConfirmation(msg) {
    try {
      var id = 'sn-cart-confirm-toast';
      var el = document.getElementById(id);
      if (!el) {
        el = document.createElement('div');
        el.id = id;
        el.style.position = 'fixed';
        el.style.right = '16px';
        el.style.bottom = '16px';
        el.style.padding = '12px 16px';
        el.style.background = 'rgba(0,0,0,0.8)';
        el.style.color = 'white';
        el.style.borderRadius = '8px';
        el.style.zIndex = 9999;
        document.body.appendChild(el);
      }
      el.textContent = msg;
      el.style.display = 'block';
      setTimeout(function () { el.style.display = 'none'; }, 3500);
    } catch (e) { /* ignore */ }
  }
})();
