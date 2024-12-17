const randomNumberGenerator = (num) => {
    return Math.floor(Math.random()*num)
};

const wellnessQuotes = [
    "It is health that is real worth and not pieces of gold and silver",
    "A healthy outside starts from the inside",
    "Your body hears everything your mind says",
    "The first wealth is health",
    "Happiness is the path to health",
    "Create healthy habits, not restrictions",
    "The groundwork of all happiness is health",
    "The greatest of follies is to sacrifice health for any other kind of happiness",
    "True happiness comes from within",
    "There is a crack in everything, that's how the light gets in"
];

const luckyAnimal = [
    "Cat",
    "Dog",
    "Rabbit",
    "Pony",
    "Hamster"
];

const calmingMood = [
    "Relaxed",
    "Energised",
    "Calm",
    "Inspired",
    "At peace"
]

const todaysQuote = () => {
    console.log(`You're quote for the day is "${wellnessQuotes[randomNumberGenerator(wellnessQuotes.length)]}". Aim to be like a ${luckyAnimal[randomNumberGenerator(luckyAnimal.length)]} that is feeling ${calmingMood[randomNumberGenerator(calmingMood.length)]}`)
};

todaysQuote();