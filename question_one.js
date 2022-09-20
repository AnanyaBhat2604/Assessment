const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const alphaMatrix = (matrixSize) => {
    for (let i = 0; i < matrixSize; i++) {
        let string = "";
        for (let j = 1; j <= matrixSize; j++) {
            string += alpha[((j * matrixSize) - i - 1) % 26] + " ";
        }
        console.log(string);
    }
}
alphaMatrix(6);