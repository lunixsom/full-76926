
// Funcion para contar la presencia de un DNI
// Esta función devuelve un contador de presencia para cada DNI.
export const counterPresence = () => {
    const presence = {};
    return (dni) => {
        presence[dni] = (presence[dni] || 0) + 1;
        return presence[dni];
    };
}