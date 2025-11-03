// Counter animation up to 4200
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = 4200; // 👈 set your target value here
  let count = 0; // start from 0
  const speed = 200; // higher = slower animation
  const increment = target / speed;

  const updateCount = () => {
    if (count < target) {
      count += increment;
      counter.innerText = Math.ceil(count);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target; // ensure final number is exact
    }
  };

  updateCount();
});
