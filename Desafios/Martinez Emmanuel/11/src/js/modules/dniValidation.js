// Validación de DNI en dos formatos, con y sin puntos, y rango de 5.000.000 a 99.999.999
export const dniValidation = (dni) => {
    const dniPattern = /^([1-9][0-9]?)\.?[0-9]{3}\.?[0-9]{3}$/;
    const limpio = dni.replace(/\./g, "");
    const dniNumber = Number(limpio);
    const inRange = dniNumber >= 5000000 && dniNumber <= 99999999;

    return dniPattern.test(dni) && inRange;
};