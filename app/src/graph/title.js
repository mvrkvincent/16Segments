export const enter = () => {
  document.getElementById("tag-line").classList.add('hidden');
  document.getElementById("enter-r").classList.add('hidden');
  document.getElementById("enter-l").classList.add('hidden');
  document.getElementById("app").classList.remove('centered');
  document.getElementById("ledger").classList.remove('hidden');
  document.getElementById("nav").classList.remove('hidden');
  document.getElementById("sub-total").classList.remove('hidden');
};

export const exit = () => {
  document.getElementById("tag-line").classList.remove('hidden');
  document.getElementById("app").classList.add('centered');
  document.getElementById("ledger").classList.add('hidden');
  document.getElementById("nav").classList.add('hidden');
  document.getElementById("sub-total").classList.add('hidden');
};