export const LOADING_DELAY = 1000;
export const PERCENTAGE_CHANCE_OF_ERROR = 0.1;

export const addVariance = async () => {
    await new Promise(resolve => setTimeout(resolve, LOADING_DELAY));
    const randomNumber = Math.random();
    if (randomNumber <= PERCENTAGE_CHANCE_OF_ERROR) {
        throw new Error(`Your number was too high: ${randomNumber} > ${PERCENTAGE_CHANCE_OF_ERROR}`);
    }
}