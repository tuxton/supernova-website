// Cart page JS (theme): handle quantity updates and remove actions via AJAX
(function () {
  if (typeof document === 'undefined') return;

  function toJSON(resp) { return resp.json(); }

  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form.classList.contains('sn-qty-form')) return;
    e.preventDefault();

    var line = parseInt(form.dataset.line, 10);
    var qtyInput = form.querySelector('input[name="quantity"]');
    var quantity = parseInt(qtyInput && qtyInput.value || 0, 10);

    fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ line: line, quantity: quantity })
    }).then(toJSON).then(function () {
      window.location.reload();
    }).catch(function (err) {
      console.error('Cart update failed', err);
    });
  }, false);

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.sn-remove');
    if (!btn) return;
    var item = btn.closest('.sn-cart__item');
    if (!item) return;
    var line = parseInt(item.dataset.line, 10);
    if (!line) return;

    if (!confirm('Eliminar este producto del carrito?')) return;

    fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ line: line, quantity: 0 })
    }).then(toJSON).then(function () {
      window.location.reload();
    }).catch(function (err) {
      console.error('Cart remove failed', err);
    });
  }, false);

})();
