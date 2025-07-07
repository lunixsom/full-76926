// Base de datos de clientes
export const clients = [
  { id: 1, name: "Lucía", lastname: "Medina", dni: "25.643.820" },
  { id: 2, name: "Martín", lastname: "Maldonado", dni: "31.278.914" },
  { id: 3, name: "Martina", lastname: "Acosta", dni: "40.385.720" },
  { id: 4, name: "Julián", lastname: "Domínguez", dni: "55.942.106" },
  { id: 5, name: "Lorena", lastname: "Morales", dni: "5.643.820" },
];

export const findClient = (dni) => {
  const cleanedDni = dni.replace(/\./g, "");
  const filteredClients = clients.filter(client =>
    client.dni.replace(/\./g, "") === cleanedDni
  );

  return filteredClients.length > 0 ? filteredClients[0] : null;
};