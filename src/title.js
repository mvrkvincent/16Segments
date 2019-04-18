const enter = () => {
  document.getElementById("title").classList.add('hidden');
  document.getElementById("app").classList.remove('centered')
  document.getElementById("ledger").classList.remove('hidden');
  document.getElementById("top-bar").classList.remove('hidden');
  document.getElementById("sub-total").classList.remove('hidden');
}

const exit = () => {
  document.getElementById("title").classList.remove('hidden');
  document.getElementById("app").classList.add('centered')
  document.getElementById("ledger").classList.add('hidden');
  document.getElementById("top-bar").classList.add('hidden');
  document.getElementById("sub-total").classList.add('hidden');
}