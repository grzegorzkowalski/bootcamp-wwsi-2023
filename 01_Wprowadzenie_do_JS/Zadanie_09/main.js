const cake = "🎂";

const age = new Date().getFullYear() - 1986;

for (let i = 1; i <= age; i++) {
    setTimeout(() => {
        console.log(cake);
    }, 100*i);
}
