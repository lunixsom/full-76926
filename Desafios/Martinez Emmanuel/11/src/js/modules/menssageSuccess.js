
export const showMessageSuccess = (client, attendanceCount) => {
  const successMsg = document.getElementById("msg-success");
  successMsg.textContent = `Hola ${client.name}, esta es tu asistencia número ${attendanceCount}`;
  successMsg.classList.remove("hidden");
}