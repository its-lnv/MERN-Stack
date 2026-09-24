const user = {
    name: "Laxmi",
    email: "lakshminarayanverma91@gmail.com"
};

Object.entries(user).forEach(function ([key, value]) {
    console.log(`${key}: ${value}`);
})